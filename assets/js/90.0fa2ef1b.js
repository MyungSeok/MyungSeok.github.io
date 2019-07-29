(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{350:function(t,r,e){"use strict";e.r(r);var s=e(1),a=Object(s.a)({},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"security"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#security","aria-hidden":"true"}},[t._v("#")]),t._v(" Security")]),t._v(" "),e("h2",{attrs:{id:"다이제스트-digest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#다이제스트-digest","aria-hidden":"true"}},[t._v("#")]),t._v(" 다이제스트 (Digest)")]),t._v(" "),e("p",[t._v("과거에 DB 에 저장되어 있는 비밀번호와 사용자가 입력한 값을 직접 비교하는 프로세스가 일반적이였으나 보안이슈로 인하여 사용자의 비밀번호를 암호화하는 대표적인 방법으로 암호화 해시 함수 (Cryptographic Hash Function) 가 있다.")]),t._v(" "),e("p",[t._v("일반적으로 사용자가 입력한 비밀번호는 암호화 해시 함수를 거쳐 다이제스트 (Digest) 형태로 저장된다.")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("다이제스트 (Digest) 란 해시 함수라는 수학적인 연산을 통해 암호화된 메시지를 의미한다.")])])]),t._v(" "),e("p",[t._v("암호화 해시 함수의 특징은 "),e("em",[e("strong",[t._v("단방향")])]),t._v(" 이라서 역으로 추적이 거의 불가능하다.")]),t._v(" "),e("p",[t._v("대표적인 해시 함수는 "),e("code",[t._v("MD5")]),t._v(" "),e("code",[t._v("SHA-1")]),t._v(" "),e("code",[t._v("SHA-256")]),t._v(" 등이 있다.")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.itworld.co.kr/news/94202",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.itworld.co.kr/news/94202"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"cookie-session-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie-session-cache","aria-hidden":"true"}},[t._v("#")]),t._v(" Cookie & Session & Cache")]),t._v(" "),e("p",[t._v("HTTP 프로토콜의 상태 유지를 하기 위해 Server 가 Client 를 식별할 수 있도록 사용하는 방식")]),t._v(" "),e("h3",{attrs:{id:"공통점"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#공통점","aria-hidden":"true"}},[t._v("#")]),t._v(" 공통점")]),t._v(" "),e("p",[t._v("사용자에게 빠르게 서비스를 전달하기 위해 데이터를 저장해서 사용한다.")]),t._v(" "),e("h3",{attrs:{id:"차이점"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#차이점","aria-hidden":"true"}},[t._v("#")]),t._v(" 차이점")]),t._v(" "),e("ul",[e("li",[t._v("Cookie\n"),e("ul",[e("li",[t._v("클라이언트에 저장되는 키와 값이 들어있는 작은 데이터 파일 (하나당 4KB 이하)")]),t._v(" "),e("li",[t._v("이름, 값, 만료날짜 (쿠키의 저장시간), 경로정보 등이 포함되어 있으며 반드시 자료형은 String 으로 구성된다.")]),t._v(" "),e("li",[t._v("사용자가 임의로 쿠키 데이터를 저장, 수정, 삭제할 수 있다.")]),t._v(" "),e("li",[t._v("사용자가 브라우저 설정으로 쿠키의 사용유무를 설정할 수 있다.")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("HTTP 전송시에 요청 헤더에 쿠키 값이 들어 있어 쿠키의 자료량 (데이터 사이즈) 이 큰 경우"),e("br"),t._v(" "),e("em",[e("strong",[t._v("오버헤드로 인한 웹서버 에러가 발생")])]),t._v(" 할 수 있다.")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Session")]),t._v(" "),e("ul",[e("li",[t._v("서버에서 사용하는 클라이언트 인증 정보이다.")]),t._v(" "),e("li",[t._v("서버는 접속 클라이언트 별로 세션을 생성해서 세션의 해당하는 쿠키 (Session ID) 를 클라이언트에게 생성하게 하고 이 클라이언트는 서버에 접속할 때마다 해당 쿠키의 값 (Session ID) 을 서버에 전송하여 세션을 유지하게 한다.")]),t._v(" "),e("li",[t._v("브라우저의 설정에 관계없이 동작하며, 세선 졍보로 Java 객체를 저장할 수 있다.")])])]),t._v(" "),e("li",[e("p",[t._v("Cache")]),t._v(" "),e("ul",[e("li",[t._v("정적 자원들을 안정적으로 서비스하기 위해 데이터를 미리 저장해두고 제공하는 방식")]),t._v(" "),e("li",[t._v("프록시 (Proxy) 서버에서 제공")])])])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://blog.kurien.co.kr/544",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://blog.kurien.co.kr/544"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"http://brownbears.tistory.com/34",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://brownbears.tistory.com/34"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"http://asfirstalways.tistory.com/68",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://asfirstalways.tistory.com/68"),e("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=a.exports}}]);