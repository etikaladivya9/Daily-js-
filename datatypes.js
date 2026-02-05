//premitive 

//which can store single value
//is immutable
// .number
let a=10
console.log(a);
console.log(typeof(a));
let b=10.9
console.log (b);
console.log(typeof(b));
// .boolen

let user=true/false
// .string
let str1='abc'
console.log(str1);
console.log(typeof(str1));
// ''/``/""

// .undefined

let x;
console.log(x);
// .null
let y=null
console.log(y);
console.log(typeof(y));

// .bigint
let r=3415627889464
let m=BigInt(87654123890876)
console.log(r);
console.log(typeof(r));
console.log(m);
console.log(typeof(m));

// .symol

let s1=Symbol(123)
console.log(s1);
console.log(typeof(s1));

//non premitive
// .hold multiple values
// .is mutable

// .array

let arr=[1,4,6,8,92,1,3];
console.log(arr);
console.log(typeof(arr));
console.log((arr[0]));
// .object
let users= {
  name: "John",
  age: 25
};
console.log(users)

// .array of object
let arrobj=[
    {name:'Abc',age:12},
    {
        name:'dfgh',age:345
    }
]

console.log(arrobj);
console.log((typeof(arrobj)));