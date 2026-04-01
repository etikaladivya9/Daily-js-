//Functions
//Function are the heart of the js
//functions looks like blocks of bulidings in the code

//function are undefine

//functions
//functions in an resuseable block of code which perform the operation within code block
//function work in when ever we calling function or invoking a function
//functions types
//1)function declaration
//2)function with and without parameters and arguments
//3)function expression
//4)method object
//6)highorder function
//7)callback function
//8)arrowfunction =>es6
//10)event handler
//11)async functions
//12)IIFE function
//13)clourses =>lexical scope
//14)function recursion ,recursive function,reoccurring function
//15)currying function

function divi(a,b){
    console.log(a+b);
}
divi(10,20)

let addNum = function add(){
    console.log(2)
}
addNum();

let obj = {
    name:"Divya",
    course:"PFS",
}
console.log(obj.name)


function greet(name,callBack){
    console.log(name);
    callBack();
}
function sayBye(){
    console.log("divya");
}

greet("Hi",sayBye)

const arrowFun = (a,b) => {
    console.log(a+b);
    console.log(a)}

arrowFun(1,2);


((a,b)=>{
    console.log("Divya"+a+b);
})(1,2)


function outer(){
    let a=10;
    function inner(){
        console.log(a);
    }
    inner()
}
outer()


// {
//     outer(){
        // inner()        
// }
// }


function fact(n){
    if(n==0){
        return 1;
    }
    return n*fact(n-1);
}

console.log(fact(5));


function sum(a=2) {
    console.log(a)
}
sum()


