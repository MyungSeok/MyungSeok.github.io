(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{343:function(e,t,v){"use strict";v.r(t);var r=v(1),_=Object(r.a)({},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"dispatcher-servlet"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dispatcher-servlet","aria-hidden":"true"}},[e._v("#")]),e._v(" Dispatcher Servlet")]),e._v(" "),v("p",[v("em",[v("strong",[e._v("MVC (Model, View, Controller)")])]),e._v(" 구조로 구성되어 있는 "),v("code",[e._v("Spring Framework")]),e._v(" 내에 원활한 처리를 위한 과정이다.")]),e._v(" "),v("p",[v("img",{attrs:{src:"/img/A014.png",alt:'"Dispatcher Servlet"'}})]),e._v(" "),v("h2",{attrs:{id:"동작-구성"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#동작-구성","aria-hidden":"true"}},[e._v("#")]),e._v(" 동작 구성")]),e._v(" "),v("ol",[v("li",[e._v("클라이언트가 요청한 정보를 최초에 "),v("code",[e._v("DispatcherServlet")]),e._v(" 에서 가로챈다.\n"),v("ul",[v("li",[v("code",[e._v("web.xml")]),e._v(" 에 등록되어 있는 "),v("code",[e._v("DispatcherServlet")]),e._v(" 의 "),v("code",[e._v("<url-pattern>")]),e._v(" 이 "),v("code",[e._v("'/'")]),e._v(" 로 등록 되어 모든 URL 패턴에 동작 되기 때문이다.")]),e._v(" "),v("li",[e._v("특정 URL 에만 적용이 필요하면 "),v("code",[e._v("<url-pattern>")]),e._v(" 내용의 범위만 바꿔주면 된다.")])])]),e._v(" "),v("li",[e._v("가로챈 정보를 "),v("code",[e._v("HandlerMapping")]),e._v(" 에게 보내 해당 요청을 처리할 수 있는 "),v("code",[e._v("Controller")]),e._v(" 를 찾아낸다.")]),e._v(" "),v("li",[e._v("요청을 처리할 "),v("code",[e._v("Controller")]),e._v(" 를 찾아 냈으면 해당 "),v("code",[e._v("Controller")]),e._v(" 에게 해당 요청 정보를 보내준다.")]),e._v(" "),v("li",[v("code",[e._v("Controller")]),e._v(" 는 해당 요청 내용을 처리 후 요청을 응답 받을 "),v("code",[e._v("View")]),e._v(" 의 이름을 리턴하게 된다.\n"),v("ul",[v("li",[e._v("실제로 응답전에 "),v("code",[e._v("View Resolver")]),e._v(" 가 미리 응답할 내용을 분석하여 해당 "),v("code",[e._v("View")]),e._v(" 이름을 검색 한다.")])])]),e._v(" "),v("li",[e._v("해당 "),v("code",[e._v("View")]),e._v(" 가 있다면 처리 결과를 "),v("code",[e._v("View")]),e._v(" 에 보낸후 이 결과를 다시 "),v("code",[e._v("DispatcherServlet")]),e._v(" 에 보낸다.")]),e._v(" "),v("li",[v("code",[e._v("DispatcherServlet")]),e._v(" 은 받은 정보를 최종적으로 클라이언트에 전송하게 된다.")])]),e._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[e._v("참고자료")]),e._v(" "),v("p",[v("a",{attrs:{href:"http://egloos.zum.com/springmvc/v/504151",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://egloos.zum.com/springmvc/v/504151"),v("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=_.exports}}]);