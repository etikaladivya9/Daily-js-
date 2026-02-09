//.if (simple if)
//if else 
//if ..else ...if(else if lader)
//nested if 
//switch case
//terinory operator


// if(condition){
//     code
// }
age = 40
if (age >= 18) {
    console.log('can vote')
}

// let num=Number(prompt('enter a number'))

// if (num%2==0){
//     console.log('even number');
// }else{
//     console.log('odd number');
// }


let isgender = false
if (isgender) {
    console.log('male')
} else {
    console.log('female')
}

//if...else if..else(elseif lader) 

// let marks=Number(prompt('enternumber'))

// if(marks>0 && marks<100){
//     if(marks>75 &&marks>=100){
//         console.log('gread a')

//     }else if(marks>50 && marks<75){
//         console.log('gread b')
//     }else if(marks>=35 && marks<50){
//         console.log('gread c')
//     }else{
//         console.log('fail')
//     }
// }else{
//     console.log('enter marks')
// }


// let sport=prompt('enter fav sport')

// if (sport=='cricket'){
// console.log('sachin');
// }else if(sport=='soccer'){
//     console.log('messi')
// }else if(sport=='chess'){
//     console.log('anand')
// }else{
//     console.log('no data avaliable')
// }



// //swithch case
// //switch(condition){
// case1:{
//     code
// }
// case2:{
//     code
// }

// }


// let day = Number(prompt('enter a number'))
// if (day>=0 && day<=6) {
//     switch (day) {
//         case 0:
//             console.log('sunday');
//             break;
//         case 1:
//             console.log('monday');
//             break;
//         case 2:
//             console.log('tuesday');
//             break;
//         case 3:
//             console.log('wed');
//             break;
//                  case 4:
//             console.log('thu');
//             break;
//                  case 5:
//             console.log('fri');
//             break;
//                  case 6:
//             console.log('sat');
//             break;
//         default:
//             console.log('enter correct number');
//             break;

//     }
// } else {
//     console.log('enter');
// }

for(let i=0;i<=5;i++){
if (i==3){
    continue;
}
console.log(i)
}
