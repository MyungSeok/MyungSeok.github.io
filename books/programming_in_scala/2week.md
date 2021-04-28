# 2주차 (6 ~ 10 Chapter)

## Chapter 06 함수형 객체

지금까지 스칼라의 기본적인 내용을 이해했다면, 이제는 좀 더 완전한 기능을 갖춘 스칼라의 클래스 작성법을 알아볼 차례이다.

클래스 파라미터, 생성자, 메서드, 연산자, 비공개 멤버, 오버라이드, 선결 조건 확인, 오버로드, 자기 참조 같은 스칼라의 객체지향 프로그래밍 요소를 설명할 것이다.

### 6.1 분수 클래스 명세

이번장 부터는 분모 클래스를 만들어 진행해보겠다.

일반적으로 수학에서의 분수의 연산을 살펴보면 각 분모의 일치하는 작업을 통해 연산을 수행한다.

따라서 수학의 분수를 코드적으로 해석하면 **변경 가능한 상태가 없음**을 알 수 있다.

다음은 이를 코드로 표현한 방식이다.

```scala
val oneHalf = new Rational(1, 2)

val twoThirds = new Rational(2, 3)

(oneHalf / 7) + (1 - twoThireds)
```

### 6.2 Rational 생성

수학의 분수에서 처럼 `Rational` 객체를 사용하도록 변경 불가능한 객체로 사용하자.

```scala
class Rational(n: Int, d: Int)
```

클래스 이름인 `Rational` 뒤에 그 안에는 `n`, `d` 이라는 식별자가 있다.

이를 클래스 파라미터 (class parameter) 라고 부른다.

클래스 파라미터와 같은 둥 인자를 받는 주 생성자 (primary constructor) 를 만든다.

> **변경 불가능한 객체의 장단점**<br/>
> 변경 불가능한 객체의 장점은 많지만 가장 큰 단점은 그 자리에서 상태를 바로 변경하면 간단한데 <br/>
> 거대 그래프 객체를 복사해야 하는 경우처럼 많은 **비용이 드는 작업을 수행할 때 해당 알고리즘을 표현**하기에도 어려우며 **성능상의 이슈**가 발생하기도 한다.<br/>
> 때문에 스칼라에서는 **변경 불가능한것과 변경 가능한것을 항상 같이 제공**한다.

### 6.3 toString 메서드 다시 구현하기

자바와 같이 `toString` 메서드를 Rational 클래스에 추가하면 기존 구현을 오버라이딩 할 수 있다.

```scala
class Rational(n: Int, d: Int) {
  override def toString = s"$n/$d"
}
```

인터프리터에서는 다음과 같이 확인이 가능하다.

```scala
val x = new Rational(1, 3)
// x: Rational = 1/3

val y = new Rational(5/7)
// y: Rational = 5/7
```

### 6.4 선결 조건 확인

`require` 는 선결조건을 만들기 위한 여러가지 방법 중 하나이며

주 생성자에 있는 파라미터를 검증할 때 유용하다.

```scala
class Rational(n: Int, d: Int) {
  require(d != 0)
  override def toString = s"$n/$d"
}
```

`require` 메서드는 인자로 `Boolean` 값을 받는데, 이 값이 참 (true) 이면 `require` 값이 정상적으로 끝나고 다음으로 진행한다.

만약 전달 받은 값이 거짓 (false) 이라면 `IllegalArgumentException` 예외가 발생하여 객체 생성을 막는다.

### 6.5 필드 추가

```scala
class Rational(n: Int, d: Int) {
  require(d != 0)
  override def toString = s"$n/$d"
  def add(that: Rational): Rational = 
    new Rational(n * that.d + that.n * d, d * that.d)
}
```

위 코드는 컴파일 오류가 발생한다.

Rational 객체 분모, 분자 값에 접근하기 위해서는 필드로 만들어야 한다.

필드를 추가하여 해결한 형태는 다음과 같다.

```scala
class Rational(n: Int, d: Int) {
  require(d != 0)

  val numer: Int = n
  val denom: Int = d

  override def toString = s"$n/$d"

  def add(that: Rational): Rational = 
    new Rational(
      numer * that.denom + that.numer * denom,
      denom * that.denom
    )
}
```

이전과 달리 객체 바깥에서 필드를 통해 분자와 분모값에 접근할 수 있다.

### 6.6 자기 참조

실행중인 메서드의 호출 대상 인스턴스에 대한 참조를 자기 참조 (self reference) 라고 한다.

```scala
def lessThan(that: Rational) = 
  this.numer * that.denom < that.numer * this.denom
```

위 코드에서 `this` 를 빼고 `numer` 라고 써도 같다.

### 6.7 보조 생성자

스칼라에서 주 생성자가 아닌 다른 생성자를 보조 생성자 (auxiliary constructor) 라고 한다.

```scala
class Rational(n: Int, d: Int) {
  require(d != 0)
  
  val numer: Int = n
  val denom: Int = d
  
  def this(n: Int) = this(n, 1) // 보조 생성자

  override def toString = s"$n/$d"

  def add(that: Rational): Rational = 
    new Rational(
      numer * that.denom + that.numer * denom,
      denom * that.denom
    )
}
```

스칼라에서 보조 생성자는 `def this(...)` 라고 시작한다.

**모든 생성자 호출을 거슬러 올라가면 결국 주 생성자를 호출하게 만드는 효과가 있다.**

### 6.8 비공개 필드와 메서드

최대 공약수를 계산하는 비공개 필드와 메서드를 추가하자

```scala
class Rational(n: Int, d: Int) {
  require(d != 0)
  
  private val g = gcd(n.abs, d.abs)
  val numer: Int = n
  val denom: Int = d
  
  def this(n: Int) = this(n, 1) // 보조 생성자

  override def toString = s"$n/$d"

  def add(that: Rational): Rational = 
    new Rational(
      numer * that.denom + that.numer * denom,
      denom * that.denom
    )
}
```

첫 줄에 등장하는 `g` 의 초기화 코드 `gcd(n.abs, d.abs)` 는 다른 두 초기화 코드보다 먼저 실행된다.

때문에 최대공약수 `g` 로 나뉜 값이 `numer`, `denom` 를 약분상태로 초기화 시켜준다.

### 6.9 연산자 정의

수학적 기호 `+` 는 메서드 이름을 정의하면 add 메서드를 대체할 수 있다.

```scala
def + (that: Rational): Rational = 
  new Rational(
    numer * that.denom + that.numer * denom,
    denom * that.denom
  )
```

마찬가지로 곱셈 연산자인 `*` 또한 times 메서드를 대체할 수 있다.

```scala
def * (that: Reational): Rational = 
  new Rational(numer * that.numer, denom * that.denom)
```

### 6.10 스칼라의 식별자

#### 영숫자 식별자 (alphanumeric identifier)

* 문자나 밑줄 (_) 로 시작한다.

간혹 밑줄과로 끝나는 식별자일때 다음과 같은 에러를 발생 시킬수 있다.

```scala
val name_:Int = 1
```

위 경우 `name_:Int` 를 변수명으로 컴파일 하려 하기 때문에 콜론 앞에 공백을 하나 두어 다음과 같이 작성해야 한다.

```scala
val name_ :Int = 1
```

#### 연산자 식별자 (operator identifier)

하나 이상의 연산자 문자로 이루어져 있다.

```scala
+ ++ ::: <?> :->
```

예를 들면 `:->` 는 내부적으로 `$colon$minus$grater` 로 변환된다.

자바에서 사용하려고 한다면 내부 변환 이름을 알아야 한다.

#### 혼합 식별자 (mixed identifier)

영문과 숫자로 이뤄진 식별자 뒤에 밑줄이 오고 그 뒤에 연산자 식별자가 온다.

```scala
myvar_=
```

#### 리터럴 식별자 (iteral identifier)

아래 코드처럼 역따옴표 (`)로 둘러싼 임의의 문자열이다.

```scala
`x` `<clinit>` `yield`
```

런타임이 인식할 수 있는 어떤 문자열이라도 역따옴표 사이에 넣을 수 있다는게 핵심이다.

시스템 예약어를 무시할 수 있는 방법으로 씌인다.

```scala
Thread.`yield`()
```

### 6.11 메서드 오버로드

스칼라에서 처리하는 오버로드 메서드는 자바와 거의 유사하다.

스칼라는 오버로드한 메서드 중 인자의 정적인 타입과 가장 잘 일치하는 버전을 선택한다.

만약 일치하는 결과가 없을 경우 컴파일러는 `ambiguous reference` 오류를 노출하여 모호한 참조라는 사실을 알린다.

### 6.12 암시적 타입 변환

암시적 타입 변환은 라이브러리를 좀 더 유연하고 사용하기 편리하게 만들어주는 아주 강력한 기법이다.

하지만 너무나도 강력해 잘못 사용하기도 한다.

연산자 식별자를 이용하여 `r * 2` 표현을 사용할 수 있지만 `2 * r` 의 표현은 오류를 발생 시킨다.

이는 암시적 타입으로 변환하는 과정에서 `r * 2` 는 `r.*(2)` 로 바뀌게 되며 `2 * r` 는 `2.*(r)` 로 변환되어 Int 클래스는 `Rational` 인자를 받는 곱셈 메서드가 없기 때문이다.

### 6.13 주의사항

스칼라는 쉽게 사용할 수 있는 라이브러리 설계를 할 수 있는 막강한 권한을 주지만 **미숙하게 사용하면 연산자 메서드와 암시적 타입 변환 모두 클라이언트 코드를 읽고 이해하기 힘들게 만든다.**

라이브러리를 설계하며 항상 염두에 두어야 할 목표는 단순히 클라이언트 코드를 간결하게 하는것 뿐만이 아니라, 가독성을 높이고 이해하기 쉽게 만드는 법이다.

### 6.14 결론

다음장에서는 Rational 클래스의 동반 객체에 암시적 타입 변환을 넣어서 편리하게 사용가능한 스코프로 불러올 수 있게 하는 방법을 설명하겠다.

## Chapter 07 내장 제어 구문

스칼라의 내장 제어 구문은 몇가지 없다.

* if
* while
* for
* try
* match
* 함수 호출 (function call)

스칼라에 제어 구문의 수가 적은 이유는 설계 초기부터 함수 리터럴을 포함했기 때문이다.

프로그램 전체를 값을 계산하는 관점에서 바라보고 프로그램 구성요소 또한 값을 도출해야 한다는 함수 언어적 접근을 채용한 결과이다.

### 7.1 if 표현식

스칼라의 if 표현식은 값을 내놓기 때문에 더 간결하게 코드 작성이 가능하다.

```scala
val filename = 
  if (!args.isEmpty) args(0)
    else "default.txt"
```

위 코드는 진짜 장점은 `var` 이 아닌 `val` 을 사용했다는 점이다.

> `var` 이 아닌 `val` 을 사용함에 있어서 장점은 동일성 추론 (equational reasoning) 이 더욱 유리하다.<br/>
> 부수효과가 없기 때문에 값을 도출하는 표현식과 동일하다.<br/>
> `val` 을 사용할 기회를 노리면 코드를 더 가독성이 높고 리펙토링 하기 쉬워진다.

### 7.2 while 루프

`while` 루프는 결과가 특정 값이 아니기 때문에 순수한 함수형 언어는 이를 종종 제외하곤 한다.

하지만 **간혹 명령형 해법이 가독성이 뛰어나기 때문에 특정 조건이 바뀔때까지 정해진 절차대로 반복하는 알고리즘을 작성한다고 하면 `while` 루프가 대안이 될 수 있다.**

일반적으로 `while` 루프는 `var` 변수와 마찬가지로 최대한 적게 사용하기 위해 노력하는것을 권장한다.

특별히 `while` 이나 `do-while` 루프를 사용할 충분한 이유가 없다면 사용하지 않는것을 권장한다. 

### 7.3 for 표현식

스칼라의 `for` 표현식은 반복 처리를 위한 만능 표현식이다.

#### 컬렉션 이터레이션 

`for` 로 할 수 잇는 가장 간단한 일은 모든 요소를 이터레이션하는 것이다.

```scala
val fileHere = (new java.io.File(".")).listFiels
for (file <- filesHere)
  println(file)
```

제너레이터 (generator) 라고 부르는 `file <- filesHere` 문법을 이용해 filesHere 원소를 이터레이션 한다.

이터레이션 대상 값의 범위에서 최댓값을 제외하고 싶다면 `to` 대신 `until` 을 사용한다.

```scala
for (i <- 1 until 4)
  println("Iteration " + i)
```

```scala
Iteration 1
Iteration 2
Iteration 3
```

#### 필터링

`for` 표현식에 필터 (filter) 을 추가하면 전체 컬렉션에서 일부만 사용할 수 있다.

```scala
val filesHere = (new java.io.File(".")).listFiles

for (file <-filesHere if file.getName.endsWith(".scala))
  println(file)
```

만약 여러개의 필터를 적용하려면 다음과 같이 사용하면 된다.

```scala
for (
  file <- filesHere
  if file.isFile
  if file.getName.endsWith(".scala")
) println(file)
```

#### 중첩 이터레이션

2개의 루프를 중첩한 리스트는 여러개의 `<-` 절을 이용하여 중첩루프를 생성할 수 있다.

```scala
def fileLines(file: java.io.File) = 
  scala.io.Source.fromFile(file).getLines().toArray

def grep(pattern: String) =
  for (
    file <- filesHere
    if file.getName.endsWith(".scala");
    line <- fileLines(file)
    if line.trim.matches(pattern)
  ) println(s"$file: ${line.trim}")

grep(".*gcd.*")
```

바깥쪽 루프는 `filesHere` 내의 `.scala` 로 끝나는 파일을 <br/>
안쪽 루프는 바깥루프에서 얻은 `file` 에 `fileLines(file)` 을 호출한 결과를 이터레이션 한다.

원한다면 중괄호를 사용하여 제너레이터와 필터를 감싸도 된다.<br/>
중괄호를 사용한다면 스칼라 컴파일러가 **세미콜론을 추론하기 때문**에, 괄호를 사용할 때 써야만 했던 세미콜론을 제거할 수 있다.

#### for 중에 변수 바인딩 하기

위 코드에서 `line.trim` 이라는 표현식을 반복하는데 이를 변수로 바인딩하여 처리 가능하다.

```scala
def fileLines(file: java.io.File) = 
  scala.io.Source.fromFile(file).getLines().toArray

def grep(pattern: String) =
  for (
    file <- filesHere
    if file.getName.endsWith(".scala");
    line <- fileLines(file)
    trimmed = line.trim
    if trimmed.matches(pattern)
  ) println(s"$file: ${trimmed}")

grep(".*gcd.*")
```

#### 새로운 컬렉션 만들어내기

이터레이션의 매 반복 단계의 결과를 저장하기 위한 값을 만들 수 있다.

`for` 표현식의 본문 앞에 `yield` 라는 키워드를 사용한다.

```scala
def scalaFiles = 
  for {
    file <- filesHere
    if file.getName.endsWith(".scala")
  } yield file
```

위 코드는 for 표현식을 수행할 때마다 값 (file) 을 하나씩 만들어낸다.

### 7.4 try 표현식으로 예외 다루기

호출한 메서드가 별다른 처리를 하지 않고 종료하면 해당 메서드를 호출한 메서드, 즉 호출자의 호출자 메서드로 예외를 전파한다.

이를 방지하기 위해 try 표현식으로 처리한다.

#### 예외 발생 시키기

자바와 동일하게 `throw` 키워드를 이용하여 예외를 던진다.

```scala
throw new IllegalArgumentException
```

```scala
val half = 
  if (n % 2 == 0)
    n / 2
  else 
    throw new RuntimeException("n must be even")
```

예외는 `Nothing` 이라는 타입을 갖는다.

#### 발생한 예외 잡기

패턴 매치 (pattern match)를 이용하여 발생한 예외를 잡는다.

```scala
try {
  val f = new FileReader("input.txt")
} catch {
  case e: FileNotFoundException => // 파일을 못 찾는 경우 처리
  case e: IOException => // 그 밖에 IO 오류 처리
}
```

#### finally 절

표현식의 결과가 어떻든 특정코드를 반드시 수행하고 싶은 경우 사용

```scala
try {
  // 파일을 사용한다.
} finally {
  file.close()
}
```

스칼라에서는 동일한 목적을 좀 더 간결하게 달성하기 위해, 빌려주기 패턴 (loan pattern) 이라는 기법을 사용할 수 있다.

#### 값 만들어내기

finally 구문에서는 값을 반환하지 않는 게 최선이다.

finally 절은 결괏값을 만들어 내기 보다는 파일을 닫거나 정리하는 작업을 하는등 부수효과를 제공하는 방법이라고 생각하는게 좋다.

### 7.5 match 표현식

스칼라의 `match` 표현식은 여타 언어의 `swtich` 문과 유사하게 다수의 대안 (alternative) 중 하나를 선택하게 해준다.

```scala
val firstArg = if (args.length > 0) args(0) else ""

firstArg match {
  case "salt" => println("pepper")
  case "chips" => println("salsa")
  case "eggs" => println("bacon")
  case _ => println("huh?")
}
```

모든 case 마다 break 문이 암묵적으로 있어서, break 문이 없어도 다음 선택으로 넘어가지 않는다.

### 7.6 break 와 continue 문 없이 살기

함수 리터럴의 장점을 활용하면 `break` 나 `continue` 없이 더 간결한 코드 작성이 가능하다.

만약 그래도 `break` 문이 필요하다 생각되면 `scala.util.control` 에 있는 `Breaks` 클래스에서 break 메서드를 제공한다.

```scala
import scala.util.control.Breaks._
import java.io._

val in = new BufferedReader(new InputStreamReader(System.in))

breakable {
  while (true) {
    println("? ")
    if (in.readLine() == "") break
  }
}
```

### 7.7 변수 스코프

스칼라에서 변수의 정의하는 스코프 (scope) 를 가진다.

자바에서 통용되는 지역변수 (local variable) 개념을 가진다.

변수들이 말 그대로 함수 내에 지역적으로 존재하며, 함수가 호출될 때마다 새로운 지역변수를 만들어서 사용한다.

```scala
val a = 1;
{
  val a = 2;
  {
    println(a)
  }
}
```

```scala
2
```

중괄호를 사용하여 스코프를 새로 만들 수 있다.

### 7.8 명령형 스타일 코드 리펙토링

함수형 방식으로 곰셈표 만들기

```scala
def makeRowSeq(row: Int) = 
  for (col <- 1 to 10) yield {
    val prod = (row * col).toString
    val padding = " " * (4 - prod.length)
    padding + prod
  }

def makeRow(row: Int) = makeRowSeq(row).mkString

def multiTable() = {
  val tableSeq = 
    for (row <- 1 to 10)
    yield makeRow(row)
  tableSeq.mkString("\n")
}
```

### 7.9 결론

스칼라의 내장 제어 구조는 그 수는 적지만 역활을 제대로 수행한다.

명령형 언어에 존재하는 구문과 유사한 역활을 수행하지만, 값이 결과가 되도록 의도했기 때문에 함수형 스타일로도 작성이 가능하다.

## Chapter 08 함수와 클로저

프로그램이 커질수록 관리가 가능한 작은 조각으로 나눌 수 있는 방법이 필요하다.

스칼라에 존재하는 여러종류의 함수가 지닌 특징을 알아보자.
### 8.1 메서드

함수를 정의하는 가장 흔한 방법은 특정 객체의 멤버를 함수로 만드는 것이다.

객체의 멤버인 함수를 메서드 (method) 라고 한다.

### 8.2 지역 함수

스칼라도 자바처럼 잘 정의한 작업을 작은 함수 프로그램으로 나뉘어 유연하게 조립할 수 있는 빌딩 블록 (building block) 을 제공한다.

자바는 접근 제어자를 통한 비공개 메서드를 이용하지만 스칼라에서는 함수안에 함수를 정의하는 방법으로 정의할 수 있다.

```scala
def processFile(filename: String, width: Int) = {
  def processLine(filename: String, width: Int, line: String) = {
    if (line.length > width)
      println(filename + ": " + line.trim)
  }

  val source = Source.fromFile(filename)
  for (line <- source.getLines()) {
    processLine(filename, width, line)
  }
}
```

`processLine` 메서드는 `processfile` 내부에서만 접근할 수 있으며, 외부에서는 접근이 불가능 하다.

### 8.3 1급 계층 함수

스칼라는 1급 계층 함수 (first class function) 를 제공한다.

함수를 정의하고 호출할 뿐만 아니라 이름없이 리터럴로 표기해 값처럼 주고받을 수 있다.

함수 리터럴은 소스 코드에 존재하는 반면, 함수값은 실행 시점에 객체로 존재한다는 점에 있다.

### 8.4 간단한 형태의 함수 리터럴

함수 리터럴을 좀 더 간단하게 만드는 방법은 인자의 타입을 제거하는 것이다.

```scala
someNumbers.filter((x) => x > 0)
```

`someNumbers` 라는 정수의 리스트를 걸러내는 필터 함수를 사용하기 때문에, 스칼라 컴파일러는 함수 리터럴의 인자가 x가 정수라는 사실을 안다.

이를 타겟 타이핑 (target typing) 이라고 하는데 표현식을 어떤 방식으로 사용하느냐에 따라 컴파일러가 추론하는 타입이 달라지기 때문이다.

### 8.5 위치 표시자 문법

함수 리터럴을 좀 더 간결하게 만들기 위해 밑줄을 하나 이상의 파라미터에 위치 표시자로 사용할 수 있다.

```scala
someNumbers.filter(_ > 0)
```

**밑줄을 채워넣어야 하는 빈칸**으로 생각해도 좋다.

때로는 밑줄의 인자의 위치 표시자로 사용할 때 컴파일러가 인자의 타입 정보를 찾지 못할 경우가 있다.

이럴 경우에는 콜론을 이용하여 타입을 명시해주면 된다.

```scala
val f = (_: Int) + (_: Int)
```

### 8.6 부분 적용 함수

전체 파라미터 목록을 밑줄로 바꿀수도 있다.

예를 들면 `println(_)` 이라고 쓰지 않고 `println _` 이라고 쓸 수 있다.

```scala
def sum(a: Int, b: Int, c: Int) = a + b + c

val a = sum _

a(1, 2, 3)
// 6
```

위 코드는 스칼라 컴파일러가 부분 적용 함수 표현식 `sum _` 에서 빠진 인자 3개를 받는 함숫값을 인스턴스화 한다.

스칼라 컴파일러는 `a(1, 2, 3)` 의 함숫값의 apply 메서드에 대한 호출로 해석해 1, 2, 3을 전달한다.

따라서 `a(1, 2, 3)` 은 `a.apply(1, 2, 3)` 을 짧게 쓴 것이다.

다음과 같이 필요한 인자중 일부만 넘겨서 부분 적용 함수를 만들 수도 있다.

```scala
val b = sum(1, _:Int, 3)

b(2)
// 6
```

아래는 **리터럴** 테스트와 **객체** 테스트 했을 경우 결과이다.

```scala
def makeIncreaser(more: Foo) = (x: Int) => x + more.f

var value = 1

val increaser = makeIncreaser(value)

value = 2

println(increaser(3))
// 4
``` 

```scala
case class Foo(var f: Int)

def makeIncreaser(more: Foo) = (x: Int) => x + more.f

val foo = Foo(1)

val increaser = makeIncreaser(foo)

foo.f = 2

println(increaser(3))
// 5
```

### 8.7 클로저

주어진 함수 리터럴부터 실행 시점에 만들어낸 객체인 함숫값 (객체) 을 클로저 (closure) 라고 한다.

자바스크립트의 클로저와 비슷할 것으로 판단.

### 8.8 특별한 형태의 함수 호출

#### 반복 파라미터

반복 가능한 인자를 표기하려면 별표 (*) 를 인자의 타입 다음에 추가하면 된다.

```scala
def echo(args: String*) =
  for (arg <- args) println(arg)

echo()
echo("one")
echo("hello", "world")
```

배열을 반복 인자로 전달하기 위해 다음과 같이 콜론 (:) 에 `_*` 기호를 추가해야 한다. 

> aka. 가변인자

#### 이름 붙인 인자

이름 붙인 인자를 이용해 호출하면 인자들의 순서를 바꾸어 전달해도 호출의 의미가 변하지 않는다.

```scala
def speed(distance: Float, time: Float): Float = 
  distance / time

speed(distance = 100, time = 10)

or 

speed(time = 10, distance = 100)
```

#### 디폴트 인잣값

스칼라에서 파라미터의 디폴트값을 지정할 수 있다.

```scala
def printTime(
  out: java.io.PrintStream = Console.out,
  divisor: Int = 1
) = 
  outprintln("time = " + System.currentTimeMillis() / divisor)
```

특정 파라미터를 명시하고 싶으면 다음과 같이 호출한다.

```println
printTime(divisor = 1000)
```

### 8.9 꼬리 재귀

마지막의 자신의 재귀 호출하는 경우를 꼬리재귀 (tail recursive) 라고 한다.

문제를 해결할때 재귀를 사용하는 것을 두려워하지 않아도 된다. 재귀를 사용하는 해법이 루프를 사용하는 해법보다 간결하고 우아한 경우가 종종 있다.

#### 꼬리 재귀 함수 추적

꼬리 재귀 함수는 재귀 호출마다 새로운 스택을 마들지 않고 같은 스택 프레임을 재활용 한다.

```scala
def boom(x: Int): Int = 
  if (x == 0) throw new Exception("boom!")
  else boom(x - 1) + 1
```

위 코드의 `boom` 함수는 재귀 호출 후에 더하기 연산을 수행하기 때문에 꼬리 재귀가 아니다.

실행하면 다음결과를 볼 수 있다.

```scala
boom(3)
java.lang.Exception: boom!
    at .boom(<console>:5)
    at .boom(<console>:6)
    at .boom(<console>:6)
    at .boom(<console>:6)
    at .<init>(<console>:6)
...
```

boom 을 수정해 꼬리 재귀로 만들면 다음과 같다.

```scala
def bang(x: Int): Int =
  if (x == 0) throw new Exception("bang!")
  else bang(x - 1)
```

```scala
bang(5)
java.lang.Exception: bang!
    at .bang(<console>:5)
    at .<init>(<console>:6)...
```

이번에는 `bang` 에 단 하나의 스택만 보인다.

#### 꼬리 재귀의 한계

JVM 명령어 집합만으로는 고수준의 꼬리 재귀를 구현하기에 어려움이 있기 때문에, 스칼라의 꼬리 재귀 최적화에는 한계가 있다.

꼬맂 재귀 최적화는 메서드나 중첩 함수가 마지막 연산으로서 자신을 직접 호출하는 경우에만 이뤄진다.

### 8.10 결론

스칼라의 함수를 알아보았다.

스칼라는 메서드 이외에도 지역함수, 함수 리터럴, 함숫값을 제공하며 일반적인 함수 호출 외에, 부분 적용 함수와 반복 인자등을 사용할 수 있다.

다음장에서는 함수의 지원을 통한 흐름제어를 알아보자.

## Chapter 09 흐름 제어 추상화

스칼라에는 내장 제어 추상화가 많지 않다.

하지만 자신의 고유한 제어 추상화를 작성할 수 있다.

### 9.1 코드 중복 줄이기

함수를 인자로 받는 함수를 고차 함수 (higher-order function) 이라고 하는데 이를 이용하여 코드를 더 같단하게 압축할 수 있는 기회를 제공한다.

고차 함수를 사용할 때의 장점 중 하나는 자신만의 추상화한 흐름 제어를 작성할 수 있어 코드의 중복을 줄일 수 있다는 점이다.

```scala
object FileMatcher {
  private def filesHere = (new java.io.File(".")).listFiles

  private def filesMatching(matcher: String => Boolean) = 
    for (file <- filesHere; if matcher(file.getName))
      yield file
  
  def fileEnding(query: String) =
    filesMatching(_.endsWith(query))

  def filesContaining(query: String) = 
    filesMatching(_.contains(query))

  def filesRegex(query: String) =
    filesMatching(_.matches(query))
}
```

### 9.2 클라이언트 코드 단순하게 만들기

```scala
def containsOdd(nums: List[Int]) = nums.exists(_ % 2 == 1)
```

위 코드와 같이 `exists` 와 같은 루프 메서드를 사용하면 코드를 더 단순하게 만들수 있다.

### 9.3 커링

```scala
def curriedSum(x: Int)(y: Int) = x + y

curriedSum(1)(2)
// 3
```

위와 같이 함수를 연속적으로 호출하여 호출 가능한 값을 반환하는 것이다.

### 9.4 새로운 제어 구조 작성

이전 `try ~ catch ~ finally` 구문에서 사용했던 방식을 새로운 제어구조로 변경하여 다음과 같이 표현한다.

```scala
def widthPrintWriter(file: File, op: PrintWriter => Unit) = {
  val writer = new PrintWriter(file)
  try {
    op(writer)
  } finally {
    writer.close()
  }
}
```

```scala
withPrintWriter(
  new File("date.txt"),
  writer => writer.println(new java.util.Date)
)
```

위 메서드를 사용하는 경우 `withPrintWriter` 가 파일 닫기를 보장한다는 장점이 있다.

**제어 추상화를 하는 함수가 자원일 열어 특정 함수에게 해당 자원을 빌려주기 때문이다.**

다음은 커링을 이용한 빌려주기 방식을 이용한 파일쓰기 이다.

```scala
def withPrintWriter(file: File)(op: PrintWriter => Unit) = {
  val writer = new PrintWriter(file)
  try {
    op(writer)
  } finally {
    writer.close()
  }
}
```

```scala
val file = new File("date.txt")

withPrintWriter(file) {
  writer => writer.println(new java.util.Date)
}
```

File 인자를 포함하는 첫 인자 목록은 소괄호로 감쌌다.

함수 인자를 포함하는 두 번째 인자 목록에는 중괄호를 사용했다.

### 9.5 이름에 의한 호출 파라미터

```scala
def byNameAssert(predicate: => Boolean) =
  if (assertionsEnabled && !predicate)
    throw new AssertionError
```

```scala
def boolAssert(predicate: Boolean) =
  if (assertionsEnabled && !predicate)
    throw new AssertionError
```

```scala
byNameAssert(5 > 3)

boolAssert(5 > 3)
```

`byNameAssert` 과 `boolAssert` 의 결과도 사용하는 코드도 같다.

위 둘의 가장 중요한 차이점은 `boolAssert` 인자 타입이 `Boolean` 이므로, `boolAssert(5 > 3)` 의 괄호 안에 위치한 표현식을 `boolAssert` 호출 **직전에 계산**한다.

만약 `boolAssert` 인자타입이 `x / 0 == 0` 이라면 `boolAssert` 의 인자의 표현식을 계산함에 따라 에러가 발생된다.

하지만 같은 코드의 `byNameAssert` 는 예외가 발생하지 않는다.

### 9.6 결론

스칼라 라이브러리의 고차함수, 커링 등을 이용하여 좀 더 간결한 문법으로 활용하는 방법을 알아보았다.

## Chapter 10 상속과 구성

클래스 간의 근본적인 두 가지 관계인 상속 (inheritance) 과 구성 (composition) 을 비교할 것이다.

### 10.1 2차원 레이아웃 라이브러리

조립을 담당하는 above 와 beside 도 정의 할 것이다.

```scala
elem(s: String) = Element
```

```scala
val column1 = elem("hello") above elem("***")
val column2 = elem("***") above elem("world")

hello***
***world
```

조립 연산자는 특정 도메인의 요소를 결합하여 새로운 요소를 만들어내기 때문에 콤비네이터 (combinator) 라고 부른다.

### 10.2 추상 클래스

`abstract` 키워드로 아래와 같이 클래스를 정의 내린다.

```scala
abstract class Element {
  def contents: Array[String]
}
```

`contents` 는 `Element` 클래스의 추상 멤버 (abstract member) 이다.

`abstract` 수식자는 해당 클래스 안에 구현이 없는 추상 멤버가 있음을 알려준다. 때문에 추상클래스로는 인스턴스를 만들수 없다.

만약 메서드의 구현이 있다면 **구체 메서드 (concrete method)** 라고 한다.

### 10.3 파라미터 없는 메서드 정의 

필드나 메서드중 어떤 방식으로 속성을 정의 하더라도 클라이언트 코드에는 영향을 끼치지 말아야 한다는 **단일 접근 원칙 (uniform assess principle) 에 부합**한다.

```scala
"hello".length // 부수효과가 없으므로 () 를 사용하지 않음
println() // () 을 사용하는 편이 나음
```

호출 하는 함수가 어떠한 작업을 수행한다면 빈 괄호를 사용하라

하지만 프로퍼티에 대한 접근만을 수행한다면 괄호를 떼버려라.

### 10.4 클래스 확장

추상클래스를 확장하려면 `extends` 키워드를 사용하여 정의한다.

```scala
class ArrayElement(conts: Array[String]) extends Element {
  def contents: Array[String] = conts
}
```

`extends` 절은 다음 효과를 가진다.

* 확장 클래스는 추상클래스에서 비공개 (private) 가 아닌 멤버를 모두 물려받는다.
* 확장 클래스를 추상클래스의 서브타입 (subtype) 으로 만든다.

```
확장 클래스 (서브 클래스) -> 추상 클래스 (슈퍼 클래스)
```

### 10.5 메서드와 필드 오버라이드

스칼라에서는 필드와 메서드가 같은 네임스페이스에 속한다.

```java
class CompilesFine {
  private int f = 0;
  public int f() {
    return 1;
  }
}
```

위 자바 코드는 문제없이 컴파일 할 수 있지만 아래 스칼라 코드는 필드와 메서드가 같은 이름으로 컴파일 할 수 없다.

```scala
class WontCompile {
  private var f = 0
  def f = 1
}
```

자바에는 4개의 네임스페이스 (필드, 메서드, 타입, 패키지) 가 있지만 <br/>
스칼라에는 2개의 네임스페이스 (값, 타입) 만 있다.

### 10.6 파라미터 필드 정의

```scala
class Cat {
  val dangerous = false
}

class Tiger (
  override val dangerous: Boolean,
  private var age: Int
) extends Cat
```

아래 두 멤버는 각각 대응하는 인자로 초기화 된다.

인자의 이름을 임의로 `param1`, `param2` 라고 붙였다.

```scala
class Tiger(param1: Boolean, param: Int) extends Cat {
  override val dangerous = param1
  private var age = param2
}
```
 
중요한 것은 인자의 이름이 스코프에 있는 다른 이름과 충돌하지 않아야 한다는 것이다.

### 10.7 슈퍼 클래스 생성자 호출

```scala
class LineElements(s: String) extends ArrayElement(Array(s)) {
  override def width = s.length
  override def height = 1
}
```

`LineElement` 클래스는 `Array(s)` 를 `ArrayElement` 뒤어 괄호로 묶어 표기함으로써 `ArrayElement` 의 주 생성자에 전달한다.

### 10.8 override 수식자 사용

스칼라에서는 부모 클래스에 있는 구체 (concrete) 멤버를 오버라이드 하는 모든 멤버에 `override` 수식자를 붙여야 한다.

### 10.9 다형성과 동적 바인딩

상위 클래스를 상속 받는 클래스가 여러 타입의 객체를 참조할 수 있음을 다형성 (polymorphism) 이라고 한다.

**변수나 표현식에 대한 메서드 호출을 동적으로 바인딩 한다는 점이다.**

이는 실행시점에 실제로 그 객체가 어떤 타입인가를 따른다는 뜻이다.

### 10.10 final 멤버 선언

상속 클래스가 오버라이드 하지 못하게 막고 싶을때 사용

```scala
class ArrayElement extends Element {
  final override def demo() = {
    println("ArrayElement's implementation invoked")
  }
}
```

### 10.11 상속과 구성 사용

구성과 상속은 이미 존재하는 클래스를 이용해 새로운 클래스를 정의하는 두 가지 방법이다.

### 10.12 above, beside, toString 구현 

```scala
abstract class Element {
  def contents: Array[String]
  
  def width: Int = 
    if (height == 0) 0 else contents(0).length
  
  def height: Int = content.length
  
  def above(that: Element): Element = 
    new ArrayElement(this.contents ++ that.contents)

  def beside(that: Element): Element = 
    new ArrayElement(
      for (
        (line1, line2) <- this.contnets zip that.contnets
      ) yield line + line2
    )

  override def toString = contents mkString "\n"
}
```

### 10.13 팩토리 객체 정의

팩토리 객체는 다른 객체를 생성하는 메서드를 제공하는 개체다.

`new` 를 이용하여 직접 객체를 만들기 보다는 팩토리 메서드로 객체를 생성한다.

팩토리 메서드를 생성하는 이점은 **생성 기능을 한곳에 모아 제공하고 구체적인 내부 표현을 감출수 있다는 점**이다.

이렇게 세부사항을 숨기면 클라이언트는 라이브러리를 좀 더 쉽게 이해 가능하고, 나중에 클라이언트의 코드를 깨지 않고 구현을 변경하기에도 유리하다.

```scala
object Element {
  def elem(contents: Array[String]): Element = 
    new ArrayElement(contents)
  
  def elem(chr: Char, width: Int, height: Int): Element = 
    new UniformElement(chr, width, height)
  
  def elem(line: String): Element =
    new LineElement(line)
}
```

### 10.14 높이와 너비 조절

> 예제 코드 설명

### 10.15 한데 모아 시험해보기

```scala
import Element.elem

object Spiral {
  val space = elem(" ")
  val corner = elem("+")

  def spiral(nEdges: Int, direction: Int): Element = {
    if (nEdges == 1) 
      elem("+")
    else {
      val sp = spiral(nEdges - 1, (direction + 3) % 4)
      def verticalBar = elem('|', 1, sp.height)
      def horizontalBar = elem('-', sp.width, 1)
      if (direction == 0)
        (corner beside horizontalBar) above (sp beside space)
      else if (direction == 1)
        (sp above space) beside (corner above verticalBar)
      else if (direction == 2)
        (space beside sp) above (horizontalBar beside corner)
      else 
        (verticalBar above corner) beside (space above sp)
    }
  }

  def main(args: Array[String]) = {
    val nSides = args(0).toInt
    println(spiral(nSides, 0))
  }
}
```

### 10.16 결론

객체 지향의 많은 개념을 살펴보았다.