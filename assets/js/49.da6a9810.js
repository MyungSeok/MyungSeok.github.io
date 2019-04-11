(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{374:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class","aria-hidden":"true"}},[t._v("#")]),t._v(" Class")]),t._v(" "),a("h2",{attrs:{id:"immutable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#immutable","aria-hidden":"true"}},[t._v("#")]),t._v(" Immutable")]),t._v(" "),a("p",[t._v("생성후 변경 불가능한 객체로서 대표적으로 "),a("em",[a("code",[t._v("String")])]),t._v(", "),a("em",[a("code",[t._v("Boolean")])]),t._v(", "),a("em",[a("code",[t._v("Integer")])]),t._v(", "),a("em",[a("code",[t._v("Float")])]),t._v(", "),a("em",[a("code",[t._v("Long")])]),t._v(" 등등이 있다.")]),t._v(" "),a("blockquote",[a("p",[t._v("HEAP 영역에서의 값이 바뀌는건 아니다.")])]),t._v(" "),a("p",[t._v("불편클래스의 예시는 아래가 대표적이다.")]),t._v(" "),a("h3",{attrs:{id:"string-stringbuffer-stringbuilder-의-사용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-stringbuffer-stringbuilder-의-사용","aria-hidden":"true"}},[t._v("#")]),t._v(" String / StringBuffer / StringBuilder 의 사용")]),t._v(" "),a("p",[t._v("문자열을 더하는 식에는 "),a("code",[t._v("string")]),t._v(" 보다는 "),a("code",[t._v("stringBuffer")]),t._v(" 나 "),a("code",[t._v("stringBuilder")]),t._v(" 을 사용해야 한다.")]),t._v(" "),a("p",[a("code",[t._v("string")]),t._v(" 은 새로운 값을 할당할 때마다 새로 생성되기 때문 (클래스의 메모리 참조 주소가 바뀜)")]),t._v(" "),a("p",[a("code",[t._v("stringBuffer")]),t._v(" 나 "),a("code",[t._v("stringBuilder")]),t._v(" 는 값을 메모리에 append 하는 방식으로 클래스를 별도로 생성하지 않는다.")]),t._v(" "),a("p",[a("code",[t._v("stringBuilder")]),t._v(" 는 변경 가능한 문자열로 synchronization 이 적용되지 않는다.")]),t._v(" "),a("p",[a("code",[t._v("stringBuffer")]),t._v(" 는 "),a("em",[a("strong",[t._v("멀티쓰레드 환경에서 안정적")])]),t._v(" 이다.")]),t._v(" "),a("h2",{attrs:{id:"exception"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exception","aria-hidden":"true"}},[t._v("#")]),t._v(" Exception")]),t._v(" "),a("p",[t._v("Java 에서는 기본적으로 2가지의 에러 유형이 있다.")]),t._v(" "),a("h3",{attrs:{id:"checked-exception"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checked-exception","aria-hidden":"true"}},[t._v("#")]),t._v(" Checked Exception")]),t._v(" "),a("p",[a("code",[t._v("Checked Exception")]),t._v(" 는 외부 환경에 의해 미리 예상 되는 오류이다.")]),t._v(" "),a("p",[t._v("예를 들면 "),a("code",[t._v("IOException")]),t._v(" "),a("code",[t._v("ClassNotFoundException")]),t._v(" 등과 같이 "),a("em",[a("strong",[t._v("반드시 예외처리가 필요하다.")])])]),t._v(" "),a("ul",[a("li",[t._v("IOException")]),t._v(" "),a("li",[t._v("SQLException")])]),t._v(" "),a("h3",{attrs:{id:"unchecked-exception-runtime-exception"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unchecked-exception-runtime-exception","aria-hidden":"true"}},[t._v("#")]),t._v(" Unchecked Exception (Runtime Exception)")]),t._v(" "),a("p",[a("code",[t._v("Unchecked Exception")]),t._v(" 는 프로그램 로직상의 문제로 일어나는 로직상의 오류로써 미리 예상할 수 없다.")]),t._v(" "),a("p",[t._v("대표적으로 "),a("code",[t._v("RuntimeException")]),t._v(" 과 같이 프로그램 실행중에 일어나며 "),a("em",[a("strong",[t._v("반드시 예외처리를 필요로 하지 않는다.")])])]),t._v(" "),a("ul",[a("li",[t._v("NullPointerException")]),t._v(" "),a("li",[t._v("IllegalArgumentException")]),t._v(" "),a("li",[t._v("IndexOutOfBoundException")]),t._v(" "),a("li",[t._v("SystemException")])]),t._v(" "),a("blockquote",[a("p",[t._v("예외처리한 객체는 작업이 끝난후 모드 GC 의 대상이 된다.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",[t._v("Checked Exception")]),t._v(" "),a("th",[t._v("Unchecked Exception")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("처리여부")]),t._v(" "),a("td",[t._v("반드시 예외처리가 필요")]),t._v(" "),a("td",[t._v("명시적인 처리를 강제하지 않음")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("확인시점")]),t._v(" "),a("td",[t._v("컴파일 단계")]),t._v(" "),a("td",[t._v("실행단계")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("예외 발생 시"),a("br"),t._v("트랜잭션 여부")]),t._v(" "),a("td",[t._v("roll-back 하지 않음")]),t._v(" "),a("td",[t._v("roll-back 처리")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("대표적인 예외")]),t._v(" "),a("td",[a("code",[t._v("Exception")]),t._v(" 의 상속을 받는 하위 클래스 중"),a("br"),a("code",[t._v("Runtime Exception")]),t._v("을 제외한 모든 예외")]),t._v(" "),a("td",[a("code",[t._v("Runtime Exception")]),t._v(" 의 하위 예외 클래스")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.nextree.co.kr/p3239/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.nextree.co.kr/p3239/"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string","aria-hidden":"true"}},[t._v("#")]),t._v(" String")]),t._v(" "),a("h3",{attrs:{id:"string-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-format","aria-hidden":"true"}},[t._v("#")]),t._v(" String.format()")]),t._v(" "),a("p",[t._v("문자열 포맷을 제공하는 메서드")]),t._v(" "),a("p",[t._v("해당 부분에 맞게 원하는 포맷 형태로 변경되어 바뀌게 된다.")]),t._v(" "),a("ul",[a("li",[t._v("%s : 스트링")]),t._v(" "),a("li",[t._v("%d : 숫자")]),t._v(" "),a("li",[t._v("%f : 실수")])]),t._v(" "),a("p",[a("strong",[t._v("Method Summary")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" format "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* statement */")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"문자형"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문자형","aria-hidden":"true"}},[t._v("#")]),t._v(" 문자형")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("항목")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%s")]),t._v(" "),a("td",[t._v("해당 위치에 문자열을 대치한다.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%10s")]),t._v(" "),a("td",[t._v("숫자(10) 만큼 문자열 좌측(+) 에 공백을 채워 문자열 길이를 만든다")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%-10s")]),t._v(" "),a("td",[t._v("숫자(10) 만큼 문자열 우측(-) 에 공백을 채워 문자열 길이를 만든다")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%10.2s")]),t._v(" "),a("td",[t._v("점(.) 우측에 해당하는 숫자(2) 만큼 문자열을 자른후 점(.) 좌측 숫자(10)만큼 문자열 "),a("em",[a("strong",[t._v("우측에 공백")])]),t._v(" 을 채워 문자열 길이를 만든다")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%-10.2s")]),t._v(" "),a("td",[t._v("점(.) 우측에 해당하는 숫자(2) 만큼 문자열을 자른후 점(.) 좌측 숫자(10)만큼 문자열 "),a("em",[a("strong",[t._v("좌측에 공백")])]),t._v(" 을 채워 문자열 길이를 만든다")])])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p1 : %s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("p1 : one\n")])])]),a("h4",{attrs:{id:"숫자형"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#숫자형","aria-hidden":"true"}},[t._v("#")]),t._v(" 숫자형")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("항목")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%d")]),t._v(" "),a("td",[t._v("해당 위치의 숫자로 대치한다.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%10d")]),t._v(" "),a("td",[t._v("숫자(10) 만큼 "),a("em",[a("strong",[t._v("좌측(+)에 공백을 채워")])]),t._v(" 숫자열길이를 만든다")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%-10d")]),t._v(" "),a("td",[t._v("숫자(10) 만큼 "),a("em",[a("strong",[t._v("우측(-)에 공백을 채워")])]),t._v(" 숫자열길이를 만든다")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%010d")]),t._v(" "),a("td",[t._v("숫자(10) 만큼 "),a("em",[a("strong",[t._v("좌측(+)에 0을 채워")])]),t._v(" 숫자열길이를 만든다")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%,d")]),t._v(" "),a("td",[t._v("천단위 콤마(,) 처리를 한다.")])])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("102")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%04d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("0102\n")])])]),a("h4",{attrs:{id:"실수형"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#실수형","aria-hidden":"true"}},[t._v("#")]),t._v(" 실수형")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("항목")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%f")]),t._v(" "),a("td",[t._v("해당 위치의 숫자로 대치한다."),a("br"),t._v("정수일 경우에는 정수만 나오며, 실수인 경우에는 소수점 6자리까지 노출된다.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%12f")]),t._v(" "),a("td",[t._v("숫자(12)만큼 문자열 좌측(+)에 공백을 채워 소수점 이하 자리수를 포함하여 길이를 만든다.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%-12f")]),t._v(" "),a("td",[t._v("숫자(12)만큼 문자열 우측(-)에 공백을 채워 소수점 이하 자리수를 포함하여 길이를 만든다.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%.2f")]),t._v(" "),a("td",[t._v("점(.) 우측에 해당하는 숫자(2) 만큼 소수점 이하 자리를 반올림하여 길이를 만든다.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%010.2f")]),t._v(" "),a("td",[t._v("숫자(10) 만큼 좌측(+)에 0을 채우고 점(.) 우측에 해당하는 숫자만큼 소수점 이하의 숫자를 자른다.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%,.2f")]),t._v(" "),a("td",[t._v("천단위 콤마(,) 처리를 한 후 점(.) 우측에 해당하는 숫자(2)만큼 소수점 이하 자리를 반올림하여 길이를 만든다.")])])])]),t._v(" "),a("h4",{attrs:{id:"원하는-위치-파라메터-사용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#원하는-위치-파라메터-사용","aria-hidden":"true"}},[t._v("#")]),t._v(" 원하는 위치 파라메터 사용")]),t._v(" "),a("p",[a("strong",[t._v("Syntax")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("% [숫자]$ [타입]\n")])])]),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%2$s %1$s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%1$tY.%1$tm.%1$td %1$tH:%1$tM:%1$tS.%1$tL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("2 1\n2014.12.08 15:46:16.270\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://micropai.tistory.com/48",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://micropai.tistory.com/48"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"stringjoiner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stringjoiner","aria-hidden":"true"}},[t._v("#")]),t._v(" StringJoiner")]),t._v(" "),a("p",[t._v("문자열을 손쉽게 붙일수 있다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" first "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"관우"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" second "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"장비"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" third "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"조운"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" fourth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"황충"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" fifth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"마초"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("String "),a("code",[t._v("+")]),t._v(" Operator")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" 오호대장군 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" first "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"second"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" third "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fourth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fifth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("오호대장군"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("StringBuffer / StringBuilder")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),t._v(" sb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("third"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fourth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fifth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" 오호대장군 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("오호대장군"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("StringJoiner")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringJoiner")]),t._v(" sj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringJoiner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nsj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("third"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fourth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fifth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" 오호대장군 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("오호대장군"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("StringJoiner 로 "),a("code",[t._v("prefix")]),t._v(" 와 "),a("code",[t._v("suffix")]),t._v(" 사용하기")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringJoiner")]),t._v(" sj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringJoiner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"["')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nsj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("third"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fourth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fifth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" 오호대장군 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("오호대장군"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("[관우-장비-조운-황충-마초]\n")])])]),a("p",[a("strong",[a("code",[t._v("stream")]),t._v(" 사용하기")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 장군들 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" third"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fourth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fifth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" 오호대장군 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 장군들"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("collect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collectors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("joining")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"["')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("오호대장군"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://futurecreator.github.io/2018/06/02/java-string-joiner/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://futurecreator.github.io/2018/06/02/java-string-joiner/"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);