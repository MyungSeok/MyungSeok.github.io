(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{340:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"window"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window","aria-hidden":"true"}},[t._v("#")]),t._v(" Window")]),t._v(" "),s("h2",{attrs:{id:"settimeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settimeout","aria-hidden":"true"}},[t._v("#")]),t._v(" SetTimeout")]),t._v(" "),s("p",[s("code",[t._v("WindowTimers")]),t._v(" 에서 지원하는 타이머 객체로서\n"),s("em",[s("strong",[t._v("자바스크립트 엔진이 일정시간 대기하였다가 UI 큐에 작업을 추가")])]),t._v(" 한다.")]),t._v(" "),s("blockquote",[s("p",[t._v("UI 큐에 추가한 작업은 이전에 추가된 작업 대기열 이후에 실행될 수 있도록 예정된다.")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" paramN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("window\n"),s("ul",[s("li",[s("code",[t._v("this")]),t._v(" 객체가 window 일때 생략 가능")])])]),t._v(" "),s("li",[t._v("callback\n"),s("ul",[s("li",[t._v("지연된 시간이 끝난 후 실행되는 콜백 함수")])])]),t._v(" "),s("li",[t._v("delay\n"),s("ul",[s("li",[t._v("함수 지연 시간 (default : 0)")])])]),t._v(" "),s("li",[t._v("param1 ... paramN\n"),s("ul",[s("li",[t._v("콜백 함수로 전달될 매개변수")]),t._v(" "),s("li",[t._v("IE9 이하에서는 매개변수 전달이 안된다. (IE 10 이상 지원)")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example #1 : JS - ES5")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timeoutId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 타이머 세팅")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    timeoutId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Notice'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 타이머 삭제")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancleTimer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeoutId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("지정된 시간 이후에 UI 작업 큐에 추가되기 때문에 실제로 언제 실행 되는지는 알 수 없다.")]),t._v(" "),s("h2",{attrs:{id:"setinterval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setinterval","aria-hidden":"true"}},[t._v("#")]),t._v(" SetInterval")]),t._v(" "),s("p",[t._v("일정한 주기를 기간으로 "),s("code",[t._v("callback")]),t._v(" 함수를 호출 합니다.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" paramN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("window\n"),s("ul",[s("li",[s("code",[t._v("this")]),t._v(" 객체가 window 일때 생략 가능")])])]),t._v(" "),s("li",[t._v("callback\n"),s("ul",[s("li",[t._v("지연된 시간이 끝난 후 실행되는 콜백 함수")])])]),t._v(" "),s("li",[t._v("delay\n"),s("ul",[s("li",[t._v("함수 지연 시간 (default : 0)")])])]),t._v(" "),s("li",[t._v("param1 ... paramN\n"),s("ul",[s("li",[t._v("콜백 함수로 전달될 매개변수")]),t._v(" "),s("li",[t._v("IE9 이하에서는 매개변수 전달이 안된다. (IE 10 이상 지원)")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" intervalID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 타이머 세팅 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    intervalId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Notice'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 타이머 삭제 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancleTimer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intervalId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"requestanimationframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requestanimationframe","aria-hidden":"true"}},[t._v("#")]),t._v(" RequestAnimationFrame")]),t._v(" "),s("p",[t._v("브라우저에게 "),s("code",[t._v("callback")]),t._v(" 함수를 (프레임 단위로 처리되는) 호출하도록 한다.")]),t._v(" "),s("p",[t._v("이 "),s("code",[t._v("callback")]),t._v(" 은 "),s("em",[s("strong",[t._v("보통 1초에 60회 정도 호출되게 설계")])]),t._v(" 되어 있지만"),s("br"),t._v(" "),s("em",[s("strong",[t._v("W3C 권장사항에 따라 디스플레이의 주사율과 일치하도록 실행")])]),t._v(" 됩니다.")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("<iframe>")]),t._v(" 에서는 requestAnimationFrame() 의 호출이 멈출수 있습니다.")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Polyfill")])]),t._v(" "),s("p",[t._v("브라우저 별로 다를 수가 있으니 아래 구문으로 사용을 권한다.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reqAnimate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestAnimationFrame\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitRequestAnimationFrame\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mozRequestAnimationFrame\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("oRequestAnimationFrame\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msRequestAnimationFrame\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reqAnimate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* statement */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"encodeuri-vs-encodeuricomponent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encodeuri-vs-encodeuricomponent","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("encodeURI")]),t._v(" vs "),s("code",[t._v("encodeURIComponent")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("encodeURI")]),t._v(" / "),s("code",[t._v("decodeURI")]),t._v(" "),s("ul",[s("li",[t._v("최소한의 문자만 인코딩 합니다.")]),t._v(" "),s("li",[s("code",[t._v(";")]),t._v(" "),s("code",[t._v("/")]),t._v(" "),s("code",[t._v("?")]),t._v(" "),s("code",[t._v(":")]),t._v(" "),s("code",[t._v("@")]),t._v(" "),s("code",[t._v("&")]),t._v(" "),s("code",[t._v("=")]),t._v(" "),s("code",[t._v("+")]),t._v(" "),s("code",[t._v("$")]),t._v(" "),s("code",[t._v(",")]),t._v(" "),s("code",[t._v("-")]),t._v(" "),s("code",[t._v("_")]),t._v(" "),s("code",[t._v(".")]),t._v(" "),s("code",[t._v("!")]),t._v(" "),s("code",[t._v("~")]),t._v(" "),s("code",[t._v("*")]),t._v(" "),s("code",[t._v("'")]),t._v(" "),s("code",[t._v("(")]),t._v(" "),s("code",[t._v(")")]),t._v(" "),s("code",[t._v("#")]),t._v(" 와 같은 특수문자는 인코딩 되지 않습니다.")])])]),t._v(" "),s("li",[s("code",[t._v("encodeURIComponent")]),t._v(" / "),s("code",[t._v("decodeURIComponent")]),t._v(" "),s("ul",[s("li",[t._v("대부분의 문자를 인코딩 합니다.")])])]),t._v(" "),s("li",[s("code",[t._v("escape")]),t._v(" / "),s("code",[t._v("unescape")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("encodeURI")]),t._v(" 와 "),s("code",[t._v("encodeURIComponent")]),t._v(" 의 중간정도의 문자를 인코딩 합니다.")])])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://mwultong.blogspot.com/2006/10/encodeuri-encodeuricomponent-escape.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mwultong.blogspot.com/2006/10/encodeuri-encodeuricomponent-escape.html"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);