(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{380:function(a,t,s){"use strict";s.r(t);var e=s(1),n=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"thread"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thread","aria-hidden":"true"}},[a._v("#")]),a._v(" Thread")]),a._v(" "),s("h2",{attrs:{id:"process-와-thread"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-와-thread","aria-hidden":"true"}},[a._v("#")]),a._v(" Process 와 Thread")]),a._v(" "),s("p",[a._v("프로세스와 스레드는 서로 밀접한 관계에 있으나 서로 다른 개체이다.")]),a._v(" "),s("ul",[s("li",[a._v("Process\n"),s("ul",[s("li",[a._v("실행중인 프로세스 객체")]),a._v(" "),s("li",[s("em",[s("strong",[a._v("CPU 시간이나 메모리 등의 시스템 자원이 할당되는 독립적인 개체")])])]),a._v(" "),s("li",[a._v("각 프로세스는 별도의 주소 공간에서 실행 되며, "),s("em",[s("strong",[a._v("한 프로세스는 다른 프로세스의 변수나 자료구조에 접근할 수 없음")])])]),a._v(" "),s("li",[a._v("같은 메모리를 읽고 쓰는 프로세스는 생성 가능")]),a._v(" "),s("li",[a._v("프로세스간의 통신은 Pipe, Socket, File 등으로 통신한다.")])])]),a._v(" "),s("li",[a._v("Thread\n"),s("ul",[s("li",[a._v("프로세스가 할당받은 자원을 이용하는 실행의 단위")]),a._v(" "),s("li",[a._v("프로세스와 같은 공간의 Stack 공간을 사용하며 여러 Thread 는 그 상태의 일부를 공유한다.")])])])]),a._v(" "),s("blockquote",[s("p",[s("em",[s("strong",[a._v("Multi Thread")])]),a._v(" 환경의 작업시에는 Therad 간의 자원 공유의 "),s("em",[s("strong",[a._v("동기화 문제")])]),a._v(" 에 신경을 써야 한다.")])]),a._v(" "),s("h2",{attrs:{id:"thread-구조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thread-구조","aria-hidden":"true"}},[a._v("#")]),a._v(" Thread 구조")]),a._v(" "),s("p",[a._v("@TODO")]),a._v(" "),s("h3",{attrs:{id:"thread-생명주기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thread-생명주기","aria-hidden":"true"}},[a._v("#")]),a._v(" Thread 생명주기")]),a._v(" "),s("p",[a._v("@TODO")]),a._v(" "),s("h3",{attrs:{id:"thread-생성방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thread-생성방법","aria-hidden":"true"}},[a._v("#")]),a._v(" Thread 생성방법")]),a._v(" "),s("p",[a._v("아래와 같이 크게 3가지 방법이 있다.")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("Thread")]),a._v(" 클래스를 확장 한다.")]),a._v(" "),s("li",[s("code",[a._v("Runnable")]),a._v(" 인터페이스를 구현")]),a._v(" "),s("li",[a._v("Thread Pool 을 생성하기 위해, 어플리케이션에서 "),s("code",[a._v("Executor")]),a._v(" 프레임워크를 사용한다.")])]),a._v(" "),s("blockquote",[s("p",[a._v("'Runnable' 인터페이스는 상속 객체를 필요로 하지 않기 때문에 인터페이스로 적절하다.")])]),a._v(" "),s("p",[a._v("이러한 방법들은 대부분 멀티스레드를 만들어 작업을 수행하는 과정으로 멀티스레드 영역에서 자세한 방법들을 소개한다.")]),a._v(" "),s("h3",{attrs:{id:"thread-상태"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thread-상태","aria-hidden":"true"}},[a._v("#")]),a._v(" Thread 상태")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("NEW")]),a._v(" : Thread 가 실행 준비가 되었습니다.")]),a._v(" "),s("li",[s("code",[a._v("RUNNABLE")]),a._v(" : JVM (Java Virtual Machine) 이 Thread 코드를 수행중입니다.")]),a._v(" "),s("li",[s("code",[a._v("BLOCKED")]),a._v(" : Thread 가 차단되어 있는 상태 입니다.")]),a._v(" "),s("li",[s("code",[a._v("WAITING")]),a._v(" : Thread 다른 Thread 의 작업이 수행되기를 기다립니다.")]),a._v(" "),s("li",[s("code",[a._v("TIMED_WAITING")]),a._v(" : Thread 가 다른 Thread 의 지정된 대기시간의 특정 작업을 수행하기까지 기다립니다.")]),a._v(" "),s("li",[s("code",[a._v("TERMIATED")]),a._v(" : Thread 의 실행을 완료했습니다.")])]),a._v(" "),s("h2",{attrs:{id:"multi-thread"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-thread","aria-hidden":"true"}},[a._v("#")]),a._v(" Multi Thread")]),a._v(" "),s("p",[a._v("Java 에서는 Multi Thread 환경을 만들어 사용하는 방법은 대표적으로 3가지 방법을 많이 사용한다.")]),a._v(" "),s("h3",{attrs:{id:"thread-class-를-상속받아-사용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thread-class-를-상속받아-사용","aria-hidden":"true"}},[a._v("#")]),a._v(" Thread Class 를 상속받아 사용")]),a._v(" "),s("p",[a._v("Thread Class 를 서브클래싱(subclassing) 하고 "),s("code",[a._v("run")]),a._v(" Method 를 "),s("code",[a._v("Override")]),a._v(" 한다.")]),a._v(" "),s("h4",{attrs:{id:"구현-순서"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#구현-순서","aria-hidden":"true"}},[a._v("#")]),a._v(" 구현 순서")]),a._v(" "),s("ol",[s("li",[a._v("Thread Class 를 상속 받아 내가 시킬 일을 해줄 Class 를 하나 만든다.")]),a._v(" "),s("li",[a._v("위에서 만든 Class 에 "),s("code",[a._v("run")]),a._v(" Method 안에 시킬 일을 정의해 준다.")]),a._v(" "),s("li",[a._v("메인 Thread 에서 위에서 만는 Class 의 "),s("code",[a._v("start")]),a._v(" Method 를 호출한다.")])]),a._v(" "),s("blockquote",[s("p",[a._v("반드시 "),s("code",[a._v("start")]),a._v(" 메소드로 실행을 해야 한다."),s("br"),a._v(" "),s("code",[a._v("run")]),a._v(" 메소드를 실행하면 메인 Thread 에서 돌아가므로 의미가 없다.")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AddThread")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Add Sum is %d\\r\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AddThread")]),a._v(" at "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AddThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"runnable-인터페이스를-구현하여-사용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runnable-인터페이스를-구현하여-사용","aria-hidden":"true"}},[a._v("#")]),a._v(" Runnable 인터페이스를 구현하여 사용")]),a._v(" "),s("p",[s("code",[a._v("Runnable")]),a._v(" 인터페이스를 구현하고 "),s("code",[a._v("Runnable")]),a._v(" 객체를 Thread 생성자로 전달한다.")]),a._v(" "),s("h4",{attrs:{id:"구현순서"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#구현순서","aria-hidden":"true"}},[a._v("#")]),a._v(" 구현순서")]),a._v(" "),s("ol",[s("li",[a._v("우선 "),s("code",[a._v("Runnable")]),a._v(" Interface 를 구현할 Class 를 하나 생성한다.")]),a._v(" "),s("li",[a._v("위에서 만든 Class 의 "),s("code",[a._v("run")]),a._v(" Method 에 시킬 일을 정의한다.")]),a._v(" "),s("li",[a._v("해당 Class 를 생성하고 Thread 를 생성할 때 인자로 넣어서 생성한다.")]),a._v(" "),s("li",[a._v("메인 Thread에서 위에서 만든 Class 의 "),s("code",[a._v("start")]),a._v(" Method 를 호출한다.")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AddThreadRunnable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Runnable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Add Sum is Runnable %d\\r\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Runnable")]),a._v(" ar "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AddThreadRunnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" atr "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\natr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Thread 가 할 일을 "),s("code",[a._v("run")]),a._v(" Method 안에 넣으면 된다.")]),a._v(" "),s("p",[a._v("Single Thread 프로그램은 "),s("code",[a._v("main")]),a._v(" Method 가 반환되면 종료되고"),s("br"),a._v("\nMulti Thread 프로그램은 "),s("code",[a._v("run")]),a._v(" Method 의 실행이 끝나면 종료된다.")]),a._v(" "),s("h3",{attrs:{id:"future-callable-executor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#future-callable-executor","aria-hidden":"true"}},[a._v("#")]),a._v(" Future, Callable, Executor")]),a._v(" "),s("p",[a._v("Java 5 이상에서 지원하는 방식으로 Callback Pattern 으로 쉽게 사용 가능하도록 하는 접근 방법이다.")]),a._v(" "),s("p",[a._v("다양한 종류의 Thread 를 생성한 다음, 여러 Thread 로 부터 원하는 순서대로 값을 얻어올 수 있다.")]),a._v(" "),s("h4",{attrs:{id:"구현-순서-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#구현-순서-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 구현 순서")]),a._v(" "),s("ol",[s("li",[a._v("작업 대상의 "),s("code",[a._v("Callable")]),a._v(" 객체를 생성한 후 "),s("code",[a._v("ExecutorService")]),a._v(" 에 등록한다.")]),a._v(" "),s("li",[a._v("작업의 결과는 "),s("code",[a._v("Future")]),a._v(" 객체가 반환 받는다.")]),a._v(" "),s("li",[s("code",[a._v("Future")]),a._v(" 객체 사용 시 이미 결과가 준비 되어 있는 경우에는 즉시 사용하며, 그렇지 않는 경우에는 Polling Thread 는 준비가 될 때까지 Block 상태가 된다.")])]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("참고자료")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://post.naver.com/viewer/postView.nhn?volumeNo=7852076&memberNo=30800755",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://post.naver.com/viewer/postView.nhn?volumeNo=7852076&memberNo=30800755"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"synchronizred"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synchronizred","aria-hidden":"true"}},[a._v("#")]),a._v(" Synchronizred")]),a._v(" "),s("p",[a._v("Java 에서 동기화 영역은 "),s("code",[a._v("synchronizred")]),a._v(" 키워드로 표시된다.")]),a._v(" "),s("p",[a._v("동기화는 객체에 대한 동기화로 이루어지는데 여러 Thread 가 한 개의 자원을 사용하고자 할 때 해당 Thread 만 제외하고 나머지 Thread 의 접근을 막는 방법이다."),s("br"),a._v("\n블록에 접근을 시도하는 "),s("em",[s("strong",[a._v("다른 Thread 들은 블록 안의 Thread 가 실행을 마치고 블록을 벗어날때까지 차단 (blocked) 상태")])]),a._v(" 가 된다.")]),a._v(" "),s("p",[a._v("대표적으로 "),s("em",[s("strong",[a._v("Log Files")])]),a._v(" 과 같이 서로 다른 프로세스에 접근 가능한 리소스를 대상으로 사용할때 효과적이다.")]),a._v(" "),s("blockquote",[s("p",[a._v("이러한 방식을 "),s("em",[s("strong",[a._v("배타적 접근")])]),a._v(" 이라고 한다.")])]),a._v(" "),s("h3",{attrs:{id:"장점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#장점","aria-hidden":"true"}},[a._v("#")]),a._v(" 장점")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("thread-safe")]),a._v(" 하게 사용이 가능하여 사용자의 의도대로 프로그램의 흐름 제어가 가능하다.")])]),a._v(" "),s("h3",{attrs:{id:"단점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단점","aria-hidden":"true"}},[a._v("#")]),a._v(" 단점")]),a._v(" "),s("ul",[s("li",[a._v("프로그램의 성능저하를 일으킬 수 있다.\n"),s("ul",[s("li",[a._v("Java 내부적으로 메서드나 변수에 동기화를 하기 위해 "),s("code",[a._v("block")]),a._v(" & "),s("code",[a._v("unblock")]),a._v(" 처리를 하게되는데 이런 처리들을 통하여 소비되는 리소스가 프로그램 전반적인 성능에 영향을 준다.")])])])]),a._v(" "),s("p",[s("code",[a._v("synchronized")]),a._v(" 키워드는 다음 네가지 유형의 블록이 쓰인다.")]),a._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax","aria-hidden":"true"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),s("h4",{attrs:{id:"인스턴스-메소드에-동기화-적용-instance-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#인스턴스-메소드에-동기화-적용-instance-method","aria-hidden":"true"}},[a._v("#")]),a._v(" 인스턴스 메소드에 동기화 적용 (Instance Method)")]),a._v(" "),s("p",[s("em",[s("strong",[a._v("특정 부분에 대해서만 동기화를 동기화를 할 필요가 있을 경우")])]),a._v(" 아래 메소드와 같이"),s("br"),a._v("\n선언문에 있는 "),s("code",[a._v("synchronized")]),a._v(" 키워드를 통하여 동기화를 한다.")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Instance Method 의 동기화는 "),s("em",[s("strong",[a._v("이 Method 를 가진 Instance (객체) 를 기준")])]),a._v(" 으로 한다."),s("br"),a._v("\n하나의 Class 가 동기화된 Instance Method 를 가지면, 동기화는 이 Class 의 하나의 Instance 를 기준으로 이루어지며 한 시점에 오직 하나의 Thread 만이 동기화된 Instance Method 를 실행할 수 있다.")]),a._v(" "),s("blockquote",[s("p",[a._v("하나의 Instance 하나의 Thread 이다.")])]),a._v(" "),s("h4",{attrs:{id:"정적-메소드에-동기화-적용-static-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정적-메소드에-동기화-적용-static-method","aria-hidden":"true"}},[a._v("#")]),a._v(" 정적 메소드에 동기화 적용 (Static Method)")]),a._v(" "),s("p",[a._v("인스턴스 메소드의 사용법과 같이 선언문에 있는 "),s("code",[a._v("synchronized")]),a._v(" 키워드를 통하여 동기화를 한다.")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  count "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Static Method 의 동기화는 "),s("em",[s("strong",[a._v("이 Method 를 가진 Class (객체) 를 기준")])]),a._v(" 으로 한다."),s("br"),a._v("\nJVM 안에 Class 객체는 Class 당 하나만 존재할 수 있으므로, 같은 Class 에 대해서는 오직 한 Thread 에만 동기화된 Static Method 를 실행할 수 있다.")]),a._v(" "),s("blockquote",[s("p",[a._v("하나의 Class 당 하나의 Thread 이다.")])]),a._v(" "),s("h4",{attrs:{id:"인스턴스-메소드-안에-동기화-적용-instance-method-codeblock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#인스턴스-메소드-안에-동기화-적용-instance-method-codeblock","aria-hidden":"true"}},[a._v("#")]),a._v(" 인스턴스 메소드 안에 동기화 적용 (Instance Method Codeblock)")]),a._v(" "),s("p",[a._v("동기화를 메소드 전체에 적용하는것이 아닌 메소드의 특정 부분에 적용하는것이 효율적일 때가 있다.")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"정적-메소드에-안에-동기화-적용-static-method-codeblock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정적-메소드에-안에-동기화-적용-static-method-codeblock","aria-hidden":"true"}},[a._v("#")]),a._v(" 정적 메소드에 안에 동기화 적용 (Static Method Codeblock)")]),a._v(" "),s("p",[s("em",[s("strong",[a._v("Instance Method Codeblock")])]),a._v(" 과 사용법은 동일하다.")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("참고자료")]),a._v(" "),s("p",[s("a",{attrs:{href:"http://parkcheolu.tistory.com/15",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://parkcheolu.tistory.com/15"),s("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=n.exports}}]);