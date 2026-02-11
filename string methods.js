//strings
//"" , '',
//`` template/string   =>   Es6

//lengthproperty-->length
//accessing string-->str[],chart
//trimwhite soace methods-->trimstart,trimend,trim
//extract string methods-->slice,substring
//caseconversion and comparision-->tolowercase(),touppercase(),tolocaluppercase,tolocallowercase
//conversion and comparision-->tostring(),string
//search string methods-->indexOf,lastindex,includes,startswith,endswith,search,match
//repeat string methods--->
//replace--->replace,replaceAll
//concatination-->cancat
//join

//length
//indexof
//lastindexof
//slice
//tolowercase
//to uppercase
//trim
//replace
//charAt
//join
//repeat


let course = '        Javascript is soo cool'
let arr = [1, 3, 2, 4, 5]
console.log(course.length);
console.log(course.charAt(9))
console.log(course[10])
console.log(course.indexOf('a'));
console.log(course.lastIndexOf('l'));


//slice(small,large)
console.log(course.slice(0, -6));// it supperts -ve values
console.log(course.substring(0, 11))//not support -ve values
console.log(course.toUpperCase())
console.log(course.toLowerCase())
console.log(course.toLocaleUpperCase())
console.log(course.trim())
console.log(course.trimEnd())
console.log(course.trimStart())
console.log(course.replaceAll('a', 'p'))
//join
// converts array to string
// let a = course.join('')


for (let i = 0; i < 10; i++) {
    console.log('*'.repeat(i))
}

//includes
console.log(course.includes('s'))

//startwith

console.log(course.startsWith('Java'));//false
console.log(course.endsWith('cool'))//true

//concatnation
console.log(5 + 7 - '6' + 6 - 9 - 7 + '9');

let person = 'uday'
let greet = "morning"
let order = "biriyani"
// console.log('hii ' +person+' good'+  greet+'  your order is '+order);
console.log(`hii ${person} good ${greet} your food ${order} is ready`)
//templateliterls


let persondata = [
    { name: 'abc', age: 22, loc: 'hyd' },
    { name: 'def', age: 23, loc: 'hyd' },
    { name: 'ghi', age: 53, loc: 'hyd' },
    { name: 'jkl', age: 13, loc: 'hyd' },
    { name: 'mno', age: 26, loc: 'hyd' },
]
for (let i = 0; i < persondata.length; i++) {
    document.body.innerHTML +=  `
    <div id='data'>
         <h5>${persondata[i].name}</h5>
         <p>${persondata[i].age}</p>
         <p>${persondata[i].loc}</p>
    </div>


    `
}   
fruits=[{name:'apple',price:25},{name:'banana',price:22},{name:'mango',price:22},{name:'orange',price:22},{name:'kiwi',price:22},{name:'pineapple',price:22},{name:'coconut',price:22}]
 for (let i = 0; i <fruits.length; i++) {
    document.body.innerHTML +=  `
    <div id='data'>
         <h5>${fruits[i].name}</h5>
         <p>${fruits[i].price}</p>
         
    `
}  