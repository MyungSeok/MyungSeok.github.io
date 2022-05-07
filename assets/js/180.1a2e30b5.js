(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{423:function(t,a,s){"use strict";s.r(a);var n=s(1),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"performance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performance","aria-hidden":"true"}},[t._v("#")]),t._v(" Performance")]),t._v(" "),s("h2",{attrs:{id:"비-차단-스크립트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비-차단-스크립트","aria-hidden":"true"}},[t._v("#")]),t._v(" 비 차단 스크립트")]),t._v(" "),s("p",[t._v("HTML Parsing 작업의 중단 없이 동시에 내려받게 됨")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/A002.png",alt:"비 차단 스크립트"}})]),t._v(" "),s("ul",[s("li",[t._v("aync\n"),s("ul",[s("li",[t._v("HTML 파싱과 동시에 다운 받으며 스크립트 다운로드가 끝났을 경우 HTML 파싱을 중지 시키고 스크립트 파싱한다.")])])]),t._v(" "),s("li",[t._v("defer\n"),s("ul",[s("li",[t._v("HTML 파싱과 동시에 다운 받으며 스크립트 다운로드가 끝나도 HTML 파싱이 완료된 이후에 스크립트 파싱을 시작한다.")])])])]),t._v(" "),s("h2",{attrs:{id:"쿼리스트링-리소스-파일-캐쉬-방지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#쿼리스트링-리소스-파일-캐쉬-방지","aria-hidden":"true"}},[t._v("#")]),t._v(" 쿼리스트링 (리소스 파일 캐쉬 방지)")]),t._v(" "),s("p",[t._v("브라우저에서 캐의 동작은 기존에 동일한 URL 에 요청한 적이 있었는지 판단한다."),s("br"),t._v("\n따라서 수정 배포된 리소스파일 (js, css, image 등등 ...) 이 수정되면 "),s("em",[s("strong",[t._v("URL 경로의 변경")])]),t._v(" 혹은 _"),s("strong",[t._v("쿼리스트링으로 파일 캐시를 방지")]),t._v("_한다.")]),t._v(" "),s("div",{staticClass:"language-markup extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markup"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/js/bundle.js?ver=20180628"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/css/bundle.css?ver=20180628"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/img/image.png?ver=20180628"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("코드적 장점\n"),s("ul",[s("li",[t._v("매번 캐시를 삭제해야 하는 불편함을 피할 수 있다.")])])]),t._v(" "),s("li",[t._v("관리적 장점\n"),s("ul",[s("li",[t._v("파일의 릴리즈 (release) 버전의 정보를 알기 쉽게 구분한다.")])])])])])},[],!1,null,null,null);a.default=r.exports}}]);