// let obj={
//     name:'avs'
//     ,age:11,
// }
// obj.name='uhgghj'
// console.log(obj)

// let a='ab'
// // a='cd'
// a.slice(0,1)
// console.log(a)

// let arr=[1,3,4,5]
// let array=new[1,3,4,6,7]

fruits=['apple','banana','mango','orange','kiwi','pineapple','coconut']
newfruits= fruits
//length 
console.log(fruits.length)

//index
console.log(fruits.indexOf('orange'))
//lastindex
//includes
console.log(fruits.includes('apple'))
//concat
console.log(fruits.concat(newfruits));
//push
fruits.push('gava')
console.log(fruits)
//pop
console.log(fruits.pop())
//shift
fruits.unshift();
console.log(fruits);
fruits.shift();
console.log(fruits)
//split-->converts to string to array
let data='js'
console.log(data.split(''))
//join -->converts array to string
console.log(fruits.join('+'))
//slice
console.log(fruits.slice(0,6))
//splice--->add a new value ,replace a value,
fruits.splice(0,4);
console.log(fruits);
//reverse
fruits.reverse(0,4)
console.log(fruits)

//sort
num=[1,5,3,9,'A','r',7,'k','Z','z']
console.log(num.sort())