console.log(`(NaN == NaN): ${NaN == NaN}`) // false
console.log(`isNaN(null): ${isNaN(null)}`) // false
console.log(`Number(undefined): ${Number(undefined)}`); // NaN
console.log(`[] == 0: ${[] == 0}`); // false
console.log(`undefined === null: ${undefined === null}`); // false
console.log(`-0/+0: ${-0/+0}`); // 0
console.log(`typeof {a: 1}: ${typeof { a: 1 }}`); // object
console.log(`[] instanceof Array: ${[] instanceof Array}`); //
console.log(`+[1]: ${+[1]}`); // 1
console.log(`typeof undefined: ${typeof undefined}`); // undefined
console.log(`[] == ![]: ${[] == ![]}`); // true
console.log(`[] == '': ${[] == ''}`); // false
console.log(`1 - "2": ${1 - "2"}`); // -1 
console.log(`typeof [1, 2, 4]: ${typeof [1, 2, 4]}`); // object
console.log(`Number([]): ${Number([])}`); // 0 
console.log(`Math.min() > Math.max(): ${Math.min() > Math.max()}`); // false
console.log(`undefined >= null: ${undefined >= null}`) // false
console.log(`isNaN({}): ${isNaN({})}`) // false
console.log(`Number([1, 2]): ${Number([1, 2])}`); // NaN
console.log(`[2] * [2]: ${[2] * [2]}`); // 4
console.log(`undefined == null: ${undefined == null}`); // true
console.log(`typeof "something": ${typeof "something"}`); // string
console.log(`String({}): ${String({})}`); // 'object Object'
console.log(`"" - 1: ${"" - 1}`); // -1
console.log(`typeof Infinity: ${typeof Infinity}`); // number
console.log(`new Number(3).valueOf(): ${new Number(3).valueOf()}`); // 3
console.log(`String(new Set()): ${String(new Set())}`); // 
console.log(`NaN === NaN:, ${NaN === NaN}`); // false
console.log(`Number.isNaN(NaN): ${Number.isNaN(NaN)}`) // 1
console.log(`1 == '1': ${1 == " 1 "}`); // true
console.log(`Number.isNaN(undefined): ${Number.isNaN(undefined)}`) // false
console.log(`(NaN != NaN): ${NaN != NaN}`) // true
console.log(`isNaN(1): ${isNaN(1)}`) // false
console.log(`isNaN('some text'): ${isNaN("some text")}`) // true
console.log(`undefined == null: ${undefined == null}`) // true
console.log(`Number.isNaN(1): ${Number.isNaN(1)}`) // false
console.log(`typeof new Date(): ${typeof new Date()}`); // function
console.log(`isNaN(undefined): ${isNaN(undefined)}`) // true
console.log(`NaN ** 0: ${NaN ** 0}`) // 1
console.log(`isNaN(NaN): ${isNaN(NaN)}`) // true
console.log(`NaN === NaN: ${NaN === NaN}`) // false
console.log(`Number.isNaN({}): ${Number.isNaN({})}`) // 1
console.log(`isNaN(null): ${isNaN(null)}`) // true
console.log(`Number.isNaN(null): ${Number.isNaN(null)}`) // true
console.log(`Number.isNaN(null): ${Number.isNaN(null)}`) // true
console.log(`(NaN !== NaN): ${NaN !== NaN}`) // true
console.log(`Number([1]): ${Number([1])}`); // 
console.log(`true + false: ${true + false}`); // 1
console.log(`isNaN("some text"): ${isNaN("some text")}`) // true
console.log(`Boolean(0): ${Boolean(0)}`); // false
console.log(`!0: ${!0}`); // true
console.log(`!!0: ${!!0}`); // false
console.log(`Boolean(0): ${Boolean(0)}`); // false
console.log(`!!"": ${!!""}`); //  false
console.log(`typeof []: ${typeof []}`); // object
console.log(`typeof null: ${typeof null}`); // object
console.log(`String(new Promise(()=>{})): ${String(new Promise(()=>{}))}`); // [object Promise]
console.log(`!!new Boolean(0): ${!!new Boolean(0)}`); // true
console.log(`typeof function () {}: ${typeof function () { }}`); // function
console.log(`Array.isArray([]): ${Array.isArray([])}`); // true
console.log(`0 === 0: ${0 === -0}`); // 
console.log(`NaN === NaN: ${NaN === NaN}`); // false
console.log(`0 === '0': ${0 === "0"}`); // false
// console.log(`[] === []: ${[] === []}`); // false
var a = [],
    b = a
console.log(`a === b: ${a === b}`); // true
console.log(`+true: ${+true}`); // 1
console.log(`[,,,].length, ${[,,,].length}`); // 3

console.log(`+null: ${+null}`); // 0
console.log(`+undefined: ${+undefined}`); // NaN
console.log(`!![]: ${!![]}`); // true
console.log(`+'  1e3  ': ${+"  1e3  "}`); // 1000
console.log(`+[]: ${+[]}`); // 0
console.log(`Number.isNaN('some text'): ${Number.isNaN("some text")}`) // true
console.log(`+[1, 2, 3]: ${+[1, 2, 3]}`); // NaN
console.log(`1 == [1]: ${1 == [1]}`); // true
console.log(`+{}": ${+{}}`); // 0
console.log(`+new Date(): ${+new Date()}`); // 
var obj1 = {};
console.log(`+obj1.someField: ${+obj1.someField}`); // undefined
console.log(`!!{}: ${!!{}}`); // NaN
console.log(`NaN === NaN: ${NaN === NaN}`); // false
console.log(`undefined == 0: ${undefined == 0}`); // false
console.log(`null == 0: ${null == 0}`); // true
console.log(`undefined >= 0: ${undefined >= 0}`); // false
console.log(`String([]): ${String([])}`); // '' 
console.log(`null >= 0: ${null >= 0}`); // true
console.log(`1 === '1': ${1 === "1"}`); // false
console.log(`null <= 0: ${null <= 0}`) // true
console.log(`undefined > 0: ${undefined < 0}`) // false
console.log(`0 == [1]: ${0 == [1]}`); // false
console.log(`[] == []: ${[] == []}`); //false 
console.log(`1 == true: ${1 == true}`); // true
console.log(`true > []: ${true > []}`); // true
console.log(`'банан' > 'арбуз': ${"банан" > "арбуз"}`); // true
console.log(`'Банан' > 'арбуз': ${"Аанан" > "арбуз"}`); // false
console.log(`'2' > '11': ${"2" > "11"}`); // true
var date1 = new Date("2019-06-22T12:34:56");
var date2 = new Date("2019-06-22T12:34:56");
console.log(`date1 == date2: ${date1 == date2}`); // false
console.log(`date1 >= date2: ${date1 >= date2}`); // true
console.log(`null - 100: ${null - 100}`) // -100
console.log(`null + undefined: ${null + undefined}`) // NaN
let first = null
let second = undefined
let third = first + second // NaN
console.log(`undefined > 0: ${undefined > 0}`) // false
console.log(`null === 0: ${null === 0}`) // false
console.log(`undefined > null: ${undefined > null}`) // false
const doNothing = () => {}
console.log(doNothing()) //
console.log(`undefined >= 0: ${undefined >= 0}`) // false
console.log(`null + null: ${null + null}`) // 0
console.log(`NaN == NaN: ${NaN == NaN}`); // false
console.log(`undefined === 0: ${undefined === 0}`) // false
console.log(`null - null: ${null - null}`) // 0
const object = {}
console.log(object.name) // undefined
console.log(`undefined == 0: ${undefined == 0}`) // false
console.log(`undefined < null: ${undefined < null}`) // false
console.log(`typeof Math.sin(): ${typeof Math.sin()}`); // number
console.log(`undefined + 1: ${undefined + 1}`) // NaN
console.log(`typeof 3.14: ${typeof 3.14}`); //  number
console.log(`undefined => 0: ${undefined <= 0}`) // false
console.log(`null == 0: ${null == 0}`) // false
console.log(`undefined <= null: ${undefined <= null}`) // false
function sum(a, b) {
  return a + b
}
console.log(`sum(1): ${sum(1)}`) // NaN
console.log(`typeof function() {}: ${typeof function () {}}`); // function
console.log(`null/null: ${null / null}`) // NaN 
console.log(`typeof "": ${typeof ""}`); // string
console.log(`null > 0: ${null > 0}`) // false
console.log(`typeof new Number(3): ${typeof new Number(3)}`); // object 
console.log(
  `typeof new Promise():
  ${typeof new Promise((resolve, reject) => {})}
`); // object
console.log(`typeof 1: ${typeof typeof 1}`); // string
console.log(`String(new Map()): ${String(new Map())}`); //  [object Map]
console.log(`typeof null: ${typeof null}`); // object
console.log(`1 + "2" + 3: ${typeof 1 + "2" + "3"}`); // number23
console.log(`typeof false: ${typeof false}`); // boolean
let obj = {
  set: "name",
  func: () => {},
};
console.log(`typeof obj.set: ${typeof obj.set}`); // string
console.log(`typeof obj.func: ${typeof obj.func()}`); // underfined
console.log(`typeof obj.func: ${typeof obj.func}`); // function
console.log(`[1, 2, 3] + [4, 5, 6]: ${[1, 2, 3] + [4, 5, 6]}`); // 1,2,34,5,6
console.log(`"1,2,3" === [1,2,3].join(): ${"1,2,3" === [1,2,3].join()}`);
console.log(`0.2 + 0.1 === 0.3: ${0.2 + 0.1 === 0.3}`); // false
console.log(`10,2: ${10,2}`); // 10, 2 :о)
console.log(`+!![]: ${+!![]}`); // true
console.log(`true == "true": ${true == "true"}`); // false
console.log(`typeof class C {}: ${typeof class C {}}`); // function
console.log(`0/0: ${0/0}`); // NaN
console.log(`-0 === +0: ${-0 === +0}`); // false
console.log(`null < 0: ${null < 0}`) // false
console.log(`Object.is(0, -0): ${Object.is(NaN, NaN)}`); // true
console.log(`null >= 0: ${null >= 0}`) //true
console.log(`!3 + !3: ${!3 + !3}`); // false + false = 0
console.log(`[] + []: ${[] + []}`); // ""
console.log(`1 + 2 + "3": ${1 + 2 + "3"}`); // 33
console.log(`typeof true: ${typeof true}`); // boolean
console.log(`typeof 37: ${typeof 37}`); // number
console.log(`1 + "2" + "3": ${1 + "2" + "3"}`); //  123
console.log(`typeof NaN: ${typeof NaN}`); // number 
console.log(`Object.is(0, -0): ${Object.is(0, -0)}`); // false
console.log(`undefined + false: ${undefined + false}`); // NaN
console.log(`true == ![]: ${true == ![]}`); // false
console.log(`true == []: ${true == []}`); // false
console.log(`!!"false" === !!"true": ${!!"false" === !!"true"}`); // true
console.log(`[0] == 0: ${[0] == 0}`); // true 
console.log(`undefined + undefined: ${undefined + undefined}`) // NaN
console.log(`Number(null): ${Number(null)}`); // 0
console.log(`String(new Object()): ${String(new Object())}`); //[object Object] 
console.log(`new Number(3): ${new Number(3)}`); // {3}
function test(){ console.log(arguments); };
test(); // [Arguments] {}