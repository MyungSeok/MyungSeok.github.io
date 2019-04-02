(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{428:function(e,t,r){"use strict";r.r(t);var i=r(1),n=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"solid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#solid","aria-hidden":"true"}},[e._v("#")]),e._v(" Solid")]),e._v(" "),r("p",[e._v("객체지향 4대 특성인 캡슐화, 상속, 추상화, 다형성 등을 이용하여 객체지향 프로그래밍 셜계를 도와주는 원칙들이 있다."),r("br"),e._v("\n이를 SOLID 원칙들이라 하며 자기 자신의 클래스의 응집도를 높이고, 타 클래스의 결합도를 낮추는 "),r("em",[r("strong",[e._v("High-Cohesion - Loose Coupling")])]),e._v(" 원칙을 객체 지향관점에서 도입한것이다.")]),e._v(" "),r("p",[r("em",[r("strong",[e._v("SOLID")])]),e._v(" 5대 원칙 (객체 지향 설계 5원칙)")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/book/03.-back-end/01.-java/01.-general/solid/srp.html"}},[e._v("SRP (Single Reponsibility Principle : 단일 책임의 원칙)")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/book/03.-back-end/01.-java/01.-general/solid/ocp.html"}},[e._v("OCP (Open Closed Principle : 개방 폐쇄의 원칙)")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/book/03.-back-end/01.-java/01.-general/solid/lsp.html"}},[e._v("LSP (Liskov Substitution Principle : 리스코프 치환의 원칙)")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/book/03.-back-end/01.-java/01.-general/solid/isp.html"}},[e._v("ISP (Interface Segregation Principle : 인터페이스 분리의 원칙)")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/book/03.-back-end/01.-java/01.-general/solid/dip.html"}},[e._v("DIP (Dependency Inversion Principle : 의존 역전의 원칙)")])],1)]),e._v(" "),r("h2",{attrs:{id:"srp-single-reponsibility-principle-단일-책임의-원칙"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#srp-single-reponsibility-principle-단일-책임의-원칙","aria-hidden":"true"}},[e._v("#")]),e._v(" SRP (Single Reponsibility Principle : 단일 책임의 원칙)")]),e._v(" "),r("p",[e._v("작성된 "),r("em",[r("strong",[e._v("클래스는 하나의 기능만 가지며")])]),e._v(" 클래스가 제공하는 모든 서비스는 그 "),r("em",[r("strong",[e._v("하나의 책임을 수행하는데 집중")])]),e._v(" 되어야 한다는것")]),e._v(" "),r("blockquote",[r("p",[e._v("리팩토링 (Refactoring) 을 통하여 해당 책임을 최상의 상태로 분배")])]),e._v(" "),r("h2",{attrs:{id:"ocp-open-closed-principle-개방-폐쇄-원칙"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ocp-open-closed-principle-개방-폐쇄-원칙","aria-hidden":"true"}},[e._v("#")]),e._v(" OCP (Open Closed Principle : 개방 폐쇄 원칙)")]),e._v(" "),r("p",[e._v("소프트웨어의 구성요소 (컴포넌트, 클래스, 모듈, 함수) 는 확장에는 열려 있고, 변경에는 닫혀 있어야 한다는 의미이다."),r("br"),e._v("\n기존의 구성요소는 수정이 일어나지 말아야 하며, 기존의 구소요소를 쉽게 확장하여 재 사용 가능해야 한다는 뜻이다.")]),e._v(" "),r("blockquote",[r("p",[e._v("확장 될것과 불변의 속성을 엄격히 구분한다.\n두 모듈이 만나는 지점에 인터페이스를 정의한다.\n구현에 의존하기보다 정의한 인터페이스에 의존하도록 코드를 작성한다.")])]),e._v(" "),r("h2",{attrs:{id:"lsp-liskov-substitution-principle-리스코프-치환-원칙"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lsp-liskov-substitution-principle-리스코프-치환-원칙","aria-hidden":"true"}},[e._v("#")]),e._v(" LSP (Liskov Substitution Principle : 리스코프 치환 원칙)")]),e._v(" "),r("ul",[r("li",[e._v("파생 클래스는 부모타입과 호환이 되어야 한다.")]),e._v(" "),r("li",[e._v("서브타입은 언제나 기반 타입과 호환될 수 있어야 한다.")]),e._v(" "),r("li",[e._v("하위 클래스가 상위 클래스의 역할을 대신할 때 논리적으로 맞아 떨어져야 한다.")])]),e._v(" "),r("h2",{attrs:{id:"isp-interface-segregation-principle-인터페이스-분리-원칙"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#isp-interface-segregation-principle-인터페이스-분리-원칙","aria-hidden":"true"}},[e._v("#")]),e._v(" ISP (Interface Segregation Principle : 인터페이스 분리 원칙)")]),e._v(" "),r("p",[e._v("최소한의 의미에 맞는 인터페이스만 구현해야 한다.")]),e._v(" "),r("blockquote",[r("p",[e._v("클래스 인터페이스를 통한 분리"),r("br"),e._v("\n객체 인터페이스를 통한 분리")])]),e._v(" "),r("h2",{attrs:{id:"dip-dependency-inversion-principle-의존-역전-원칙"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dip-dependency-inversion-principle-의존-역전-원칙","aria-hidden":"true"}},[e._v("#")]),e._v(" DIP (Dependency Inversion Principle : 의존 역전 원칙)")]),e._v(" "),r("p",[e._v("하위 레벨모듈의 변경이 상위 레벨 모듈의 변경을 요구하는 역전현상")]),e._v(" "),r("blockquote",[r("h3",{attrs:{id:"참고자료"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#참고자료","aria-hidden":"true"}},[e._v("#")]),e._v(" 참고자료")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.nextree.co.kr/p6960/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.nextree.co.kr/p6960/"),r("OutboundLink")],1),r("br"),e._v(" "),r("a",{attrs:{href:"http://limkydev.tistory.com/77",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://limkydev.tistory.com/77"),r("OutboundLink")],1),r("br"),e._v(" "),r("a",{attrs:{href:"http://choipattern.blogspot.com/2013/08/solid.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://choipattern.blogspot.com/2013/08/solid.html"),r("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=n.exports}}]);