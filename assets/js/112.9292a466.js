(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{394:function(t,a,e){"use strict";e.r(a);var r=e(1),s=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"http"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),e("h2",{attrs:{id:"http-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-header","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP Header")]),t._v(" "),e("h3",{attrs:{id:"request-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-header","aria-hidden":"true"}},[t._v("#")]),t._v(" Request Header")]),t._v(" "),e("p",[t._v("클라이언트 브라우저에서 HTTP 프로토콜을 이용하여 "),e("em",[e("strong",[t._v("요청 정보를 웹 서버로 전송할 때")])]),t._v(" HTTP 요청 헤더에 부가적인 정보를 담아 전송한다.")]),t._v(" "),e("ul",[e("li",[t._v("Accept\n"),e("ul",[e("li",[t._v("클라이언트가 처리하는 미디어 타입")])])]),t._v(" "),e("li",[t._v("Accept-encoding\n"),e("ul",[e("li",[t._v("클라이언트가 해석할 수 있는 인코딩 방식")])])]),t._v(" "),e("li",[t._v("Accept-language\n"),e("ul",[e("li",[t._v("클라이언트가 지원하는 언어")])])]),t._v(" "),e("li",[t._v("Connection\n"),e("ul",[e("li",[t._v("클라이언트와 서버의 연결 방식\n"),e("ul",[e("li",[t._v("keep-alive : 클라이언트와 접속 유지")]),t._v(" "),e("li",[t._v("close : 클라이언트와 접속 중단")])])])])]),t._v(" "),e("li",[t._v("Host\n"),e("ul",[e("li",[t._v("호스트 이름 URI 와 PORT 번호 정보")])])]),t._v(" "),e("li",[t._v("User-agent\n"),e("ul",[e("li",[t._v("클라이언트 브라우저 정보")])])])]),t._v(" "),e("h3",{attrs:{id:"response-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-header","aria-hidden":"true"}},[t._v("#")]),t._v(" Response Header")]),t._v(" "),e("p",[t._v("서버가 HTTP 프로토콜을 이용하여 클라이언트의 요청에 대해 응답할 때 부가적인 정보를 응답 헤더에 담아 전송한다.")]),t._v(" "),e("ul",[e("li",[t._v("Connection\n"),e("ul",[e("li",[t._v("클라이언트와 서버의 연결 방식 설정\n"),e("ul",[e("li",[t._v("keep-alive : 클라이언트와 접속 유지")]),t._v(" "),e("li",[t._v("close : 클라이언트와 접속 중단")])])])])]),t._v(" "),e("li",[t._v("Content-Length\n"),e("ul",[e("li",[t._v("요청한 파일의 데이터 길이")])])]),t._v(" "),e("li",[t._v("Content-Type\n"),e("ul",[e("li",[t._v("헤더 응답 문서의 mime 타입")])])]),t._v(" "),e("li",[t._v("Date\n"),e("ul",[e("li",[t._v("현재 일시를 GMT 형식으로 지정")])])]),t._v(" "),e("li",[t._v("Server\n"),e("ul",[e("li",[t._v("웹 서버 정보")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("CORS 관련으로 "),e("em",[t._v("**Access-Control-Allow-Origin: ***")]),t._v(" 으로 설정되면 도메인 구분없이 XHR 호출이 가능해진다.")])]),t._v(" "),e("h2",{attrs:{id:"keep-alive-관련"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive-관련","aria-hidden":"true"}},[t._v("#")]),t._v(" Keep-alive 관련")]),t._v(" "),e("ul",[e("li",[e("em",[e("strong",[t._v("디바이스 간의 커넥션을 유지하는 기법")])]),t._v(" 으로 TCP 와 HTTP 가 전혀 다르다.\n"),e("ul",[e("li",[e("em",[e("strong",[t._v("TCP 는 OS가 제어")])]),t._v(" 하고, "),e("em",[e("strong",[t._v("HTTP 는 웹 서버가 제어")])]),t._v(" 한다.")])])]),t._v(" "),e("li",[t._v("HTTP 1.1 이상에서 지원되는 스팩으로 "),e("em",[e("strong",[t._v("헤더에 설정")])]),t._v(" 하면 된다.")]),t._v(" "),e("li",[e("em",[e("strong",[t._v("max 요청수")])]),t._v(" 와 "),e("em",[e("strong",[t._v("유효시간(timeout)")])]),t._v(" 으로 구성된다.")])]),t._v(" "),e("h2",{attrs:{id:"timeout-종류"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#timeout-종류","aria-hidden":"true"}},[t._v("#")]),t._v(" Timeout 종류")]),t._v(" "),e("h3",{attrs:{id:"connection-timeout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-timeout","aria-hidden":"true"}},[t._v("#")]),t._v(" Connection Timeout")]),t._v(" "),e("p",[t._v("Connection 을 구성하는데 소요되는 시간")]),t._v(" "),e("h4",{attrs:{id:"read-timeout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#read-timeout","aria-hidden":"true"}},[t._v("#")]),t._v(" Read Timeout")]),t._v(" "),e("p",[t._v("Server 에서 데이터를 완전히 받을때 까지 걸리는 시간")]),t._v(" "),e("h2",{attrs:{id:"mime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mime","aria-hidden":"true"}},[t._v("#")]),t._v(" MIME")]),t._v(" "),e("p",[t._v("서버가 클라이언트에게 전송되는 문서에 대한 유형을 지칭하는 타입")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax","aria-hidden":"true"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[t._v("[파일의종류]/[파일타입]\n")])])]),e("h4",{attrs:{id:"type-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-list","aria-hidden":"true"}},[t._v("#")]),t._v(" Type List")]),t._v(" "),e("ul",[e("li",[t._v("text\n"),e("ul",[e("li",[t._v("텍스트 파일")]),t._v(" "),e("li",[t._v("text/plain, text/html, text/css, text/javascript")])])]),t._v(" "),e("li",[t._v("multipart\n"),e("ul",[e("li",[t._v("이미지 파일 (비디오 제외)")]),t._v(" "),e("li",[t._v("audio/midi, audio/mpeg, audio/webm, audio/ogg, audio/wav")])])]),t._v(" "),e("li",[t._v("audio\n"),e("ul",[e("li",[t._v("오디오 파일")]),t._v(" "),e("li",[t._v("audio/midi, audio/mpeg, audio/webm, audio/ogg, audio/wav")])])]),t._v(" "),e("li",[t._v("video\n"),e("ul",[e("li",[t._v("비디오 파일")]),t._v(" "),e("li",[t._v("video/webm, video/ogg")])])]),t._v(" "),e("li",[t._v("application\n"),e("ul",[e("li",[t._v("모든 바이너리 타입")]),t._v(" "),e("li",[t._v("application/octet-stream, application/pkcs12, application/vnd.mspowerpoint, application/xhtml+xml, application/xml,  application/pdf")])])])]),t._v(" "),e("h2",{attrs:{id:"페이지의-전환-방식"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#페이지의-전환-방식","aria-hidden":"true"}},[t._v("#")]),t._v(" 페이지의 전환 방식")]),t._v(" "),e("h3",{attrs:{id:"sendredirect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sendredirect","aria-hidden":"true"}},[t._v("#")]),t._v(" sendRedirect")]),t._v(" "),e("p",[t._v("새로운 요청을 작성하여 넘긴다."),e("br"),t._v(" "),e("code",[t._v("forward")]),t._v(" 에 비해 느리다.")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendRedirect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"forward"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#forward","aria-hidden":"true"}},[t._v("#")]),t._v(" forward")]),t._v(" "),e("p",[t._v("요청 대상을 새로운 대상으로 전달한다."),e("br"),t._v(" "),e("code",[t._v("sendRedirect")]),t._v(" 에 비해 빠르다.")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestDispatcher")]),t._v(" dispatcher "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRequestDispatcher")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndispatcher"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"servlet-life-cycle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#servlet-life-cycle","aria-hidden":"true"}},[t._v("#")]),t._v(" Servlet Life Cycle")]),t._v(" "),e("ol",[e("li",[t._v("Client 의 Request 에 따라 Servlet Engine 이 Servlet 을 로드한다.")]),t._v(" "),e("li",[t._v("로드된 Servlet 을 초기화 하기 위해 Servlet 의 "),e("code",[t._v("init method")]),t._v(" 를 호출한다.")]),t._v(" "),e("li",[t._v("Servlet 객체는 각 Request 에 따른 처리를 한다.")]),t._v(" "),e("li",[t._v("최종적으로는 "),e("code",[t._v("distroy method")]),t._v(" 를 호출하여 Servlet 을 제거한다.")])]),t._v(" "),e("h2",{attrs:{id:"http-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-method","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP METHOD")]),t._v(" "),e("ul",[e("li",[t._v("GET\n"),e("ul",[e("li",[t._v("URL로 파일 및 자원등을 가져올 수 있도록 요청")])])]),t._v(" "),e("li",[t._v("POST\n"),e("ul",[e("li",[t._v("Request 로 전달된 데이터를 기반으로 서버에 요청")]),t._v(" "),e("li",[t._v("수행의 목적이 강함")])])]),t._v(" "),e("li",[t._v("DELETE\n"),e("ul",[e("li",[t._v("데이터 삭제의 요청")])])]),t._v(" "),e("li",[t._v("PUT\n"),e("ul",[e("li",[t._v("Request 로 전달되는 데이터를 기반으로 서버에 요청")]),t._v(" "),e("li",[t._v("기준 데이터가 없을때는 생성, 있을때는 수정")])])]),t._v(" "),e("li",[t._v("PATCH\n"),e("ul",[e("li",[t._v("변경된 데이터만 전달하여 업데이트를 요청함")])])])]),t._v(" "),e("h2",{attrs:{id:"network-handshaking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#network-handshaking","aria-hidden":"true"}},[t._v("#")]),t._v(" Network Handshaking")]),t._v(" "),e("ul",[e("li",[t._v("ARC (Acknowledgement) : 송신된 메세지가 정상적으로 수신 되었음을 송신측으로 응답하는 것")]),t._v(" "),e("li",[t._v("SYN (Synchronize) : 연결시작 및 회선의 개선 용도로 사용")]),t._v(" "),e("li",[t._v("FIN (Finish) : 연결해제 및 회선 종결의 용도로 사용")])]),t._v(" "),e("h3",{attrs:{id:"연결"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#연결","aria-hidden":"true"}},[t._v("#")]),t._v(" 연결")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/A053.png",alt:"3Way 연결"}})]),t._v(" "),e("h3",{attrs:{id:"해제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#해제","aria-hidden":"true"}},[t._v("#")]),t._v(" 해제")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/A054.png",alt:"3Way 연결"}})])])},[],!1,null,null,null);a.default=s.exports}}]);