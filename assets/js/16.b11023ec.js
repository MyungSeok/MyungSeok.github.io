(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{217:function(s,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" Redis")]),s._v(" "),a("p",[s._v("인메모리 기반의 데이터 베이스")]),s._v(" "),a("h2",{attrs:{id:"설치하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설치하기"}},[s._v("#")]),s._v(" 설치하기")]),s._v(" "),a("h3",{attrs:{id:"_1-의존-라이브러리-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-의존-라이브러리-설치"}},[s._v("#")]),s._v(" 1. 의존 라이브러리 설치")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" build-essential tcl\n")])])]),a("h4",{attrs:{id:"필수-패키지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#필수-패키지"}},[s._v("#")]),s._v(" 필수 패키지")]),s._v(" "),a("ul",[a("li",[s._v("build-essential\n"),a("ul",[a("li",[s._v("C, C++ 컴파일 환경을 구성 가능하게 한다.")]),s._v(" "),a("li",[s._v("gcc, make 를 한번에 설치한다.")])])]),s._v(" "),a("li",[s._v("tcl\n"),a("ul",[a("li",[s._v("Tool Command Language")]),s._v(" "),a("li",[s._v("설치한 응용 프로그램을 확장하는 것을 돕는 프로그램 언어")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-소스-다운로드-및-압축-해제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-소스-다운로드-및-압축-해제"}},[s._v("#")]),s._v(" 2. 소스 다운로드 및 압축 해제")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /tmp/src\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /tmp/src\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -O http://download.redis.io/redis-stable.tar.gz\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xvfz redis-stable.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redsi-stable\n")])])]),a("h3",{attrs:{id:"_3-컴파일"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-컴파일"}},[s._v("#")]),s._v(" 3. 컴파일")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 빌드")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 생략 가능")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 명령어 설치")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("h3",{attrs:{id:"_4-실행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-실행"}},[s._v("#")]),s._v(" 4. 실행")]),s._v(" "),a("h4",{attrs:{id:"systemctl-명령어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systemctl-명령어"}},[s._v("#")]),s._v(" "),a("code",[s._v("systemctl")]),s._v(" 명령어")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start redis\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status redis\n")])])]),a("h4",{attrs:{id:"systemctl-안될-때"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systemctl-안될-때"}},[s._v("#")]),s._v(" "),a("code",[s._v("systemctl")]),s._v(" 안될 때")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 서버기동")]),s._v("\n$ redis-server\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Redis 접속 (새 터미널로)")]),s._v("\n$ redis-cli\n")])])]),a("h4",{attrs:{id:"접속-클라이언트-이용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#접속-클라이언트-이용"}},[s._v("#")]),s._v(" 접속 클라이언트 이용")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/luin/medis?fbclid=IwAR3o5CCwylxYkSQGbxoqkI35pqGl41fx9v6nBJLeKbnXoU7CvzSW9j_WvKU",target:"_blank",rel:"noopener noreferrer"}},[s._v("접속 클라이언트"),a("OutboundLink")],1),s._v(" 사용시 외부에서 접속 불가 할 수 있으니 "),a("code",[s._v("protected-mode")]),s._v(" 를 해제하고 사용하도록 한다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ redis-cli\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" protected-mode no\nOK\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("Issue")]),s._v(" "),a("ul",[a("li",[s._v("설치 이후에 redis 서버가 기동이 불가함")]),s._v(" "),a("li",[s._v("해당 소스파일 경로로 "),a("em",[a("strong",[s._v("redis-server.sh")])]),s._v(" 로 기동")]),s._v(" "),a("li",[s._v("이후 redis-cli 사용 가능함")])])]),s._v(" "),a("p",[s._v("추후 서비스로 등록하여 데몬으로 기동 가능하게 설정 해야 함")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("참고자료")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://hanee24.github.io/2018/01/05/how-to-install-redis-on-ubuntu-16-04/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://hanee24.github.io/2018/01/05/how-to-install-redis-on-ubuntu-16-04/"),a("OutboundLink")],1),a("br"),s._v(" "),a("a",{attrs:{href:"https://zetawiki.com/wiki/%EC%9A%B0%EB%B6%84%ED%88%AC16_redis_%EC%84%A4%EC%B9%98",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://zetawiki.com/wiki/우분투16_redis_설치"),a("OutboundLink")],1),a("br"),s._v(" "),a("a",{attrs:{href:"http://hyunalee.tistory.com/17",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://hyunalee.tistory.com/17"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);