(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{399:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"보안"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#보안","aria-hidden":"true"}},[t._v("#")]),t._v(" 보안")]),t._v(" "),a("h2",{attrs:{id:"대칭형-비-대칭형-알호-알고리즘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#대칭형-비-대칭형-알호-알고리즘","aria-hidden":"true"}},[t._v("#")]),t._v(" 대칭형 / 비 대칭형 알호 알고리즘")]),t._v(" "),a("p",[t._v("대칭형 알고리즘은 "),a("em",[a("strong",[t._v("암호화와 복호화가 같은 KEY 값")])]),t._v(" 으로 이루어 진다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/A029.png",alt:"대칭형 암호 알고리즘"}})]),t._v(" "),a("p",[t._v("비 대칭형 알고리즘은 "),a("em",[a("strong",[t._v("암호화와 복호화가 서로 다른 KEY 값")])]),t._v(" 으로 이루어 진다.")]),t._v(" "),a("p",[t._v("이는 대부분 "),a("em",[a("strong",[t._v("공개키 (Public Key) 와 개인키 (Private Key) 를 생성")])]),t._v(" 하여 운영하는데 이는 다음과 같은 특징을 가진다.")]),t._v(" "),a("blockquote",[a("p",[t._v("A의 공개키를 이용하여 암호화된 데이터는 A의 개인키로만 복호화가 가능하다."),a("br"),t._v("\nA의 개인키를 이용하여 암호화된 데이터는 A의 공개키로만 복호화가 가능하다.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/A030.png",alt:"비대칭형 암호 알고리즘"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("대칭형")]),t._v(" "),a("th",[t._v("비대칭형")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("특징")]),t._v(" "),a("td",[t._v("함호화 복호화가 동일한 키")]),t._v(" "),a("td",[t._v("암호화 및 복호화가 다른 서로다른 키")])]),t._v(" "),a("tr",[a("td",[t._v("장점")]),t._v(" "),a("td",[t._v("속도가 빠르다")]),t._v(" "),a("td",[t._v("안정성이 높다")])]),t._v(" "),a("tr",[a("td",[t._v("단점")]),t._v(" "),a("td",[t._v("암호키를 전달하는 과정에서 노출 우려가 있다")]),t._v(" "),a("td",[t._v("대칭키에 비해 느리다")])]),t._v(" "),a("tr",[a("td",[t._v("예")]),t._v(" "),a("td",[t._v("DES, AES")]),t._v(" "),a("td",[t._v("RSA")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://sungjk.github.io/2016/09/30/Security.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://sungjk.github.io/2016/09/30/Security.html"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://javaplant.tistory.com/26",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://javaplant.tistory.com/26"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"http://rigvedawiki.net/w/%EC%95%94%ED%98%B8%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://rigvedawiki.net/w/암호 알고리즘"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://o-m-i.tistory.com/209",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://o-m-i.tistory.com/209"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://jusungpark.tistory.com/34",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jusungpark.tistory.com/34"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"sha-256"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sha-256","aria-hidden":"true"}},[t._v("#")]),t._v(" SHA-256")]),t._v(" "),a("p",[t._v("해싱 알고리즘의 대표적인 예인 SHA-256 은 해시 값으로 암호하여 복호화가 불가능 하다.")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("security")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageDigest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SHA256Password")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LockPassword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageDigest")]),t._v(" digest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageDigest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SHA-256"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" digest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("digest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),t._v(" hexString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" hex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toHexString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xff")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          hexString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        hexString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hexString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"보안적인-관점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#보안적인-관점","aria-hidden":"true"}},[t._v("#")]),t._v(" 보안적인 관점")]),t._v(" "),a("p",[t._v("해시값은 복호화 할 수 없는데 이는 특정 문자열을 암호화하면 나오는 결과값이 다른 문자열을 해싱해서 나올수도 있기 때문이다.")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("홍길동 -> 홍\n홍성대 -> 홍\n")])])]),a("p",[t._v("위와 같은 원리로 결과값의 크기 (치역) 는 고정되어 있고 입력값 (정의역) 은 서로 다를 수 있기 때문이다."),a("br"),t._v(" "),a("code",[t._v("2²")]),t._v(" 과 "),a("code",[t._v("-2²")]),t._v(" 의 결과 값이 서로 같은 것과 마찬가지인 원리로 결과값 4 를 기준으로 원본 데이터를 특정지을수가 없다."),a("br"),t._v("\n하지만 대표적인 비밀번호 테이블을 구비하여 해당 결과 해시값을 대조하여 일일이 찾아보는 경우가 있다 (sha 함수 테이블)")]),t._v(" "),a("p",[t._v("해시값의 보안성을 높이기 위하여 값을 암호화 할때 Salt 값을 넣어 해싱을 함으로써 공격의 효율을 크게 저하 시키는 방법도 유효하다.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://yoo-hyeok.tistory.com/41",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://yoo-hyeok.tistory.com/41"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://jusungpark.tistory.com/35",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jusungpark.tistory.com/35"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);