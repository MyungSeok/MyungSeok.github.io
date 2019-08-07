(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{282:function(t,a,s){"use strict";s.r(a);var n=s(1),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"트리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#트리","aria-hidden":"true"}},[t._v("#")]),t._v(" 트리")]),t._v(" "),s("p",[t._v("자료구조상의 "),s("em",[s("strong",[t._v("트리")])]),t._v(" 는 다음과 같은 특성을 가진다.")]),t._v(" "),s("ul",[s("li",[t._v("트리는 하나의 루트 노드를 가진다.")]),t._v(" "),s("li",[t._v("트리는 0개 이상의 자식 노드를 갖고 있다.")]),t._v(" "),s("li",[t._v("그 자식노드 또한 0개 이상의 자식 노드를 갖고 있으며, 이를 반복적으로 정의한다.")])]),t._v(" "),s("p",[t._v("트리는 비 순환 그래프의 한 종류 이다.")]),t._v(" "),s("h2",{attrs:{id:"트리의-종류"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#트리의-종류","aria-hidden":"true"}},[t._v("#")]),t._v(" 트리의 종류")]),t._v(" "),s("h3",{attrs:{id:"포화-이진-트리-full-binary-tree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#포화-이진-트리-full-binary-tree","aria-hidden":"true"}},[t._v("#")]),t._v(" 포화 이진 트리 (Full Binary Tree)")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/A036.png",alt:"포화 이진 트리"}})]),t._v(" "),s("p",[t._v("트리의 모든 노드의 깊이가 같은 완전한 이진 트리를 말한다.")]),t._v(" "),s("h3",{attrs:{id:"완전-이진-트리-complete-binary-tree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#완전-이진-트리-complete-binary-tree","aria-hidden":"true"}},[t._v("#")]),t._v(" 완전 이진 트리 (Complete Binary Tree)")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/A037.png",alt:"완전 이진 트리"}})]),t._v(" "),s("p",[t._v("노드의 마지막 부분 (끝 부분) 을 제외하고는 모든 자식 노드를 2개를 가진 이진 트리를 말한다.")]),t._v(" "),s("h3",{attrs:{id:"이진-트리-binary-tree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이진-트리-binary-tree","aria-hidden":"true"}},[t._v("#")]),t._v(" 이진 트리 (Binary Tree)")]),t._v(" "),s("p",[t._v("트리중에서도 각 노드의 "),s("em",[s("strong",[t._v("자식노드가 최대 2개")])]),t._v(" 를 갖고 있는 트리를 말한다.")]),t._v(" "),s("h2",{attrs:{id:"트리의-순회-탐색"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#트리의-순회-탐색","aria-hidden":"true"}},[t._v("#")]),t._v(" 트리의 순회 (탐색)")]),t._v(" "),s("p",[t._v("트리의 순회 방식은 대표적으로 다음 4가지 (전위, 중위, 후위, 레벨) 로 나뉜다.")]),t._v(" "),s("h3",{attrs:{id:"전위-순회-pre-order-traversal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#전위-순회-pre-order-traversal","aria-hidden":"true"}},[t._v("#")]),t._v(" 전위 순회 (Pre-order traversal)")]),t._v(" "),s("ol",[s("li",[t._v("루트를 방문한다.")]),t._v(" "),s("li",[t._v("왼쪽 노드를 방문한다.")]),t._v(" "),s("li",[t._v("오른쪽 노드를 방문한다.")])]),t._v(" "),s("blockquote",[s("p",[t._v("루트 노드가 맨 처음 나온다.")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLeft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"중위-순회-in-order-traversal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#중위-순회-in-order-traversal","aria-hidden":"true"}},[t._v("#")]),t._v(" 중위 순회 (In-order traversal)")]),t._v(" "),s("ol",[s("li",[t._v("왼쪽 노드를 방문한다.")]),t._v(" "),s("li",[t._v("루트를 방문한다.")]),t._v(" "),s("li",[t._v("오른쪽 노드를 방문한다.")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLeft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"후위-순회-post-order-traversal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#후위-순회-post-order-traversal","aria-hidden":"true"}},[t._v("#")]),t._v(" 후위 순회 (Post-order traversal)")]),t._v(" "),s("ol",[s("li",[t._v("왼쪽 노드를 방문한다.")]),t._v(" "),s("li",[t._v("오른쪽 노드를 방문한다.")]),t._v(" "),s("li",[t._v("루트를 방문한다.")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLeft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"레벨-순회-level-order-traversal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#레벨-순회-level-order-traversal","aria-hidden":"true"}},[t._v("#")]),t._v(" 레벨 순회 (Level-order traversal)")]),t._v(" "),s("p",[t._v("한 레벨의 모든 노드를 방문하고 다음 레벨 방문하는 방식으로"),s("br"),t._v("\n레벨은 왼쪽에서 오른쪽으로 방문한다.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/A038.png",alt:"레벨 순회 탐색"}})]),t._v(" "),s("ul",[s("li",[t._v("방문순서 : E > B > G > A > D > F > H > C")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://secmem.tistory.com/204",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://secmem.tistory.com/204"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=r.exports}}]);