# Transaction

스프링에서는 두가지의 트랜잭션 방법을 사용한다.

첫번째는 선언에 의한 **선언적 트랜잭션** 이다.

두번째는 **프로그램에 의한 트랜잭션** 이다.

프로그램에 의한 트랜잭션은 `try ~ catch` 구문을 사용하여 커밋과 롤백을 이용하여 트랜잭션을 처리한다.

선언적 트랜잭션은 AOP를 이용하는 방식과 어노테이션을 이용하는 방식이 있다.

## AOP 를 이용한 선언적 트랜잭션

`context-datasource.xml` 의 내용을 수정

```xml {7,8,9}
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:aop="http://www.springframework.org/schema/aop" xmlns:tx="http://www.springframework.org/schema/tx" xsi:schemaLocation=" http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd "> 
  
  … 생략 …

  <!-- Transaction Manager -->
  <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource" />
  </bean>

  <tx:advice id="txAdvice" transaction-manager="transactionManager">
    <tx:attributes>
      <tx:method name="get*" read-only="true" />
        <tx:method name="delete*" />
    </tx:attributes>
  </tx:advice>

  <aop:config>
    <aop:pointcut id="transactionPointcut" expression="execution(* com.syaku.bbs.dao.BbsDao.*(..))"/>
    <aop:advisor advice-ref="txAdvice" pointcut-ref="transactionPointcut" />
  </aop:config>

  <bean id="bbsDao" class="com.syaku.bbs.dao.BbsDao"/>

</beans>
```

`transactionManager` 에서는 **dataSource** 정의를 참조한다.

기존 jdbc 로그를 출력하기 위해 생성한 dataSource 를 참조한다.  
만약 로그가 없다면 연결을 위해 생성한 dataSource 를 참조한다.

`tx` 는 스프링 트랜젝션을 담당하며 `tx` 를 사용하기 위해 상단에 네임스페이스를 추가하였다.

### `<tx:method>` 속성

|속성명|역할|
|:-:|:-|
|name|트랜잭션이 적용될 메서드 이름을 명시하며 필수 속성이다.<br/>`get*` `delete*` `*` 이 설정 가능하다.|
|propagation|트랜잭션의 전파동작을 설정한다.<br/>기본값은 `REQUIRED` 이다.<br/>해당 옵션은 아래에서 설명|
|isolation|트랜잭션의 격리 수준을 설정한다.<br/>기본값은 `DEFAULT` 이다.<br/>해당 옵션은 아래에서 설명|
|timeout|트랜잭션의 시간 초과값을 설정한다.<br/>기본값은 `-1` 이다.|
|read-only|읽기 전용 여부를 설정한다.<br/>기본값은 `false`이다.|
|rollback-for|롤백할 예외를 설정한다.<br/>여러개를 입력할 경우 콤마(`,`) 로 구분한다.<br/>기본값은 `RuntimeException` 이다.<br/>|
|no-rollback-for|롤백하지 않을 예외를 설정한다.<br/>여러개를 입력할 경우 콤마(`,`) 로 구분한다.|

### propagation - 전파 옵션 (기본값 : `REQUIRED`)

|속성값|설명|
|:-:|:-|
|REQUIRED|부모 트랜잭션 내에서 실행하며 부모 트랜잭션이 없을 경우 새로운 트랜잭션을 생성한다.|
|REQUIRES_NEW|부모 트랜잭션을 무시하고 무조건 새로운 트랜잭션이 생성된다.|
|SUPPORT|부모 트랜잭션 내에서 실행하며 부모 트랜잭션이 없을 경우 nontransactionally 로 실행된다.|
|MANDATORY|부모 트랜잭션 내에서 실행되며 부모 트랜잭션이 없을 경우 예외가 발생된다.|
|NOT_SUPPORT|nontransactionally 로 실행하며 부모 트랜잭션 내에서 실행될 경우 일시 정지된다.|
|NEVER|nontransactionally 로 실행되며 부모 트랜잭션이 존재한다면 예외가 발행힌다.|
|NESTED|해당 메서드가 부모 트랜잭션에서 진행될 경우 별개로 커밋되거나 롤백될 수 있다.<br/>래핑된 트랜잭션이 없을 경우 `REQUIRED` 와 동일하게 작동한다.|

### isolation - 격리 수준 (기본값 : `DEFAULT`)

|속성값|설명|
|:-:|:-|
|DEFAULT|DB 에서 설정된 기본 격리 수준을 따른다.|
|SERIALIZABLE|가장 높은 격리수준을 가지며 사용시 성능저하가 있을 수 있다.|
|READ_UNCOMMITTED|커밋되지 않는 데이터에 대해서 읽기를 허용한다.|
|READ_COMMITTED|커밋된 트랜잭션에 대해 읽기를 허용한다.|
|REPEATABLE_READ|동일한 필드에 대한 다중 접근시 동일한 결과를 얻을수 있는 것을 보장한다.|

:::tip 참고자료
[전자정부 프레임워크 트랜잭션](http://www.egovframe.go.kr/wiki/doku.php?id=egovframework:rte:psl:transaction:declarative_transaction_management)
:::

### Aspectj Expression

`<aop:config>` 에서 트랜잭션에 적용할 대상을 설정한다.

`* com.syaku.bbs.dao.BbsDao.*(..)` 라고 입력한 부분을 Aspectj 표현식이라고 한다.

> execution(`접근제어자` `리턴타입` `패키지` `메서드이름` (`인자`))
> * `*` 모두를 의미함
> * `..` 0개 이상을 의미함

## Annotation 을 이용한 선언적 트랜잭션

AOP 를 이용한 트랜잭션보다 더 간결하게 처리 가능한 방식

이전에 AOP 를 이용한 선언적 트랜잭션 방식의 설정을 모두 제거 혹은 주석 처리한다.

단. bean transactionManager 는 남겨둔다.

`context-datasource.xml` 수정

```xml {26,27,28}
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:aop="http://www.springframework.org/schema/aop" xmlns:tx="http://www.springframework.org/schema/tx" xsi:schemaLocation=" http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd ">

  <bean id="jdbcProp" class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
    <property name="location" value="classpath:jdbc.properties" />
  </bean>

  <bean id="dataSourceSpied" class="org.apache.commons.dbcp.BasicDataSource" destroy-method="close">
    <property name="driverClassName" value="${jdbc.driver}" />
    <property name="url" value="${jdbc.url}" />
    <property name="username" value="${jdbc.username}" />
    <property name="password" value="${jdbc.password}" />
  </bean>

  <bean id="dataSource" class="net.sf.log4jdbc.Log4jdbcProxyDataSource">
    <constructor-arg ref="dataSourceSpied" />
    <property name="logFormatter">
      <bean class="net.sf.log4jdbc.tools.Log4JdbcCustomFormatter">
        <property name="loggingType" value="MULTI_LINE" />
        <property name="sqlPrefix" value="SQL:::" />
      </bean>
    </property>
  </bean>

  <!-- Transaction Manager -->
  <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource" />
  </bean>

  <tx:annotation-driven transaction-manager="transactionManager" />
</beans>
```

|속성|어노테이션 사용|
|:-:|:-:|
|isolation|`@Transactional(isolation=Isolation.DEFAULT`|
|noRollbackFor|`@Transactional(noRollbackFor=NoRoleBackTx.class)`|
|noRollbackForClassName|`@Transactional(noRollbackForClassName="NoRoleBackTx”)`|
|propagation|`@Transactional(propagation=Propagation.REQUIRED)`|
|readOnly|`@Transactional(readOnly = true)`|
|rollbackFor|`@Transactional(rollbackFor=RoleBackTx.class)`|
|rollbackForClassName|`@Transactional(rollbackForClassName="RoleBackTx”)`|
|timeout|`@Transactional(timeout=10)`|

BBSDao 에 트랜잭션을 위해 어노테이션을 추가하였다.

```java {26,27,28,29,30}
package com.syaku.bbs.dao;

import java.util.*;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service(value = "bbsDao")
@Transactional(readOnly=true)
public class BbsDao {
  @Resource=(name = "bbsMapper")
  private BbsMapper bbsMapper;

  public List<BbsVo> getSelect(Map map) {
    return this.bbsMapper.select(map);
  }

  public void insert(BbsVo bbsVo) {
    this.bbsMapper.insert(bbsVo);
  }

  public void update(BbsVo bbsVo) {
    this.bbsMapper.update(bbsVo);
  }

  @Transactional
  public void delete(int idx) {
    this.bbsMapper.delete(idx);
    throw new RuntimeException("강제로 오류를 발생 시켜봄 !! ");
  }
}
```

테스트로 글을 삭제해보면 삭제되지 않는다

> 스프링 트랜잭션은 @Service 에 적용하는 것이 바람직하다.

## 프로그램에 의한 트랜잭션

프로그램에 의한 트랜잭션은 `try ~ catch` 문을 사용하여 작성한다.

`context-datasource.xml` 을 하기와 같이 수정한다.

```xml
<!-- Transaction Manager -->
<bean id="" class="">
  <property name="dataSource" ref="dataSource">
</bean>
```

```java {13,14,15,16}
@Resource(name = "transactionManager")
protected DataSourceTransactionManager txManager;

public void insert(BbsVo bbsVo) {
  DefaultTransactionDefinition def = new DefaultTransactionDefinition();
  def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
  TransactionStatus txStatus = txManager.getTransaction(def);

  try {
    this.bbsMapper.insert(bbsVo);
    int a = 1 / 0;
    txManager.commit(txStatus);
  } catch(Exception e) {
    txManager.rollback(txStatus);
    throw new Exception(e.getMessage());
  }
}
```

상위 `@Controller` 소스

```java
try {
  if (idx == null || idx == 0) {
    this.bbsDao.insert(bbsVo);
    xml.setMessage("추가되었습니다.");
    xml.setError(false);
  } else {
    this.bbsDao.update(bbsVo);
    xml.setMessage("수정되었습니다.");
    xml.setError(false);
  }
} catch (Exception e) {
  xml.setMessage(e.getMessage());
  xml.setError(true);
}
```

:::tip 참고자료
<https://goddaehee.tistory.com/167>  
<https://crosstheline.tistory.com/96>  
<https://soulduse.tistory.com/40>  
<https://syaku.tistory.com/269>
:::