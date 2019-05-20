(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{369:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"anti-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anti-pattern","aria-hidden":"true"}},[t._v("#")]),t._v(" Anti-Pattern")]),t._v(" "),s("h2",{attrs:{id:"인스턴스-생성-사례"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#인스턴스-생성-사례","aria-hidden":"true"}},[t._v("#")]),t._v(" 인스턴스 생성 사례")]),t._v(" "),s("p",[t._v("불변 (Immutable Class) 객체의 재사용을 한다.")]),t._v(" "),s("p",[t._v("생성후 변경 불가능한 객체로서 대표적으로 "),s("em",[s("code",[t._v("String")])]),t._v(", "),s("em",[s("code",[t._v("Boolean")])]),t._v(", "),s("em",[s("code",[t._v("Integer")])]),t._v(", "),s("em",[s("code",[t._v("Float")])]),t._v(", "),s("em",[s("code",[t._v("Long")])]),t._v(" 등등이 있다.")]),t._v(" "),s("h3",{attrs:{id:"안티패턴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#안티패턴","aria-hidden":"true"}},[t._v("#")]),t._v(" 안티패턴")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bikini"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"권장-패턴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#권장-패턴","aria-hidden":"true"}},[t._v("#")]),t._v(" 권장 패턴")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bikini"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("최신 JVM 상에서는 고정 문자열일때 컴파일러가 처음부터 바이트 코드를 StringBuilder 로 변경되어 인스턴스가 생성되지 않는다."),s("br"),t._v("\n하지만 가급적 문자열 연산이 많다면 "),s("code",[t._v("StringBuilder")]),t._v(" 를 권장")])]),t._v(" "),s("h2",{attrs:{id:"오토-박싱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#오토-박싱","aria-hidden":"true"}},[t._v("#")]),t._v(" 오토 박싱")]),t._v(" "),s("p",[t._v("박싱된 Warpper 형 보다는 원시 기본 타입을 사용한다.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MAX_VALUE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"stack-class-클래스의-메모리-누수"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stack-class-클래스의-메모리-누수","aria-hidden":"true"}},[t._v("#")]),t._v(" Stack Class 클래스의 메모리 누수")]),t._v(" "),s("p",[t._v("자기 메모리를 직접 관리하는 클래스라면 메모리 누수에 주의해야 한다.")]),t._v(" "),s("ul",[s("li",[t._v("캐시용도로 사용하는 객체는 "),s("code",[t._v("WeackHashMap")]),t._v(" 을 사용")]),t._v(" "),s("li",[t._v("스택과 같은 객체는 사용후 "),s("code",[t._v("null")]),t._v(" 로 참조해제를 시켜주도록 한다.")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stack")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" elements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmptyStackException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 다 쓴 참조를 해제 해주도록 하자")]),t._v("\n    elements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"finalize-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finalize-method","aria-hidden":"true"}},[t._v("#")]),t._v(" Finalize Method")]),t._v(" "),s("p",[s("code",[t._v("finalize")]),t._v(" 메소드에 의한 Collection 지연과 OOME (Out of Memory Exception) 발생 가능성 때문에 사용을 지양한다.")]),t._v(" "),s("p",[t._v("특정 Class 에서 finalize 메소드가 정의되어 있는 경우 해당 Class Type 의 Object 는 Gabege Collection 발생시 즉각적으로 Collction 되지 않는다."),s("br"),t._v("\n이는 Finalization Queue 에 들어간 후 Finalizer 에 의해 정리되는데 참조가 해제된 객체에 대해서도 "),s("em",[s("strong",[s("code",[t._v("finalize")]),t._v(" 메소드에 의해 GC 실행이 보장되지 않는다.")])])]),t._v(" "),s("h3",{attrs:{id:"대안"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#대안","aria-hidden":"true"}},[t._v("#")]),t._v(" 대안")]),t._v(" "),s("p",[s("code",[t._v("AutoCloseable")]),t._v(" 을 구현해주고 클래스에서 인스턴스를 다 사용하면 "),s("code",[t._v("close")]),t._v(" 메소드를 호출해준다.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.yunsobi.com/blog/entry/finalize-%EB%A9%94%EC%86%8C%EB%93%9C%EC%9D%98-%EC%98%A4%EB%B2%84%EB%9D%BC%EC%9D%B4%EB%94%A9%EC%9D%84-%EC%9E%90%EC%A0%9C%ED%95%B4%EC%95%BC%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.yunsobi.com/blog/entry/finalize-메소드의-오버라이딩을-자제해야하는-이유"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);