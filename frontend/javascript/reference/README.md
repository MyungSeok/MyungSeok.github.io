# Reference

## 공백 체크

```javascript
var blankPattern = /^\s+|\s+$/g;

console.log('   '.replace(blankPattern, ''));     // ""

console.log(blankPattern.test(''));              // false 
console.log(blankPattern.test('  '));             // true 
```

## 조건문

Javascript 에서 `if` 문에 들어가는 조건식이 다음과 같은 제한 사항을 갖는다.

```javascript
console.log(null ? 'A' : 'B')           // B
console.log(undefined ? 'A' : 'B')      // B
console.log('' ? 'A' : 'B')             // B
console.log(0 ? 'A' : 'B')              // B

console.log(' ' ? 'A' : 'B')            // A
console.log(-1 ? 'A' : 'B')             // A
```

## 반복문

비트 연산 `~` 을 활용한 반복문

```javascript
for (let len = array.length; ~len; --len) {
  /* statement */
}
```