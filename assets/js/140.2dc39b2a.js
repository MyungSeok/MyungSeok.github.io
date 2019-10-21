(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{459:function(t,s,a){"use strict";a.r(s);var r=a(1),e=Object(r.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-js","aria-hidden":"true"}},[t._v("#")]),t._v(" React JS")]),t._v(" "),a("h2",{attrs:{id:"왜-가상-돔-virtual-dom-이-빠른이유"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#왜-가상-돔-virtual-dom-이-빠른이유","aria-hidden":"true"}},[t._v("#")]),t._v(" 왜 가상 돔 (Virtual DOM) 이 빠른이유")]),t._v(" "),a("p",[t._v("DOM 구조상의 Node 변경점이 생기면 레이아웃을 만들고 페인팅을 하는 과정에서 리소스가 발생된다."),a("br"),t._v("\n만약 30개의 노드가 바뀐다고 가정하면 30번의 (잠재적인) 레이아웃 재계산과 30번의 리랜더링을 초래하는것이다."),a("br"),t._v("\n이는 React 를 사용했을때 DOM 조작이 최종적인 결과물만 반영되기 때문에 모든 변화를 하나로만 묶어서 변화 시키는 것이다.")]),t._v(" "),a("p",[t._v("즉 "),a("em",[a("strong",[t._v("브라우저가 연산하는 횟수를 줄이는데 집중")])]),t._v(" 한다.")]),t._v(" "),a("p",[t._v("물론 최종 결과 값만 변경되기 때문에 궂이 Virtual DOM 을 사용하지 않아도 변화를 묶어서 DOM 에 반영 시켜 주면 되지만"),a("br"),t._v(" "),a("em",[a("strong",[t._v("Virtual DOM 은 DOM fragment 를 관리하는 과정을 수동으로 하나하나 작업할 필요없이 자동화 하고 추상화하는것")])]),t._v(" 에 있다."),a("br"),t._v("\n이러한 부분들을 자동화 해주는 편의를 제공하기 때문에 충분히 매력적이고 강력한 뷰 라이브러리인 것이다.")]),t._v(" "),a("p",[t._v("각 컴포넌트가 DOM 조작을 요청할 때 다른 컴포넌트들과 상호작용하지 않아도 되며, 특정 DOM 을 조작할 것이라던지, 혹은 이미 조작했다던지에 대한 공유를 할 필요가 없다.")]),t._v(" "),a("p",[t._v("즉 각각의 변화들을 동기화 작업을 거치지 않으면서 하나의 작업으로 묶을수 있는것이다.")]),t._v(" "),a("blockquote",[a("p",[t._v("한번의 상태변경으로 가상화한 DOM 에서 일괄적으로 적용하고 진짜 돔과 비교해서 변경된 부분을 한번에 적용시키는 방법으로 DOM 랜더링 횟수를 줄이게 된다.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://velopert.com/3236",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://velopert.com/3236"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://okky.kr/article/395781",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://okky.kr/article/395781"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://blog.hanumoka.net/2018/08/15/web-20180815-web-virtual-dom/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.hanumoka.net/2018/08/15/web-20180815-web-virtual-dom/"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"class-constructor-에서-super"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-constructor-에서-super","aria-hidden":"true"}},[t._v("#")]),t._v(" Class Constructor 에서 "),a("code",[t._v("super()")])]),t._v(" "),a("p",[t._v("컴포넌트 안에서 생성자 (constructor) 를 실행하면 반드시 "),a("code",[t._v("super()")]),t._v(" 를 실행해야 한다."),a("br"),t._v("\n생성자 (constructor) 를 사용하지 않으면 자동으로 실행해준다.")]),t._v(" "),a("p",[t._v("이는 "),a("code",[t._v("this")]),t._v(" 객체를 초기화 해주지 않기 때문이다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Myclass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error : 'this' is not allowed before")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("위와 같이 "),a("code",[t._v("super()")]),t._v(" 실해 이전에 "),a("code",[t._v("this")]),t._v(" 를 참조하면 허용되지 않는다.")]),t._v(" "),a("p",[a("code",[t._v("super()")]),t._v(" 를 호출할때 "),a("code",[t._v("props")]),t._v(" 인자를 넘겨주면 constructor 안에서 "),a("code",[t._v("this.props")]),t._v(" 를 접근 가능하게 구성해준다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Myclass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("위와 같이 사용해야 정상적으로 "),a("code",[t._v("this.props")]),t._v(" 사용이 가능하다.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://medium.com/@umioh1109/react-es6-class-constructor%EC%97%90%EC%84%9C%EC%9D%98-super-9d53ba0611d9",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://medium.com/@umioh1109/react-es6-class-constructor에서의-super-9d53ba0611d9"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);