(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{265:function(e,t,a){"use strict";a.r(t);var r=a(1),v=function(e){e.options.__data__block__={flowchart_64a56f6e:"stage1=>operation: Class Loader Cache\nstage2=>operation: Parent Class Loader\nstage3=>operation: Self\n\nstage1->stage2->stage3"}},_=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"java-vertual-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-vertual-machine","aria-hidden":"true"}},[e._v("#")]),e._v(" Java Vertual Machine")]),e._v(" "),a("p",[e._v("프로그램을 실행하기 위해 물리적 머신 (컴퓨터) 과 유사하게 만든 머신을 소프트웨어로 구현한 것으로"),a("br"),e._v("\n실제로 "),a("em",[a("strong",[e._v("Java Byte Code 를 실행할 수 있는 프로세스 가상 머신")])]),e._v(" 이다.")]),e._v(" "),a("p",[e._v("OS 별로 종류가 다른데 MS Window & Linux 등의 환경에서는 "),a("code",[e._v("HotSpot VM")]),e._v(", IBM AIX 의 경우에는 "),a("code",[e._v("IBM J9")]),e._v(" 이 사용된다.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/A005.png",alt:'"JVM 아키텍처"'}})]),e._v(" "),a("h2",{attrs:{id:"특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#특징","aria-hidden":"true"}},[e._v("#")]),e._v(" 특징")]),e._v(" "),a("ul",[a("li",[e._v("자바의 가상머신으로 OS 에 종속적이지 않아 독립적으로 운영된다.")]),e._v(" "),a("li",[e._v("GC (Garbage Collection) 은 사용자에 의해 명시되지 않으며 자동으로 메모리 관리가 된다.")])]),e._v(" "),a("p",[e._v("프로그램이 실행되면 JVM 은 "),a("em",[a("strong",[e._v("OS 로부터 프로그램이 필요로하는 메모리를 할당")])]),e._v(" 받고, JVM 은 이 메모리를 "),a("em",[a("strong",[e._v("용도에 따라 여러 영역으로 나누어 관리")])]),e._v(" 한다.")]),e._v(" "),a("h2",{attrs:{id:"jvm-외부"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm-외부","aria-hidden":"true"}},[e._v("#")]),e._v(" JVM 외부")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/A006.png",alt:'"JVM 구조"'}})]),e._v(" "),a("p",[e._v("Java 로 작성한 코드는 "),a("em",[a("strong",[e._v("Class Loader 가 컴파일된 Java Byte Code 를 Runtime Data Areas 에 로드하고 Excution Engine 이 Java Byte Code 를 실행")])])]),e._v(" "),a("h2",{attrs:{id:"compile-running"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-running","aria-hidden":"true"}},[e._v("#")]),e._v(" Compile Running")]),e._v(" "),a("ol",[a("li",[e._v("소스코드를 작성")]),e._v(" "),a("li",[e._v("Compiler 는 JAVA 소스코드를 이용하여 클래스 파일을 생성")]),e._v(" "),a("li",[e._v("컴파일된 파일은 JVM (Java Virtual Machine) 이 인식 가능한 바이너리 파일로 변환")]),e._v(" "),a("li",[e._v("JVM 은 클래스 파일의 바이너리 코드를 해석하여 프로그램을 실행")]),e._v(" "),a("li",[e._v("수행 결과가 컴퓨터에 반영")])]),e._v(" "),a("h2",{attrs:{id:"class-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-loader","aria-hidden":"true"}},[e._v("#")]),e._v(" Class Loader")]),e._v(" "),a("p",[e._v("자바는 "),a("em",[a("strong",[e._v("Runtime 시에 Class 를 로드하고 링크하는 Dynamic Loading 특징")])]),e._v(" 이 있다.")]),e._v(" "),a("p",[e._v("이 Dynamic Loading 특징을 담당하는 부분이 "),a("em",[a("strong",[e._v("Class Loader")])]),e._v(" 이다.")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Class Loader")])]),e._v(" 는 로드된 클래스를 보관하는 Namespace 를 갖는데,"),a("br"),e._v("\n이미 로드된 클래스 인지 확인하기 위하여 Namespace 에 보관된 "),a("code",[e._v("FQCN")]),e._v(" 을 기준으로 클래스를 찾는다.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("FQCN (Fully Qualified Class Name) ?")]),e._v(" "),a("p",[e._v("클래스가 속한 패키지명을 모두 포함한 이름을 말한다."),a("br"),e._v("\n보통 "),a("code",[e._v("java.lang.String s = new java.lang.String();")]),e._v(" 과 같이 Alias Name (축약) 형이 아닌 패키지를 모두 포함한 경로"),a("br"),e._v("\nClass Loader 에서는 비록 FQCN 이 같더라도 Namespace 가 다르면 다른 클래스로 간주")])]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Class Loader")])]),e._v(" 의 대표적인 역활은 사용자가 작성한 Java Byte Code 를 JVM 메모리상에 올려주는 역활을 한다.")]),e._v(" "),a("h3",{attrs:{id:"특징-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#특징-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 특징")]),e._v(" "),a("p",[e._v("클래스 로더는 다음과 같은 특징이 있다.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/A007.png",alt:'"Class Loader 구조"'}})]),e._v(" "),a("ul",[a("li",[e._v("Hierarchical (계층 구조)\n"),a("ul",[a("li",[e._v("클래스 로더끼리 부모 <-> 자식 관계를 이루어 계층 구조로 구성된다.")]),e._v(" "),a("li",[e._v("최 상의 클래스 로더는 부트스트랩 (Bootstrap Class Loader) 클래스 로더이다.")])])]),e._v(" "),a("li",[e._v("Delegate Load Request (위임 모델)\n"),a("ul",[a("li",[e._v("계층 구조를 기반으로 클래스 로더끼리 로드를 위임하는 구조로 동작 한다.")]),e._v(" "),a("li",[e._v("클래스를 로드할 때 먼저 상위 클래스로더를 확인하여 존재하면 해당 클래스를 사용하고 없으면 요청 받은 클래스 로더가 클래스를 로드한다.")])])]),e._v(" "),a("li",[e._v("Have Visibility Constraint (가시성)\n"),a("ul",[a("li",[e._v("하위 (자식) 클래스 로더는 상위 (부모) 클래스 로더를 찾을수 있지만 그 반대의 경우 (부모 -> 자식) 은 있을 수 없다.")])])]),e._v(" "),a("li",[e._v("Cannot unload Classes (언로드 불가)\n"),a("ul",[a("li",[e._v("클래스 로더는 Unload 기능을 하지 않는다. (Unload 는 GC 자동으로 함)")])])])]),e._v(" "),a("h3",{attrs:{id:"요청-처리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#요청-처리","aria-hidden":"true"}},[e._v("#")]),e._v(" 요청 처리")]),e._v(" "),a("p",[e._v("Class Loader 가 Class Load 를 요청 받으면, 아래 순서대로 검색을 한다.")]),e._v(" "),a("FlowChart",{attrs:{id:"flowchart_64a56f6e",code:e.$dataBlock.flowchart_64a56f6e,preset:"vue"}}),a("p",[a("img",{attrs:{src:"/img/A008.png",alt:'"Class Loader 요청 처리"'}})]),e._v(" "),a("p",[e._v("Bootstrap Class Loader 까지 확인해도 없으면 요청 받은 클래스 로더가 "),a("em",[a("strong",[e._v("파일 시스템에서 해당 클래스를 찾음")])])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("참고자료")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://m.blog.naver.com/PostView.nhn?blogId=choigohot&logNo=40192701035&proxyReferer=https%3A%2F%2Fwww.google.com%2F",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://m.blog.naver.com/PostView.nhn?blogId=choigohot&logNo=40192701035&proxyReferer=https%3A%2F%2Fwww.google.com%2F"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"runtime-data-areas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runtime-data-areas","aria-hidden":"true"}},[e._v("#")]),e._v(" Runtime Data Areas")]),e._v(" "),a("p",[a("code",[e._v("Class Loader")]),e._v(" 에서 로드해준 데이터를 보관하여 애플리케이션을 수행한다."),a("br"),e._v("\n이 수행 작업시에 사용되는 저장 및 참조로 하는 메모리 영역이다.")]),e._v(" "),a("h3",{attrs:{id:"method-area"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#method-area","aria-hidden":"true"}},[e._v("#")]),e._v(" Method Area")]),e._v(" "),a("ul",[a("li",[e._v("모든 Thread 가 공유하는 메모리 영역\n"),a("ul",[a("li",[a("code",[e._v("class")]),e._v(" "),a("code",[e._v("interface")]),e._v(" "),a("code",[e._v("method")]),e._v(" "),a("code",[e._v("field")]),e._v(" "),a("code",[e._v("static valuable")]),e._v(" "),a("code",[e._v("byte code")]),e._v(" 등을 보관")])])]),e._v(" "),a("li",[e._v("임포트된 클래스가 로드되는 영역")])]),e._v(" "),a("h3",{attrs:{id:"heap-area"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heap-area","aria-hidden":"true"}},[e._v("#")]),e._v(" Heap Area")]),e._v(" "),a("ul",[a("li",[a("em",[a("strong",[e._v("프로그램 상에서 데이터를 저장하기 위해 동적으로 할당하여 사용")])]),e._v(" 하는 메모리 영역\n"),a("ul",[a("li",[e._v("실제로 Runtime 시 동적으로 할당하여 사용하는 영역")])])]),e._v(" "),a("li",[e._v("자바 프로그램은 "),a("code",[e._v("new")]),e._v(" 연산자를 사용하여 객체를 동적으로 생성\n"),a("ul",[a("li",[a("em",[a("strong",[e._v("Method Area")])]),e._v(" 에 로드된 클래스만 생성 가능")]),e._v(" "),a("li",[a("code",[e._v("class")]),e._v(" 를 이용하여 "),a("code",[e._v("instance")]),e._v(" 를 생성하면 해당 영역에 저장하여 사용")])])]),e._v(" "),a("li",[a("em",[a("strong",[e._v("여러 Thread 가 이 영역을 공유")])]),e._v(" 한다.")]),e._v(" "),a("li",[e._v("이 영역은 "),a("em",[a("strong",[e._v("GC (Garbage Collector) 를 통해서만 메모리 해제가 가능")])]),e._v(" 하다. (GC 의 실제적인 대상)")]),e._v(" "),a("li",[e._v("Method 영역이 클래스 정보를 참고하여 인스턴스를 생성하는 곳 이다.")])]),e._v(" "),a("h3",{attrs:{id:"stack-area"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stack-area","aria-hidden":"true"}},[e._v("#")]),e._v(" Stack Area")]),e._v(" "),a("ul",[a("li",[e._v("Method 가 호출될 때마다 "),a("code",[e._v("Stack Frame")]),e._v(" 이라는 데이터 영역이 생성하여 구성\n"),a("ul",[a("li",[e._v("Method 에 사용되는 Thread 의 수행 정보를 "),a("code",[e._v("Stack Frame")]),e._v(" 을 통해서 저장")]),e._v(" "),a("li",[e._v("Thread 가 시작될때 생성하며, Thread 별로 생성되기 때문에 다른 Thread 는 접근 할 수 없다.")])])]),e._v(" "),a("li",[e._v("Method 의 정보, Local Valuable, Argument 등의 "),a("em",[a("strong",[e._v("연산 중 발생되는 임시 데이터 등이 저장")])]),e._v(" 된다.")]),e._v(" "),a("li",[e._v("Method 수행 되는 동안만 사용되며 메소드의 수행이 끝나면 필요 없게 된다.")]),e._v(" "),a("li",[e._v("Method 가 "),a("em",[a("strong",[e._v("호출될 때는 필요로하는 변수를 Stack 에 저장")])]),e._v(" 하고, "),a("em",[a("strong",[e._v("Method 실행이 끝나면 Stack 을 반환")])]),e._v(" 한다.")]),e._v(" "),a("li",[a("em",[a("strong",[e._v("실행중인 Thread 에 따라 각각 구성")])]),e._v(" 하게 된다.")])]),e._v(" "),a("h3",{attrs:{id:"pc-register"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pc-register","aria-hidden":"true"}},[e._v("#")]),e._v(" PC Register")]),e._v(" "),a("ul",[a("li",[e._v("실행중인 각 Thread 는 별도의 PC Register 를 가지며, 명령이 실행되면 현재 실행중인 명령의 주소를 유지한다.")])]),e._v(" "),a("h3",{attrs:{id:"native-method-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#native-method-stack","aria-hidden":"true"}},[e._v("#")]),e._v(" Native Method Stack")]),e._v(" "),a("ul",[a("li",[e._v("JAVA 외의 언어로 작성된 네이티브 코드들을 위한 Stack\n"),a("ul",[a("li",[e._v("JNI (Java Native Interface) 를 통하여 호출되는 C/C++ 등의 코드를 수행하기 위한 Stack")])])]),e._v(" "),a("li",[e._v("애플리케이션에서 Native Method 를 호출하게 되면 내부에 "),a("code",[e._v("Stack Frame")]),e._v(" 을 생성하여 Push 한다.\n"),a("ul",[a("li",[e._v("JNI 를 이용하여 JVM 내부에 영향을 주지 않기 위함")]),e._v(" "),a("li",[e._v("Native Method Stack 을 실행할때는 JVM 을 거치지 않고 바로 수행한다.")])])])]),e._v(" "),a("h3",{attrs:{id:"thread-마다-하나씩-생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thread-마다-하나씩-생성","aria-hidden":"true"}},[e._v("#")]),e._v(" Thread 마다 하나씩 생성")]),e._v(" "),a("ul",[a("li",[e._v("PC Register")]),e._v(" "),a("li",[e._v("JVM Stack")]),e._v(" "),a("li",[e._v("Native Method Stack")])]),e._v(" "),a("h3",{attrs:{id:"thread-끼리-공유"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thread-끼리-공유","aria-hidden":"true"}},[e._v("#")]),e._v(" Thread 끼리 공유")]),e._v(" "),a("ul",[a("li",[e._v("Heap Area")]),e._v(" "),a("li",[e._v("Method Area")]),e._v(" "),a("li",[e._v("Runtime Constant Pool")])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("참고자료")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://limkydev.tistory.com/51",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://limkydev.tistory.com/51"),a("OutboundLink")],1),a("br"),e._v(" "),a("a",{attrs:{href:"http://postitforhooney.tistory.com/entry/JavaJVM-JVM-%EC%9D%B4%ED%95%B4%EB%A5%BC-%ED%86%B5%ED%95%9C-Java-%EC%9E%91%EB%8F%99%EC%9B%90%EB%A6%AC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://postitforhooney.tistory.com/entry/JavaJVM-JVM-이해를-통한-Java-작동원리-이해하기"),a("OutboundLink")],1),a("br"),e._v(" "),a("a",{attrs:{href:"https://m.blog.naver.com/PostView.nhn?blogId=choigohot&logNo=40192701035&proxyReferer=https%3A%2F%2Fwww.google.com%2F",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://m.blog.naver.com/PostView.nhn?blogId=choigohot&logNo=40192701035&proxyReferer=https%3A%2F%2Fwww.google.com%2F"),a("OutboundLink")],1),a("br"),e._v(" "),a("a",{attrs:{href:"https://medium.com/@lazysoul/jvm-%EC%9D%B4%EB%9E%80-c142b01571f2",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://medium.com/@lazysoul/jvm-이란-c142b01571f2"),a("OutboundLink")],1),a("br"),e._v(" "),a("a",{attrs:{href:"http://blog.jamesdbloom.com/JVMInternals.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://blog.jamesdbloom.com/JVMInternals.html"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"excution-engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#excution-engine","aria-hidden":"true"}},[e._v("#")]),e._v(" Excution Engine")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Class Loader")])]),e._v(" 를 통하여 JVM 메모리상에 배치되어 있는 바이트 코드를 "),a("em",[a("strong",[e._v("Excution Engine")])]),e._v(" 에 의해 실행된다.")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Excution Engine")])]),e._v(" 는 Java Byte Code 를 명령어 단위로 읽어서 실행한다. (CPU 가 기계어 & 명령어 를 하나씩 읽어서 실행하는 것 과 비슷하다 )")]),e._v(" "),a("p",[e._v("Java Byte Code 의 각 명령어는 1 Byte 의 "),a("code",[e._v("OpCode")]),e._v(" 와 추가 피 연산자로 이루어져 있으며, 실행 엔진은 하나의 "),a("code",[e._v("OpCode")]),e._v(" 를 가져와서 피 연산자와 함께 작업을 수행한 다음, "),a("code",[e._v("OpCode")]),e._v(" 를 수행하는 식으로 동작")]),e._v(" "),a("p",[e._v("Java Byte Code 는 기계어에 가깝기 보다는 비교적 인간이 보기 편한 행태로 기술한다.")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Excution Engine")])]),e._v(" 는 이와 같이 바이트 코드가 실제로 JVM 내부에서 기계가 실행할 수 있는 형태로 변경")]),e._v(" "),a("p",[e._v("최초의 JVM 은 "),a("code",[e._v("Interpreter")]),e._v(" 방식으로 수행되었다.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Interpreter (인터프리터)")]),e._v(" "),a("p",[a("code",[e._v("Byte Code")]),e._v(" 명령어를 하나씩 읽어서 해석한다."),a("br"),e._v("\n이로 인해 실행이 느리다는 단점을 가지고 있다.")])]),e._v(" "),a("p",[e._v("이를 개선하기 위해 "),a("code",[e._v("JIT Compiler")]),e._v(" 를 도입하여 개선을 한다.")]),e._v(" "),a("h3",{attrs:{id:"jit-just-in-time-compiler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jit-just-in-time-compiler","aria-hidden":"true"}},[e._v("#")]),e._v(" JIT (Just In Time) Compiler")]),e._v(" "),a("p",[a("code",[e._v("Interpreter")]),e._v(" 방식으로 실행하다 적절한(?) 시점에 "),a("code",[e._v("Byte Code")]),e._v(" 전체를 "),a("code",[e._v("Compile")]),e._v(" 하여 "),a("code",[e._v("Native Code")]),e._v(" 로 변경하며 이후에는 해당 메서드를 더 이상 Interpreting 하지 않고 "),a("code",[e._v("Native Code")]),e._v(" 로 직접 실행하는 방식")]),e._v(" "),a("p",[a("code",[e._v("Native Code")]),e._v(" 를 실행하는 것이 명령어 단위로 "),a("code",[e._v("Interpreting")]),e._v(" 하는것보다 빠르며, "),a("code",[e._v("Native Code")]),e._v(" 는 내부 캐시에 보관하기 때문에 한번 "),a("code",[e._v("Compile")]),e._v(" 한 코드는 계속 빠르게 수행")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/A050.png",alt:"JIT Compile"}})]),e._v(" "),a("p",[e._v("JIT Compile 과정은 "),a("code",[e._v("Byte Code")]),e._v(" 를 Interpreting 하는것보다 많은 비용이 발생하여, 만약 한번만 실행되는 코드라면 "),a("code",[e._v("Compile")]),e._v(" 하지 않고 Interpreting 하는것이 훨씬 유리하다.")]),e._v(" "),a("p",[e._v("내부적으로 해당 Method 가 얼마나 자주 수행되고 체크하여 일정 정도의 수준이 넘을때만 "),a("code",[e._v("Compile")]),e._v(" 수행")]),e._v(" "),a("h2",{attrs:{id:"finalize-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finalize-method","aria-hidden":"true"}},[e._v("#")]),e._v(" finalize Method")]),e._v(" "),a("p",[e._v("객체가 소멸될때 호출되는 메소드"),a("br"),e._v("\n일반적으로 GC 에서 객체 메모리를 해지할때 호출되므로 사용이 권장 되지 않는다.")])],1)},[],!1,null,null,null);"function"==typeof v&&v(_);t.default=_.exports}}]);