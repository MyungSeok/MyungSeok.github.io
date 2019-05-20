(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{294:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class","aria-hidden":"true"}},[s._v("#")]),s._v(" Class")]),s._v(" "),a("h2",{attrs:{id:"immutable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#immutable","aria-hidden":"true"}},[s._v("#")]),s._v(" Immutable")]),s._v(" "),a("p",[s._v("생성후 변경 불가능한 객체로서 대표적으로 "),a("em",[a("code",[s._v("String")])]),s._v(", "),a("em",[a("code",[s._v("Boolean")])]),s._v(", "),a("em",[a("code",[s._v("Integer")])]),s._v(", "),a("em",[a("code",[s._v("Float")])]),s._v(", "),a("em",[a("code",[s._v("Long")])]),s._v(" 등등이 있다.")]),s._v(" "),a("blockquote",[a("p",[s._v("HEAP 영역에서의 값이 바뀌는건 아니다.")])]),s._v(" "),a("p",[s._v("불편클래스의 예시는 아래가 대표적이다.")]),s._v(" "),a("h3",{attrs:{id:"string-stringbuffer-stringbuilder-의-사용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-stringbuffer-stringbuilder-의-사용","aria-hidden":"true"}},[s._v("#")]),s._v(" String / StringBuffer / StringBuilder 의 사용")]),s._v(" "),a("p",[s._v("문자열을 더하는 식에는 "),a("code",[s._v("string")]),s._v(" 보다는 "),a("code",[s._v("stringBuffer")]),s._v(" 나 "),a("code",[s._v("stringBuilder")]),s._v(" 을 사용해야 한다.")]),s._v(" "),a("p",[a("code",[s._v("string")]),s._v(" 은 새로운 값을 할당할 때마다 새로 생성되기 때문 (클래스의 메모리 참조 주소가 바뀜)")]),s._v(" "),a("p",[a("code",[s._v("stringBuffer")]),s._v(" 나 "),a("code",[s._v("stringBuilder")]),s._v(" 는 값을 메모리에 append 하는 방식으로 클래스를 별도로 생성하지 않는다.")]),s._v(" "),a("p",[a("code",[s._v("stringBuilder")]),s._v(" 는 변경 가능한 문자열로 synchronization 이 적용되지 않는다.")]),s._v(" "),a("p",[a("code",[s._v("stringBuffer")]),s._v(" 는 "),a("em",[a("strong",[s._v("멀티쓰레드 환경에서 안정적")])]),s._v(" 이다.")]),s._v(" "),a("h4",{attrs:{id:"try-finally-보다는-try-with-resources-를-사용-java-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#try-finally-보다는-try-with-resources-를-사용-java-7","aria-hidden":"true"}},[s._v("#")]),s._v(" try-finally 보다는 try-with-resources 를 사용 (Java 7)")]),s._v(" "),a("p",[s._v("향샹된 예외처리문으로 입출력 처리시 예외가 발생하면 JVM 이 자동으로 "),a("code",[s._v("close")]),s._v(" 메소드를 호출하여 자원을 반납시켜 줍니다.")]),s._v(" "),a("p",[s._v("이때 "),a("code",[s._v("try()")]),s._v(" 구문안에는 "),a("code",[s._v("AutoCloseable")]),s._v(" 인터페이스를 구현한 객체여야 한다.")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyResource")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AutoCloseable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Closeing!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyResource")]),s._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// use the code")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"autocloseable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autocloseable","aria-hidden":"true"}},[s._v("#")]),s._v(" AutoCloseable")]),s._v(" "),a("p",[s._v("파일 또는 소켓 핸들 등의 자원들을 종료할 때까지 보관하는 객체이다."),a("br"),s._v("\nAutoCloseable 객체의 "),a("code",[s._v("close")]),s._v(" 메소드는 "),a("code",[s._v("try-with-resources")]),s._v(" 블럭을 종료할 때 자동으로 호출 된다.")]),s._v(" "),a("p",[s._v("이 구조는 리소스의 고갈 및 다른 예외들까지 발생할 수 있는 에러들의 해소를 즉각적으로 보장한다.")]),s._v(" "),a("p",[a("code",[s._v("try-with-resource")]),s._v(" 구문과 같이 사용한다.")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyResource")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AutoCloseable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Closeing!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyResource")]),s._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// use the code")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("참고자료")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://hyoj.github.io/blog/java/basic/java7-autocloseable.html#method-summary",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://hyoj.github.io/blog/java/basic/java7-autocloseable.html#method-summary"),a("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=n.exports}}]);