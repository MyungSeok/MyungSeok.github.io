(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{383:function(e,a,t){"use strict";t.r(a);var r=t(1),v=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"garbege-collector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#garbege-collector","aria-hidden":"true"}},[e._v("#")]),e._v(" Garbege Collector")]),e._v(" "),t("h2",{attrs:{id:"가비지-객체-선정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#가비지-객체-선정","aria-hidden":"true"}},[e._v("#")]),e._v(" 가비지 객체 선정")]),e._v(" "),t("p",[e._v("Java GC 는 객체가 가비지 객체인지 판별하기 위해서 "),t("code",[e._v("reachability")]),e._v(" 라는 개념을 사용한다."),t("br"),e._v("\n이는 유효한 참조가 있으면 "),t("code",[e._v("reachable")]),e._v(" 로, 없으면 "),t("code",[e._v("unreachable")]),e._v(" 로 구별하고 "),t("code",[e._v("unreachable")]),e._v(" 객체를 가비지로 간주하여 GC 를 수행한다.")]),e._v(" "),t("p",[e._v("서로 참조하고 있는 객체들을 참조 사슬 이라고 하며 최조의 참조가 이루어져 있는 객체의 참조를 "),t("code",[e._v("Root Set")]),e._v(" 이라고 한다.")]),e._v(" "),t("p",[e._v("아래는 런타임 데이터 영역의 구조이다.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/img/A043.png",alt:"런타임 데이터 영역1"}})]),e._v(" "),t("h3",{attrs:{id:"reachability"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reachability","aria-hidden":"true"}},[e._v("#")]),e._v(" Reachability")]),e._v(" "),t("p",[e._v("Heap 영역에 있는 객체들에 대한 참조는 다음 4가지중에 하나이다.")]),e._v(" "),t("ul",[t("li",[e._v("Heap 영역 내에 있는 다른 객체에 의한 참조")]),e._v(" "),t("li",[e._v("Java Stack (Java Method 실행시 사용하는 지역변수 및 파라메터들에 의한 참조)")]),e._v(" "),t("li",[e._v("Native Stack (JNI에 의해 생성된 객체에 대한 참조)")]),e._v(" "),t("li",[e._v("메서드 영역의 정적 변수에 의한 참조")])]),e._v(" "),t("p",[e._v("이들 중 Heap 내의 다른 객체에 의한 참조를 제외한 나머지 3개가 "),t("code",[e._v("Root Set")]),e._v(" 이 되므로 "),t("code",[e._v("reachability")]),e._v(" 객체를 판가름 하는 기준이 된다.")]),e._v(" "),t("p",[e._v("이를 적용한 구성은 다음과 같다.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/img/A044.png",alt:"런타임 데이터 영역1"}})]),e._v(" "),t("p",[t("code",[e._v("Root Set")]),e._v(" 에서 시작한 참조 사슬에 속한 객체들은 "),t("code",[e._v("reachable")]),e._v(" 객체이고 이와 무관한 객체들을 "),t("code",[e._v("unreachable")]),e._v(" 객체로 GC 대상이다.")]),e._v(" "),t("p",[e._v("오른쪽 아래 객체처럼 "),t("code",[e._v("reachable")]),e._v(" 객체를 참조하더라도, 다른 reachable 객체가 이 객체를 참조하지 않는다면 이 객체는 "),t("code",[e._v("unreachable")]),e._v(" 객체이다. (이 그림에서 참조는 모두 java.lang.ref 패키지를 사용하지 않은 일반적인 참조이다.)")]),e._v(" "),t("p",[e._v("위 구성을 "),t("em",[t("strong",[e._v("strong reference")])]),e._v(" 라 부른다.")]),e._v(" "),t("h3",{attrs:{id:"reference-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference-object","aria-hidden":"true"}},[e._v("#")]),e._v(" Reference Object")]),e._v(" "),t("p",[t("code",[e._v("java.lang.ref")]),e._v(" 는 soft, weak, phantom reference 를 클래스 형태로 제공한다.")]),e._v(" "),t("p",[t("code",[e._v("java.lang.ref.WeakReference")]),e._v(" 클래스는 참조 대상인 객체를 캡슐화한 WeakReference 객체를 생성한다."),t("br"),e._v("\n이렇게 생성한 객체는 Java GC 의 별도 관리 대상이 된다. (캡슐화된 내부 객체는 weak reference 에 의해 참조된다.)")]),e._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("WeakReference")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Sample")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" wr "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("WeakReference")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Sample")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Sample")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Sample")]),e._v(" ex "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" wr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[t("img",{attrs:{src:"/img/A045.png",alt:"Weak Reference1"}})]),e._v(" "),t("p",[e._v("위 코드에서 "),t("code",[e._v("WeakReference")]),e._v(" 클래스의 객체는 "),t("code",[e._v("new")]),e._v(" 메서드로 생성된 "),t("code",[e._v("Sample")]),e._v(" 객체를 캡슐화한 객체이다."),t("br"),e._v("\n참조된 "),t("code",[e._v("Sample")]),e._v(" 객체는 두번째 줄에서 "),t("code",[e._v("get")]),e._v(" 메서드에 의해 다른 참조에 대입된다.")]),e._v(" "),t("p",[e._v("이 시점에서 "),t("em",[t("strong",[e._v("WeakReference 객체 내의 참조와 ex 참조가 Sample 객체를 가르킨다.")])])]),e._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[e._v("ex "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[t("img",{attrs:{src:"/img/A046.png",alt:"Weak Reference2"}})]),e._v(" "),t("p",[e._v("위 코드와 같이 ex 참조에 null 을 대입하면 처음 생성한 Sample 객체는 오직 WeakReference 내부에서만 참조된다.")]),e._v(" "),t("p",[e._v("이를 "),t("em",[t("strong",[e._v("weakly reachable 상태 객체")])]),e._v(" 라고 한다.")]),e._v(" "),t("blockquote",[t("h3",{attrs:{id:"reference-object-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference-object-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Reference Object")]),e._v(" "),t("p",[e._v("Java 스팩에서 "),t("code",[e._v("SoftReference")]),e._v(", "),t("code",[e._v("WeakReference")]),e._v(", "),t("code",[e._v("PhantomReference")]),e._v(" 3가지 클래스로 생성된 객체를 말한다.\nReference Object 에 의해 참조된 객체를 "),t("em",[t("strong",[e._v("referent")])]),e._v(" 라고 한다.")])]),e._v(" "),t("h3",{attrs:{id:"reference와-reachability"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference와-reachability","aria-hidden":"true"}},[e._v("#")]),e._v(" Reference와 Reachability")]),e._v(" "),t("p",[e._v("위에서 GC 대상여부를 "),t("code",[e._v("reachable")]),e._v(", "),t("code",[e._v("unreachable")]),e._v(" 로 구분하였으며"),t("br"),e._v(" "),t("code",[e._v("java.lang.ref")]),e._v(" 패키지를 이용하여 GC 때의 동작을 다르게 지정가능하게끔 개입 할 수 있다."),t("br"),e._v("\n이를 다음과 같이 표현 가능하다.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/img/A047.png",alt:"Weak Reference3"}})]),e._v(" "),t("ul",[t("li",[e._v("파랑 : Strongly Reachable Object")]),e._v(" "),t("li",[e._v("녹색 : Weakly Reachable Object (GC 대상)")]),e._v(" "),t("li",[e._v("빨강 : Unreachable Object (GC 대상)")])]),e._v(" "),t("p",[e._v("위 그림에서 "),t("code",[e._v("WeakReference")]),e._v(" 객체 자체는 "),t("code",[e._v("weakly reachable")]),e._v(" 객체가 아니라 "),t("code",[e._v("strongly reachable")]),e._v(" 객체이다."),t("br"),e._v("\n또한 "),t("code",[e._v("WeakReference")]),e._v(" 에 의해 참조되고 있으면서 동시에 root set 에서 시작한 참조사슬에 포함되어 있는 경우 "),t("code",[e._v("weakly reachable")]),e._v(" 객체가 아니라 "),t("code",[e._v("strongly reachable")]),e._v(" 객체이다.")]),e._v(" "),t("p",[e._v("GC가 동작하여 어떤 객체를 "),t("code",[e._v("weakly reachable")]),e._v(" 객체로 판명하면,"),t("br"),e._v("\nGC는 "),t("code",[e._v("WeakReference")]),e._v(" 객체에 있는 "),t("code",[e._v("weakly reachable")]),e._v(" 객체에 대한 참조를 "),t("code",[e._v("null")]),e._v(" 로 설정한다.")]),e._v(" "),t("p",[e._v("이에 따라 "),t("code",[e._v("weakly reachable")]),e._v(" 객체는 "),t("code",[e._v("unreachable")]),e._v(" 객체와 마찬가지 상태가 되고,"),t("br"),e._v("\n가비지로 판명된 다른 객체들과 함께 메모리 회수 대상이 된다.")]),e._v(" "),t("h3",{attrs:{id:"strengths-of-reachability"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#strengths-of-reachability","aria-hidden":"true"}},[e._v("#")]),e._v(" Strengths of Reachability")]),e._v(" "),t("p",[e._v("Java GC 는 위에서 말한 근거를 바탕으로 다음 5가지의 Reachability 를 결정한다.")]),e._v(" "),t("ul",[t("li",[e._v("Strongly Reachable\n"),t("ul",[t("li",[e._v("root set 으로 부터 시작해서 어떤 reference object 도 중간에 끼어 있지 않는 상태")]),e._v(" "),t("li",[e._v("객체까지 도달하는 여러 참조사슬중에 reference object 가 하나라도 없는 객체")])])]),e._v(" "),t("li",[e._v("Softly Reachable\n"),t("ul",[t("li",[e._v("Strongly Reachable 객체가 아닌 객체중에 weak reference, phantom reference 없이 sort reference 가 하나라도 있는 객체")])])]),e._v(" "),t("li",[e._v("Weakly Reachable\n"),t("ul",[t("li",[e._v("Strongly Reachable 나 Softly Reachable 객체도 아닌 객체중에서 phantom reference 없이 weak reference 만 통과하는 참조 사슬이 하나라도 있는 객체")])])]),e._v(" "),t("li",[e._v("Phantomly Reachable\n"),t("ul",[t("li",[e._v("Strongly Reachable 나 Softly Reachable, Weakly Reachable 객체 모두 해당되지 않는 객체")]),e._v(" "),t("li",[e._v("finalize 되었지만 아직 메모리가 회수되지 않는 상태")])])]),e._v(" "),t("li",[e._v("Unreachable\n"),t("ul",[t("li",[e._v("root set 으로 부터 시작되는 참조 사슬이 참조되지 않는 상태")])])])]),e._v(" "),t("p",[e._v("아래 예시의 객체 B 는 Softly Reachable 이다.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/img/A048.png",alt:"Softly Reachable"}})]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("참고자료")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://d2.naver.com/helloworld/329631",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://d2.naver.com/helloworld/329631"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"영역-구성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#영역-구성","aria-hidden":"true"}},[e._v("#")]),e._v(" 영역 구성")]),e._v(" "),t("p",[e._v("GC 를 실행하기 위해 "),t("code",[e._v("stop-the-world")]),e._v(" 을 이용하여 모든 애플리케이션 작업을 멈춘다."),t("br"),e._v("\n이 "),t("code",[e._v("stop-the-world")]),e._v(" 를 실행하면 GC 를 실행하는 "),t("code",[e._v("thread")]),e._v(" 를 제외한 나머지 "),t("code",[e._v("thread")]),e._v(" 는 모두 작업을 멈춘다.")]),e._v(" "),t("p",[e._v("GC 작업을 완료한 이후에는 중단됬던 작업을 다시 시작한다.")]),e._v(" "),t("p",[e._v("JAVA 프로그램 코드에서는 메모리를 명시적으로 지정하여 해제하지 않는다."),t("br"),e._v("\n이는 "),t("code",[e._v("Garbage Collector")]),e._v(" 의해 더 이상 필요없는 객체를 찾아 지우는 작업을 한다.")]),e._v(" "),t("p",[e._v("이 "),t("code",[e._v("Garbage Collector")]),e._v(" 의 설계 원칙은 "),t("code",[e._v("weak generational hypothesis")]),e._v(" 이라고 하는데 이 원칙은 다음과 같다.")]),e._v(" "),t("ul",[t("li",[e._v("대부분의 객체는 금방 접근 불가능한 상태 (unreachable) 상태가 된다.")]),e._v(" "),t("li",[e._v("오래된 객체에서 젊은 객체로서의 참조는 극히 드물다.")])]),e._v(" "),t("p",[e._v("위 두 가설을 기반으로한 "),t("code",[e._v("HotSpot VM")]),e._v(" 에서는 크게 2개의 물리적 공간을 나뉘었다."),t("br"),e._v("\n바로 아래와 같은  "),t("code",[e._v("Old Generation Area")]),e._v(", "),t("code",[e._v("Young Generation Area")]),e._v(" 이다.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/img/A012.png",alt:"GC 영역 및 데이터 흐름도"}})]),e._v(" "),t("h3",{attrs:{id:"young-generation-area"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#young-generation-area","aria-hidden":"true"}},[e._v("#")]),e._v(" Young Generation Area")]),e._v(" "),t("ul",[t("li",[e._v("새롭게 생성한 객체가 위치하는 공간")]),e._v(" "),t("li",[e._v("대부분의 객체가 금방 접근 불가 상태가 되기 때문에 많은 객체가 Young 에서 생성되었다가 사라진다")]),e._v(" "),t("li",[e._v("이 영역에서 객체가 사라질때 "),t("code",[e._v("Minor GC")]),e._v(" 가 발생한다.")])]),e._v(" "),t("h3",{attrs:{id:"old-generation-area"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#old-generation-area","aria-hidden":"true"}},[e._v("#")]),e._v(" Old Generation Area")]),e._v(" "),t("ul",[t("li",[e._v("접근 불가능 상태로 되지 않아 Young 영역에서 살아남은 객체가 여기로 복사된다.")]),e._v(" "),t("li",[e._v("대부분의 Young 영역보다 크게 할당하며, Young 영역 보다는 GC 가 적게 발생한다.")]),e._v(" "),t("li",[e._v("이 영역에서 객체가 사라질때 "),t("code",[e._v("Major GC")]),e._v(" (혹은 Full GC) 가 발생한다.")])]),e._v(" "),t("h3",{attrs:{id:"permanent-generation-area"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permanent-generation-area","aria-hidden":"true"}},[e._v("#")]),e._v(" Permanent Generation Area")]),e._v(" "),t("ul",[t("li",[e._v("객체나 억류된 문자열 정보를 저장하는 곳")]),e._v(" "),t("li",[e._v("이 영역에서 객체가 사라질때 "),t("code",[e._v("Major GC")]),e._v(" 가 발생한다.")])]),e._v(" "),t("blockquote",[t("p",[e._v("Old 영역에서 Young 영역 참조가 일어날때는 "),t("code",[e._v("Card Table")]),e._v(" 이라는 영역을 사용한다.")])]),e._v(" "),t("h3",{attrs:{id:"young-영역-구성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#young-영역-구성","aria-hidden":"true"}},[e._v("#")]),e._v(" Young 영역 구성")]),e._v(" "),t("p",[e._v("Young 영역은 다음 3개의 영역으로 구성된다.")]),e._v(" "),t("ul",[t("li",[e._v("Eden Area (1개)")]),e._v(" "),t("li",[e._v("Suvivor Area (2개)")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/img/A013.png",alt:"Young 영역 GC 전후"}})]),e._v(" "),t("ul",[t("li",[e._v("새로 생성한 대부분의 객체는 "),t("code",[e._v("Edan")]),e._v(" 영역에 위치한다.")]),e._v(" "),t("li",[t("code",[e._v("Edan")]),e._v(" 영역에서 GC 가 한번 발생한 후 살아남은 객체는 "),t("code",[e._v("Survivor")]),e._v(" 영역 중 하나로 이동된다.")]),e._v(" "),t("li",[e._v("하나의 "),t("code",[e._v("Survivor")]),e._v(" 영역이 가득 차게되면 그중 살아남은 객체를 다른 "),t("code",[e._v("Survivor")]),e._v(" 영역으로 이동하고 가득찬 "),t("code",[e._v("Survivor")]),e._v(" 영역은 아무데이터도 없는 상태가 된다.")]),e._v(" "),t("li",[e._v("이 과정을 반복하며 살아남은 객체는 Old 영역으로 이동하게 된다.")])]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("Survivor")]),e._v(" 영역 중 하나는 반드시 비어있는 상태로 남아 있어야 한다.\n만약 두 "),t("code",[e._v("Survivor")]),e._v(" 영역이 모두 데이터가 존재하거나, 두개의 "),t("code",[e._v("Survivor")]),e._v(" 영역의 사용량이 0 이라면 시스템은 정상적인 상황이 아니다.")])]),e._v(" "),t("h3",{attrs:{id:"hotspot-vm-의-메모리-할당-기술"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hotspot-vm-의-메모리-할당-기술","aria-hidden":"true"}},[e._v("#")]),e._v(" HotSpot VM 의 메모리 할당 기술")]),e._v(" "),t("p",[e._v("Young 영역에는 객체의 이동이 빈번하기 때문에 개선된 메모리 할당 기술이 필요하다."),t("br"),e._v("\n다음은 HotSpot VM 에서 사용중인 2가지의 메모리 할당 기술이다.")]),e._v(" "),t("ul",[t("li",[e._v("bump-the-pointer\n"),t("ul",[t("li",[t("code",[e._v("Eden")]),e._v(" 영역에 할당된 마지막 객체를 추적한다.")]),e._v(" "),t("li",[e._v("마지막 객체는 TOP 에 위치하고 있기 때문에 삽입하려는 객체의 크기가 "),t("code",[e._v("Eden")]),e._v(" 영역에 넣기에 적당한지 확인하여 추가한다.")]),e._v(" "),t("li",[e._v("새로운 객체를 생성할때 마지막에 추가된 객체만 점검하면 되므로 매우 빠르게 메모리 할당이 이루어진다.")])])]),e._v(" "),t("li",[e._v("TLABs (Thread Local Allocation Buffers)\n"),t("ul",[t("li",[e._v("Multi Thread 환경에서 Tread-Safe 하기 위해서 Edan 영역에 Lock 이 발생 할수 밖에 없는데 이를 해결하기 위해서 HotSpot VM 에서 지원하는 "),t("code",[e._v("TLABs")]),e._v(" 기술이 있다.")])])])]),e._v(" "),t("h3",{attrs:{id:"old-영역의-gc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#old-영역의-gc","aria-hidden":"true"}},[e._v("#")]),e._v(" Old 영역의 GC")]),e._v(" "),t("p",[e._v("Old 영역은 데이터가 가득차면 GC 를 실행한다."),t("br"),e._v("\n다음 GC는 JDK 7 기준의 5가지 방법이다.")]),e._v(" "),t("ul",[t("li",[e._v("Serial GC\n"),t("ul",[t("li",[e._v("CPU 코어 개수가 적을 때 적합")])])]),e._v(" "),t("li",[e._v("Parallel GC\n"),t("ul",[t("li",[e._v("메모리와 CPU 코어 개수가 많을 때 유리")])])]),e._v(" "),t("li",[e._v("Parallel Old GC (Parallel Compacting GC)")]),e._v(" "),t("li",[e._v("Concurrent Mark & Sweep GC (CMS)\n"),t("ul",[t("li",[e._v("애플리케이션 응답이 중요한 경우 사용 (Low Latency GC)")]),e._v(" "),t("li",[e._v("다른 GC 에 비해 메모리와 CPU 를 더 많이 사용")]),e._v(" "),t("li",[e._v("다른 GC 에 비해 산재된 메모리가 많을수 있기 때문에 "),t("code",[e._v("stop-the-world")]),e._v(" 시간이 더 길다.")])])]),e._v(" "),t("li",[e._v("G1 (Garbage First) GC\n"),t("ul",[t("li",[e._v("가장 최신의 가장 성능이 좋은 GC (JDK 7 이상)")])])])]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("참고자료")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://d2.naver.com/helloworld/1329",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://d2.naver.com/helloworld/1329"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://yckwon2nd.blogspot.com/2014/04/garbage-collection.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://yckwon2nd.blogspot.com/2014/04/garbage-collection.html"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://yckwon2nd.blogspot.com/2015/03/java8-permanent.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://yckwon2nd.blogspot.com/2015/03/java8-permanent.html"),t("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=v.exports}}]);