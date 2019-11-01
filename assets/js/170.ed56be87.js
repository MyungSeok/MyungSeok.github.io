(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{296:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"iterable-iterator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iterable-iterator","aria-hidden":"true"}},[t._v("#")]),t._v(" Iterable & Iterator")]),t._v(" "),s("h2",{attrs:{id:"for-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-loop","aria-hidden":"true"}},[t._v("#")]),t._v(" For Loop")]),t._v(" "),s("p",[t._v("자바스크립트의 반복문의 "),s("code",[t._v("for loop")]),t._v(" 는 다음 몇가지로 나뉜다.")]),t._v(" "),s("ul",[s("li",[t._v("for\n"),s("ul",[s("li",[t._v("가장 기본적인 "),s("code",[t._v("for loop")])])])]),t._v(" "),s("li",[t._v("forEach\n"),s("ul",[s("li",[t._v("배열을 순회하며 "),s("code",[t._v("value")]),t._v(" 와 "),s("code",[t._v("index")]),t._v(" 를 매개변수로 전달한다.")]),t._v(" "),s("li",[s("code",[t._v("break")]),t._v(", "),s("code",[t._v("return")]),t._v(" 으로 루프를 중단할 수 없다.")])])]),t._v(" "),s("li",[t._v("for in\n"),s("ul",[s("li",[t._v("배열의 인덱스만 순환 하는것이 아닌 프로토타입 체인을 포함한 모든 속성을 순회한다.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("배열보다는 객체를 순회")])]),t._v(" 하기 위해 만들어진 루프이다.")])])]),t._v(" "),s("li",[t._v("for of\n"),s("ul",[s("li",[s("code",[t._v("for in")]),t._v(" 으로 배열을 순회할 때 생기는 문제점들을 해소하였다.")])])])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("for of")]),t._v(" 는 "),s("em",[s("strong",[t._v("순회가능한 (iterable) 객체를 상대로 사용 가능")])]),t._v(" 하다.")])]),t._v(" "),s("p",[t._v("순회가능한 (Iterable) 한 객체는 "),s("em",[s("strong",[s("code",[t._v("Symbol.iterator")]),t._v(" 심볼을 속성으로 가지고 있으며 이터레이터 객체를 반환하는 객체")])]),t._v(" 를 뜻한다."),s("br"),t._v("\n해당 스팩을 "),s("em",[s("strong",[t._v("이터러블 프로토콜")])]),t._v(" 이라고 하며 "),s("em",[s("strong",[t._v("해당 스팩을 구현한 객체를 이터러블 객체")])]),t._v(" 라고 한다.")]),t._v(" "),s("h2",{attrs:{id:"iterable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iterable","aria-hidden":"true"}},[t._v("#")]),t._v(" Iterable")]),t._v(" "),s("p",[t._v("ECMA6 에서 도입된 이터레이션 프로토콜 (Iteration Protocal) 은 데이터 컬렉션을 순회하기 위한 프로토콜 (규칙) 이다.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/A100.png",alt:"이터레이터 프로토콜"}})]),t._v(" "),s("p",[t._v("이 객체는 "),s("code",[t._v("for...of")]),t._v(" 로 순회 가능하며 "),s("code",[t._v("Spread")]),t._v(" 문법의 피연산자 (대상) 가 될 수 있다.")]),t._v(" "),s("p",[t._v("이터러블 프로토콜을 준수한 객체를 이터러블 객체라고 한다.")]),t._v(" "),s("p",[t._v("즉 다시 말해 이터러블은 "),s("code",[t._v("Symbol.iterator")]),t._v(" 메서드를 구현하거나 프로토타입 체인에 의해 상속한 객체를 말한다.")]),t._v(" "),s("p",[t._v("일반적으로 배열은 "),s("code",[t._v("Symbol.iterator")]),t._v(" 메서드를 반환한다. 그러므로 이터러블한 객체이다.")]),t._v(" "),s("blockquote",[s("p",[t._v("이터러블 = 이터러블 프로토콜을 준수한 객체")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" array "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 배열은 Symbol.iterator 메서드를 소유")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 일반적인 객체는 Symbol.iterator 메서드를 소유하지 않는다.")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeError: obj is not iterable")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> obj 는 이터러블 하지 않다. 즉 순환 가능하지 않다.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> Symbol.iterator 메서드가 없기 때문이다.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("Symbol.iterator")]),t._v(" 의 키를 가지고 있는 객체로써 다음 스펙을 구현한 객체이다.")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Iterator")]),t._v(" 인터페이스를 구현 하고 있는 객체를 "),s("code",[t._v("Iterable")]),t._v(" 객체라고 한다.")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Symbol.iterator")]),t._v(" 의 키를 갖고 있다.")]),t._v(" "),s("li",[t._v("값으로 인자를 받지 않고 "),s("em",[s("strong",[t._v("Iterator Object")])]),t._v(" 를 반환하는 함수가 온다.")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" done"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"iterator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iterator","aria-hidden":"true"}},[t._v("#")]),t._v(" Iterator")]),t._v(" "),s("p",[t._v("이터러블과 밀접한 관련이 있는 이터레이터는 이터레이터 프로토콜을 준수한 객체이다.")]),t._v(" "),s("p",[t._v("이터레이터 프로토콜은 이터러블 객체가 반환하는 "),s("code",[t._v("Symbol.iterator")]),t._v(" 를 말한다.")]),t._v(" "),s("p",[t._v("이 "),s("code",[t._v("Symbol.iterator")]),t._v(" 는 다음과 같은 특징을 갖는다.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("next()")]),t._v(" 메서드를 가지고 있다.")]),t._v(" "),s("li",[s("code",[t._v("next()")]),t._v(" 메서드를 호출하면 이터러블 객체를 순회하는 구조를 가진다.")]),t._v(" "),s("li",[t._v("이터러블 객체를 순회하면서 "),s("code",[t._v("value")]),t._v(", "),s("code",[t._v("done")]),t._v(" 프로퍼티를 가지는 객체를 반환한다. (Iterator Result)")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" array "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이터레이터를 반환")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" iterator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// next() 메서드를 호출할때 마다 이터러블을 순회한다.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// next() 메서드를 호출하면 value, done 프로퍼티를 갖는 Iterator Result 객체를 반환")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {value: 1, done: false}")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {value: 2, done: false}")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {value: 3, done: false}")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {value: undefined, done: true}")]),t._v("\n")])])]),s("p",[t._v("이는 "),s("em",[s("strong",[t._v("TC39")])]),t._v(" 에서 정의한 "),s("em",[s("strong",[t._v("Iterator Interface")])]),t._v(" 정의를 따른 "),s("code",[t._v("Object")]),t._v(" 로써 내용은 다음과 같다.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("next")]),t._v(" 라는 키를 갖고 있으며 값으로 인자를 받지 않고 "),s("em",[s("strong",[t._v("Iterator Result Object")])]),t._v(" 를 반환하는 함수가 온다.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Iterator Result Object")])]),t._v(" 는 "),s("code",[t._v("value")]),t._v(" 와 "),s("code",[t._v("done")]),t._v(" 이라는 키를 갖고 있다.\n"),s("ul",[s("li",[s("code",[t._v("value")]),t._v(" 는 실제 값을 의미")]),t._v(" "),s("li",[s("code",[t._v("done")]),t._v(" 는 계속 반복 할 수 있는지 따른 "),s("code",[t._v("boolean")]),t._v(" 값")])])])]),t._v(" "),s("p",[t._v("영원히 "),s("code",[t._v("0")]),t._v(" 을 반환하는 Iterator")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      done"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("각 배열을 순회하며 배열의 끝 값을 반환하는 Iterator")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      done"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("ECMA6 에서는 "),s("em",[s("strong",[t._v("객체 리터럴 작성 순서에 따라 파싱")])]),t._v(" 한다.")]),t._v(" "),s("p",[t._v("예를 들면 위 코드의 "),s("code",[t._v("done")]),t._v(" 과 "),s("code",[t._v("value")]),t._v(" 중에서 "),s("code",[t._v("done")]),t._v(" 이 먼저 작성되어 있기 때문에 "),s("code",[t._v("done")]),t._v(" 을 먼저 파싱한다."),s("br"),t._v("\nECMA5 에서는 "),s("code",[t._v("done")]),t._v(" 이든 "),s("code",[t._v("value")]),t._v(" 든 어느것을 먼저 파싱할지 보장이 안됨")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("요약")]),t._v(" "),s("ul",[s("li",[t._v("이터러블 프로토콜을 준수 -> 이터러블 객체\n"),s("ul",[s("li",[t._v("Symbol.iterator 메서드를 소유한 객체")]),t._v(" "),s("li",[t._v("혹은 프로토타입 체인에 상속한 객체")])])]),t._v(" "),s("li",[t._v("이터레이터 프로토콜을 준수 -> 이터레이터 객체\n"),s("ul",[s("li",[t._v("Symbol.iterator 메서드를 구현한 객체")]),t._v(" "),s("li",[s("code",[t._v("next()")]),t._v(" 메서드를 가지고 있고 "),s("code",[t._v("next()")]),t._v(" 메서드를 호출하면 이터러블을 순회하며 "),s("code",[t._v("value")]),t._v(", "),s("code",[t._v("done")]),t._v(" 프로퍼티를 갖는 결과 객체를 반환하는 동작구조를 가지는 객체")])])])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMA-262 - Iterable Interface"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"http://www.bsidesoft.com/?p=2913",target:"_blank",rel:"noopener noreferrer"}},[t._v("GDG 2016 발표자료"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://youtu.be/CY_2mFxQwzc",target:"_blank",rel:"noopener noreferrer"}},[t._v("GDG DevFest Seoul 2016 - Iterable & Iterator"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://poiemaweb.com/es6-iteration-for-of",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://poiemaweb.com/es6-iteration-for-of"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);