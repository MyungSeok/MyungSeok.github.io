(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{226:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"querydsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querydsl"}},[t._v("#")]),t._v(" QueryDSL")]),t._v(" "),a("h2",{attrs:{id:"querydsl-이란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querydsl-이란"}},[t._v("#")]),t._v(" QueryDSL 이란 ?")]),t._v(" "),a("p",[t._v("QueryDSL 은 정적 타입을 이용해서 SQL 과 같은 쿼리를 생성할 수 있도록 하는 프레임워크 입니다.")]),t._v(" "),a("p",[t._v("JPQL 처림 문자열로 작성하거나 Mybatis 처럼 XML 파일에 쿼리를 작성하는 대신, QueryDSL 이 제공하는 Fluent API 를 이용하여 쿼리를 생성할 수 있습니다.")]),t._v(" "),a("p",[t._v("즉 JPA 에서 사용했던 SQL 과 비슷하게 생긴 JQPL 조차 사용하지 않습니다. ( := 오류가 적다)")]),t._v(" "),a("h2",{attrs:{id:"장점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#장점"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),a("ul",[a("li",[t._v("IDE 의 코드 자동완성 기능을 사용")]),t._v(" "),a("li",[t._v("문법적으로 잘못된 쿼리를 허용하지 않음")]),t._v(" "),a("li",[t._v("도메인 타입과 "),a("code",[t._v("property")]),t._v(" 를 안전하게 참조할 수 있음")]),t._v(" "),a("li",[t._v("도메인 타입의 리펙토링을 더 잘 할 수 있음")])]),t._v(" "),a("p",[t._v("QueryDSL 은 타입에 안전한 방식으로 쿼리를 실행하기 위한 목적으로 만들어졌습니다.")]),t._v(" "),a("p",[t._v("즉 QueryDSL 의 핵심원칙은 "),a("em",[a("strong",[t._v("타입 안정성 (Type Safety)")])]),t._v(" 입니다.")]),t._v(" "),a("p",[t._v("이는 문자열 기반이 아닌 메서드의 호출로 쿼리가 수행되기 때문입니다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("where")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("위와 같이 메서드를 호출하여 쿼리를 수행합니다.")]),t._v(" "),a("h2",{attrs:{id:"사용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용"}},[t._v("#")]),t._v(" 사용")]),t._v(" "),a("p",[t._v("기본 사용법은 아래와 같다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Repository")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestRepository")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PersistenceContext")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Entitymanager")]),t._v(" em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-java extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Book")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JPAQuery")]),t._v(" query "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JPAQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Book")]),t._v(" book "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Book")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"book"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Book")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" bookList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("orderBy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("regDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" bookList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://victorydntmd.tistory.com/206?category=698080",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://victorydntmd.tistory.com/206?category=698080"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"http://www.querydsl.com/static/querydsl/3.4.3/reference/ko-KR/html_single/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.querydsl.com/static/querydsl/3.4.3/reference/ko-KR/html_single/"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);