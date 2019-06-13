(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{265:function(t,a,e){"use strict";e.r(a);var n=e(1),s=function(t){t.options.__data__block__={flowchart_382ee222:"stage1=>operation: 빈 설정 파일 정보 초기화\nstage2=>operation: POJO 빈 초기화 상태\nstage3=>operation: POJO 빈 준비 상태\nstage4=>operation: POJO 빈 소멸 상태\n\nstage1->stage2->stage3->stage4"}},r=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean","aria-hidden":"true"}},[t._v("#")]),t._v(" Bean")]),t._v(" "),e("p",[t._v("스프링 (정확히는 스프링 컨테이너) 에서 생성 및 및 관계 설정, 사용등을 제어해주는 객체")]),t._v(" "),e("h2",{attrs:{id:"bean-factory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean-factory","aria-hidden":"true"}},[t._v("#")]),t._v(" Bean Factory")]),t._v(" "),e("ul",[e("li",[t._v("스프링이 IoC 를 담당하는 핵심 컨테이너")]),t._v(" "),e("li",[t._v("빈을 등록/생성/조회/반환/관리 하는 기능으로 bean factory 와 같지만 여기에 spring 의 각종 부가서비스를 추가로 제공해야 한다.")])]),t._v(" "),e("h2",{attrs:{id:"application-context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#application-context","aria-hidden":"true"}},[t._v("#")]),t._v(" Application Context")]),t._v(" "),e("ul",[e("li",[t._v("bean factory 를 확장한 IoC 컨테이너")])]),t._v(" "),e("h2",{attrs:{id:"bean-container-ioc-container"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean-container-ioc-container","aria-hidden":"true"}},[t._v("#")]),t._v(" Bean Container (IoC Container)")]),t._v(" "),e("ul",[e("li",[t._v("객체를 관리하는 컨테이너로써 컨테이너에 객체를 담아두고 필요할 때에 컨테이너에서 객체를 가져와 사용할 수 있도록 한다.")]),t._v(" "),e("li",[t._v("IoC 방식으로 Bean 을 관리한다는 의미에서 Bean Factory 나 Application Context 를 가르킨다.")])]),t._v(" "),e("h2",{attrs:{id:"pojo-plain-old-java-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pojo-plain-old-java-object","aria-hidden":"true"}},[t._v("#")]),t._v(" POJO (Plain Old Java Object)")]),t._v(" "),e("p",[t._v("Sun 의 Java Bean 이나 EJB 의 Bean 을 뜻하는 것이 아닌 순수하게 "),e("code",[t._v("getter")]),t._v(", "),e("code",[t._v("setter")]),t._v(" 메서드로만 이루어진 Value Object 성의 Bean 을 의미한다."),e("br"),t._v("\n예를 들면 다음과 같은 코드이다.")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleBean")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAge")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAge")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("스프링에서 POJO 가 중요한 특징인 이유는 다음과 같은 특성을 가지기 때문이다.")]),t._v(" "),e("ul",[e("li",[t._v("클래스위 상속을 강제하지 않는다.")]),t._v(" "),e("li",[t._v("인터페이스의 구현을 강제하지 않는다.")]),t._v(" "),e("li",[t._v("어노테이션의 사용을 강제하지 않는다.")])]),t._v(" "),e("p",[t._v("때문에 사용자는 라이브러리나 컨테이너의 별도 기술에 종속적이지 않는 상태로 가장 일반적인 코드로 작성할 수 있다는 것이다.")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://m.blog.naver.com/weekamp/186678831",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m.blog.naver.com/weekamp/186678831"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://joonyon.tistory.com/18",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://joonyon.tistory.com/18"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"spring-bean-life-cycle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-bean-life-cycle","aria-hidden":"true"}},[t._v("#")]),t._v(" Spring Bean Life Cycle")]),t._v(" "),e("FlowChart",{attrs:{id:"flowchart_382ee222",code:t.$dataBlock.flowchart_382ee222,preset:"vue"}}),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://javaslave.tistory.com/48",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://javaslave.tistory.com/48"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://gmlwjd9405.github.io/2018/11/10/spring-beans.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gmlwjd9405.github.io/2018/11/10/spring-beans.html"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://unabated.tistory.com/entry/Spring-Bean-%EC%B4%88%EA%B8%B0%ED%99%94-%EB%B0%8F-%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://unabated.tistory.com/entry/Spring-Bean-초기화-및-생명주기"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"pojo-plain-old-java-object-초기화-과정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pojo-plain-old-java-object-초기화-과정","aria-hidden":"true"}},[t._v("#")]),t._v(" POJO (Plain Old Java Object) 초기화 과정")]),t._v(" "),e("ol",[e("li",[t._v("Spring Framework 는 먼저 "),e("code",[t._v("Bean")]),t._v(" 설정파일의 POJO 빈을 Instance 화 하지 않은 상태로 "),e("code",[t._v("Bean")]),t._v(" 설정 파일의 정보를 초기화 한다.\n"),e("ol",[e("li",[t._v("빈 설정 파일의 정보를 초기화 하면서 XML DTD 에 대하여 유효한지 체크한다.")])])]),t._v(" "),e("li",[t._v("Bean Instance 를 생성하면서 의존 관계에 있는 Bean 이 존재하는지 여부를 체크한다.\n"),e("ol",[e("li",[t._v("의존 관계가 없는 Bean 인 경우 초기화가 실패 한다.")])])]),t._v(" "),e("li",[t._v("의존 관계가 있는 빈의 체크가 완료되면 "),e("code",[t._v("setter Method")]),t._v(" 를 호출하거나 생성자의 인자로 실질적인 값을 추가하거나 다른 Bean 에 대한 Reference 로 전달한다.")]),t._v(" "),e("li",[t._v("Application Context 를 이용하여 초기화를 실행한다.\n"),e("ol",[e("li",[t._v("생성한 Bean 이 BeanNameAware Instance 이면 setBeanName() Method 를 호출한다.")]),t._v(" "),e("li",[t._v("생성한 Bean 이 BeanFactoryAware Instance 이면 setBeanFactory() Method 를 호출한다.")]),t._v(" "),e("li",[t._v("생성한 Bean 이 ApplicationContextAware Instance 이면 setApplicationContext() Method 를 호출한다.")]),t._v(" "),e("li",[t._v("생성한 Bean 이 InitalizingBean 인스턴스이면 afterProperties() Method 를 호출한다.")])])]),t._v(" "),e("li",[t._v("생성한 Bean 의 설정파일에 init-method 가 설정되어 있다면 init-method 에 해당하는 Method 를 호출한다.")])]),t._v(" "),e("h3",{attrs:{id:"종료-method-를-호출하는-과정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#종료-method-를-호출하는-과정","aria-hidden":"true"}},[t._v("#")]),t._v(" 종료 Method 를 호출하는 과정")]),t._v(" "),e("ol",[e("li",[t._v("생성한 Bean 이 DisposableBean Instance 이면 "),e("code",[t._v("distory")]),t._v(" Method 를 호출한다.")]),t._v(" "),e("li",[t._v("생성한 Bean 설정파일에 distory-method 가 설정되어 있으면 "),e("code",[t._v("destory")]),t._v(" Method 에 해당하는 메소드를 호출한다.")])]),t._v(" "),e("blockquote",[e("p",[t._v("Bean Life Cycle 을 커스터마이징 하여 제어 할 수 있다.")])]),t._v(" "),e("h3",{attrs:{id:"bean-로드-순서를-결정짓는-방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean-로드-순서를-결정짓는-방법","aria-hidden":"true"}},[t._v("#")]),t._v(" Bean 로드 순서를 결정짓는 방법")]),t._v(" "),e("p",[t._v("Bean 내부적으로도 생성 순서에 따라 에러가 나올수 있기 때문에 해당 상황에서는 빈 생성 순서를 정해주는 것이 낫다")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("@DependsOn")]),t._v(" "),e("ul",[e("li",[t._v("의존성 고리를 스프링에게 알려준다.")])])]),t._v(" "),e("li",[e("code",[t._v("@PostConstruct")]),t._v(" "),e("ul",[e("li",[t._v("해당 컴포넌트가 완전히 생성된 후 한번에 실행해야 할 일을 코딩한 메소드에 붙이는 것이다.")])])]),t._v(" "),e("li",[e("code",[t._v("@Order")]),t._v(" "),e("ul",[e("li",[t._v("주입 순서를 정해 줌")])])])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://jeong-pro.tistory.com/167",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jeong-pro.tistory.com/167"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"bean-vs-component-차이"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean-vs-component-차이","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("code",[t._v("@Bean")]),t._v(" vs "),e("code",[t._v("@Component")]),t._v(" 차이")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("@Bean")]),t._v(" "),e("ul",[e("li",[t._v("외부 라이브러리들의 사용을 Bean 으로 등록하고 싶은 경우")])])]),t._v(" "),e("li",[e("code",[t._v("@Component")]),t._v(" "),e("ul",[e("li",[t._v("사용자가 직접 컨트롤이 가능한 Class 인 경우")])])])]),t._v(" "),e("p",[t._v("사용자가 생성한 클래스에 "),e("code",[t._v("@Bean")]),t._v(" 선언은 불가능하다 이는 각자 선언할 수 있는 타입이 정해져 있어 해당 용도를 벗어나면 컴파일 에러를 발생시킨다.")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://effectivesquid.tistory.com/entry/Bean-%EA%B3%BC-Component%EC%9D%98-%EC%B0%A8%EC%9D%B4",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://effectivesquid.tistory.com/entry/Bean-과-Component의-차이"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"bean-scope"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean-scope","aria-hidden":"true"}},[t._v("#")]),t._v(" Bean Scope")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("eGov")])]),t._v(" 및 "),e("em",[e("strong",[t._v("Spring Reference (4.2.5)")])]),t._v(" 에서 발췌한 Bean Scope 의 종류이다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Scope")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("eGov")]),t._v(" "),e("th",[t._v("Spring Reference")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Global Session")]),t._v(" "),e("td",[t._v("하나의 Bean 정의에 대해서 하나의 global HTTP Session의 생명주기 안에 단 하나의 객체만 존재한다. "),e("br"),t._v("일반적으로 portlet context 안에서 유효하다. Web-aware Spring ApplicationContext 안에서만 유효하다.")]),t._v(" "),e("td",[t._v("O")]),t._v(" "),e("td",[t._v("O")])]),t._v(" "),e("tr",[e("td",[t._v("Prototype")]),t._v(" "),e("td",[t._v("하나의 Bean 정의에 대해서 다수의 객체가 존재할 수 있다.")]),t._v(" "),e("td",[t._v("O")]),t._v(" "),e("td",[t._v("O")])]),t._v(" "),e("tr",[e("td",[t._v("Request")]),t._v(" "),e("td",[t._v("하나의 Bean 정의에 대해서 하나의 HTTP request의 생명주기 안에 단 하나의 객체만 존재한다 "),e("br"),t._v("즉, 각각의 HTTP request는 자신만의 객체를 가진다. Web-aware Spring ApplicationContext 안에서만 유효하다.")]),t._v(" "),e("td",[t._v("O")]),t._v(" "),e("td",[t._v("O")])]),t._v(" "),e("tr",[e("td",[t._v("session")]),t._v(" "),e("td",[t._v("하나의 Bean 정의에 대해서 하나의 HTTP Session의 생명주기 안에 단 하나의 객체만 존재한다. "),e("br"),t._v("Web-aware Spring ApplicationContext 안에서만 유효하다.")]),t._v(" "),e("td",[t._v("O")]),t._v(" "),e("td",[t._v("O")])]),t._v(" "),e("tr",[e("td",[t._v("singleton")]),t._v(" "),e("td",[t._v("하나의 Bean 정의에 대해서 Spring IoC Container 내에 단 하나의 객체만 존재한다.")]),t._v(" "),e("td",[t._v("O")]),t._v(" "),e("td",[t._v("O")])]),t._v(" "),e("tr",[e("td",[t._v("application")]),t._v(" "),e("td",[t._v("서블릿 컨텍스트의 라이프사이클에 정의된다. "),e("br"),t._v("Spring Application Context 내에서만 유효하다.")]),t._v(" "),e("td",[t._v("X")]),t._v(" "),e("td",[t._v("O")])])])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.slipp.net/wiki/pages/viewpage.action?pageId=25528177",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.slipp.net/wiki/pages/viewpage.action?pageId=25528177"),e("OutboundLink")],1)])])],1)},[],!1,null,null,null);"function"==typeof s&&s(r);a.default=r.exports}}]);