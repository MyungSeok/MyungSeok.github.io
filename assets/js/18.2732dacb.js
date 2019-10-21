(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{319:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),a("p",[t._v("인메모리 기반의 데이터 베이스")]),t._v(" "),a("h2",{attrs:{id:"설치하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설치하기","aria-hidden":"true"}},[t._v("#")]),t._v(" 설치하기")]),t._v(" "),a("h3",{attrs:{id:"_1-의존-라이브러리-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-의존-라이브러리-설치","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 의존 라이브러리 설치")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" build-essential tcl\n")])])]),a("h4",{attrs:{id:"필수-패키지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#필수-패키지","aria-hidden":"true"}},[t._v("#")]),t._v(" 필수 패키지")]),t._v(" "),a("ul",[a("li",[t._v("build-essential\n"),a("ul",[a("li",[t._v("C, C++ 컴파일 환경을 구성 가능하게 한다.")]),t._v(" "),a("li",[t._v("gcc, make 를 한번에 설치한다.")])])]),t._v(" "),a("li",[t._v("tcl\n"),a("ul",[a("li",[t._v("Tool Command Language")]),t._v(" "),a("li",[t._v("설치한 응용 프로그램을 확장하는 것을 돕는 프로그램 언어")])])])]),t._v(" "),a("h3",{attrs:{id:"_2-소스-다운로드-및-압축-해제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-소스-다운로드-및-압축-해제","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 소스 다운로드 및 압축 해제")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /tmp/src\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" /tmp/src\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -O http://download.redis.io/redis-stable.tar.gz\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvfz redis-stable.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" redsi-stable\n")])])]),a("h3",{attrs:{id:"_3-컴파일"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-컴파일","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 컴파일")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 빌드")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 생략 가능")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 명령어 설치")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-실행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-실행","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 실행")]),t._v(" "),a("h4",{attrs:{id:"systemctl-명령어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systemctl-명령어","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("systemctl")]),t._v(" 명령어")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start redis\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl status redis\n")])])]),a("h4",{attrs:{id:"systemctl-안될-때"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systemctl-안될-때","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("systemctl")]),t._v(" 안될 때")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 서버기동")]),t._v("\n$ redis-server\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Redis 접속 (새 터미널로)")]),t._v("\n$ redis-cli\n")])])]),a("h4",{attrs:{id:"접속-클라이언트-이용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#접속-클라이언트-이용","aria-hidden":"true"}},[t._v("#")]),t._v(" 접속 클라이언트 이용")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/luin/medis?fbclid=IwAR3o5CCwylxYkSQGbxoqkI35pqGl41fx9v6nBJLeKbnXoU7CvzSW9j_WvKU",target:"_blank",rel:"noopener noreferrer"}},[t._v("접속 클라이언트"),a("OutboundLink")],1),t._v(" 사용시 외부에서 접속 불가 할 수 있으니 "),a("code",[t._v("protected-mode")]),t._v(" 를 해제하고 사용하도록 한다.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ redis-cli\n\n127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" protected-mode no\nOK\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Issue")]),t._v(" "),a("ul",[a("li",[t._v("설치 이후에 redis 서버가 기동이 불가함")]),t._v(" "),a("li",[t._v("해당 소스파일 경로로 "),a("em",[a("strong",[t._v("redis-server.sh")])]),t._v(" 로 기동")]),t._v(" "),a("li",[t._v("이후 redis-cli 사용 가능함")])])]),t._v(" "),a("p",[t._v("추후 서비스로 등록하여 데몬으로 기동 가능하게 설정 해야 함")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hanee24.github.io/2018/01/05/how-to-install-redis-on-ubuntu-16-04/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hanee24.github.io/2018/01/05/how-to-install-redis-on-ubuntu-16-04/"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://zetawiki.com/wiki/%EC%9A%B0%EB%B6%84%ED%88%AC16_redis_%EC%84%A4%EC%B9%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zetawiki.com/wiki/우분투16_redis_설치"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"http://hyunalee.tistory.com/17",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://hyunalee.tistory.com/17"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=r.exports}}]);