(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{394:function(t,e,a){"use strict";a.r(e);var r=a(1),v=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"servlet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#servlet","aria-hidden":"true"}},[t._v("#")]),t._v(" Servlet")]),t._v(" "),a("h2",{attrs:{id:"등장배경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#등장배경","aria-hidden":"true"}},[t._v("#")]),t._v(" 등장배경")]),t._v(" "),a("p",[t._v("Java 를 사용하여 웹 페이지를 동적으로 생성하는 서버의 프로그램 (혹은 그 사양) 이며 "),a("em",[a("strong",[t._v("서블릿")])]),t._v(" 이라고 불린다.")]),t._v(" "),a("p",[t._v("자바 서블릿은 "),a("code",[t._v("Java EE")]),t._v(" 사양의 일부분으로 주로 이 기능들을 이용하여 웹 시스템이 구현되고 있다.")]),t._v(" "),a("p",[t._v("과거에는 "),a("code",[t._v("C")]),t._v(" "),a("code",[t._v("C++")]),t._v(" 을 이용해서 미들웨어 제품을 만들어서 판매를 하였는데 하드웨어 혹은 운영체제 종속성 때문에 어려움이 많았다."),a("br"),t._v("\nJava 플랫폼의 여러 장점들 (이식성, 독립성 등등) 을 활용하여 공통 API 로 제공하면 기존의 어려움을 충분히 개선해 나갈수 있었기 때문에 지금의 WAS (Web Application Server) 라고 불리우는 Java EE 어플리케이션 서버의 시작이 되었다.")]),t._v(" "),a("p",[t._v("그렇게 Java EE 는 많은 관심을 받아, 기업들은 WebLogic 이나 WebSphere, Apache Tomcat 등과 같은 WAS 제품을 앞다투어 출시하게 되었고 이후 등장하는 JSP 도 많은 사랑을 받는다.")]),t._v(" "),a("h2",{attrs:{id:"역활"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#역활","aria-hidden":"true"}},[t._v("#")]),t._v(" 역활")]),t._v(" "),a("p",[t._v("일반적인 웹 어플리케이션 환경의 프로그래밍에서 네트워크 통신을 미들웨어 중에서 대표적으로 Web Server 와 WAS (Web Application Server) 사용하여 구성을 한다.")]),t._v(" "),a("p",[t._v("Web 서버는 보통 하드웨어 (물리적 서버) 와 소프트웨어로 구분되며 보통 이 둘을 통칭하여 "),a("em",[a("strong",[t._v("Web 서버")])]),t._v(" 라고 지칭한다."),a("br"),t._v("\nWAS 서버는 대부분은 애플리케이션을 수행해주는 미들웨어 (소프트웨어 엔진) 으로써 "),a("em",[a("strong",[t._v("동적인 컨텐츠 수행")])]),t._v(" 하는 역활을 담당한다.")]),t._v(" "),a("h2",{attrs:{id:"jsp-java-server-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsp-java-server-page","aria-hidden":"true"}},[t._v("#")]),t._v(" JSP (Java Server Page)")]),t._v(" "),a("p",[t._v("기존의 HTML에서 JAVA 코드의 사용이 가능한 JSP 와 같은 기술이 등장 하였고 이는 "),a("em",[a("strong",[t._v("JAVA 기술을 대중화 시키는데도 한몫")])]),t._v(" 하였다.")]),t._v(" "),a("p",[a("code",[t._v("javax.servlet.http.HttpServlet")]),t._v(" 클래스를 상속받은 Java 소스코드로 변환한 다음 컴파일 되어 실행하다.")]),t._v(" "),a("p",[t._v("하나의 JSP 페이지가 Java 클래스이기 때문에 모든 Java Library 의 사용이 가능하다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/A016.png",alt:'"JSP 의 Web Application Server 흐름도"'}})]),t._v(" "),a("h2",{attrs:{id:"servlet-의-장단점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#servlet-의-장단점","aria-hidden":"true"}},[t._v("#")]),t._v(" Servlet 의 장단점")]),t._v(" "),a("h3",{attrs:{id:"장점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#장점","aria-hidden":"true"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),a("ul",[a("li",[t._v("Thread 기반으로 하기 때문에 웹 어플리케이션 운영에 효율적이다.\n"),a("ul",[a("li",[t._v("병렬처리")])])]),t._v(" "),a("li",[t._v("Java 를 기반으로 대부분의 이점을 가져온다.\n"),a("ul",[a("li",[t._v("Java 기분의 풍부한 API 사용이 가능하다.")]),t._v(" "),a("li",[t._v("이기종 OS 장비의 이식성이 우수하다.")])])]),t._v(" "),a("li",[t._v("컨텐츠와 비지니스 로직의 분리가 가능하다.")])]),t._v(" "),a("h3",{attrs:{id:"단점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단점","aria-hidden":"true"}},[t._v("#")]),t._v(" 단점")]),t._v(" "),a("ul",[a("li",[t._v("서블릿은 완전한 자바 애플리케이션 이기 때문에 출력 가능한 HTML 문서를 프로그램적으로 서블릿 코드 안에 작성 해야 한다.")]),t._v(" "),a("li",[t._v("컨텐츠와 비지니스 로직의 분리가 어렵다.")]),t._v(" "),a("li",[t._v("서비스 이전에 "),a("em",[a("strong",[t._v("컴파일 과정이 필요")])]),t._v(" 로 한다.")])]),t._v(" "),a("blockquote",[a("p",[t._v("위 같은 이유 때문에 JSP 와 Servlet 을 섞어 사용하여 장단점을 보완할 수 있다.")])]),t._v(" "),a("h2",{attrs:{id:"servlet-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#servlet-container","aria-hidden":"true"}},[t._v("#")]),t._v(" Servlet Container")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://blog.naver.com/PostView.nhn?blogId=00050004&logNo=70043657451",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://blog.naver.com/PostView.nhn?blogId=00050004&logNo=70043657451"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://dololak.tistory.com/82",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dololak.tistory.com/82"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"http://mangkyu.tistory.com/14",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mangkyu.tistory.com/14"),a("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=v.exports}}]);