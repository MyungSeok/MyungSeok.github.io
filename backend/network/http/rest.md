# REST

REST (Representational State Transfer) 는 자원을 이름으로 구분하여 해당 _**자원의 상태 정보를 주고 받는 모든것을 의미**_ 한다.

## 구성요소

* 자원
  * 모든 자원은 고유한 ID 가 존재하며 이 자원은 Server 에 존재한다.
  * Client 는 URI 를 이용하여 자원을 지정하고 해당 자원의 상태정보에 대한 조작을 Server 에 요청 하게 된다.
* 행위
  * HTTP Method 이다.
  * GET, POST, PUT, DELETE 와 같은 메서드를 제공하며 각각의 의미와 역활이 다르다.
* 표현
  * Client 가 자원의 상태정보 조작을 요청하면 Server 는 이에 대한 응답을 보내게 된다.
  * 대부분은 JSON 및 XML 를 통해 데이터를 주고 받는것이 일반적이다.

## 특징

### 1. 유니폼 인터페이스 (Uniform Interface)

* 지정된 URI 인터페이스에서 자원 제공한다.
* 표준 HTTP 프로토콜을 따르는 플랫폼에서 사용 가능하다.

### 2. 무상태성 (Stateless)

* 상태를 갖지 않아 상태정보 (세션, 쿠키) 를 따로 저장하거나 관리할 필요가 없다.
* 단순히 API 서버는 들어오는 요청만 처리하여 구현이 단순해지고 서비스의 자유도가 높아진다.

### 3. 캐시 가능 (Cacheable)

* 표준 HTTP 프로토콜을 그대로 사용하므로 웹에서 사용하므로 해당 인프라를 그대로 활용할 수 있다.
* 캐시 사용으로 인한 응답이 빨라지고 REST Server 트랜젝션이 발생되지 않기 때문에 전체적인 응답시간 및 성능, 자원의 효울을 향상 시킬수 있다.

### 4. 자체 표현 구조 (Self-descriptiveness)

* REST API 의 메세지만 보고도 이를 쉽게 이해할 수 있는 자체 표현 구조로 되어 있다는 것 이다.

### 5. Clinet / Server 구조

* 자원이 있는 쪽은 Server, 자원을 요청하는 쪽은 Client 로 구성된다.
  * Server : API 를 제공하고 비지니스 로직 처리 및 저장을 책임진다.
  * Client : 사용자 인증이나 context (세션, 로그인 정보) 등을 직점 관리하고 책임진다.
* 서로간의 의존성이 줄어든다.

### 6. 계층형 시스템 (Layerd System)

* Client 는 Server 만 호출한다.
* API Server 는 순수 비지니스 로직을 수행하고 앞단에 보안, 로드밸런싱, 암호화, 인증 등의 추가하여 구조적 유연성을 가져간다.
* 프록시 혹은 게이트웨이와 같은 네트워크 기반의 중간 매체를 사용할 수 있다.

## REST API

REST 기반의 서비스 API 로 구현한 것 이다.

### 설계

* URI 는 정보의 자원을 표현해야 한다.
  * 구분자 \( / \) 는 계층관계를 나타내는데 사용
  * URI 마지막 문자로 슬래시 \( / \) 를 사용하지 않는다.
  * 하이픈 ( - ) 은 URI 가독성을 높이는데 사용
  * 언더바 ( _ ) 는 사용하지 않는다.
  * 경로 정보는 소문자로 한다.
  * 파일 확장자는 포함하지 않는다.
* Method 는 의미와 역활이 맞아야 한다.

|Method|역활|
|--|--|
|GET|리소스를 요청한다.|
|POST|리소스를 생성한다.|
|PUT|리소스를 수정한다.|
|DELETE|리소스를 삭제한다.|

:::tip 참고자료
<https://meetup.toast.com/posts/92>  
<https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html>
:::