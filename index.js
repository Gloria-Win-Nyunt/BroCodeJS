let x=3;
let y=2;
let z=1;

// z=Math.round(x)
// z=Math.floor(x);
// z=Math.ceil(x);
// z=Math.trunc(x)
// z=Math.pow(y,y);
// z=Math.sqrt(81);
// z=Math.log(10);
// z=Math.sin(45)
//z=Math.abs(z); // absolute value removes negative sign
// z=Math.sign();
// let max=Math.m(x,y,z)
// let min=Math.min(x,y,z)

//Random Number Generator
//Number between 1 and 6 
// let randomNum=Math.round(Math.random()*6)+1;

//Number between 1 and 100
// let randomNum=Math.round(Math.random()*100)+1;

// const min=50;
// const max=100;

// let randomNum=Math.round(Math.random()*(max-min))+min;
// console.log(randomNum);

// const myButton=document.getElementById('myButton');
// const myLabel1=document.getElementById('myLabel1');
// const myLabel2=document.getElementById('myLabel2');
// const myLabel3=document.getElementById('myLabel3');
// const min=1;
// const max=6;
// let randomNum1;
// let randomNum2;
// let randomNum3;
// myButton.onclick=function(){
//     randomNum1=Math.floor(Math.random()*max)+min;
//     randomNum2=Math.floor(Math.random()*max)+min;
//     randomNum3=Math.floor(Math.random()*max)+min;
//     myLabel1.textContent=randomNum1;
//     myLabel2.textContent=randomNum2;
//     myLabel3.textContent=randomNum3;
// }
// const myCheckbox=document.getElementById('check');
// const myRadiobox1=document.getElementById('visa');
// const myRadiobox2=document.getElementById('master');
// const myRadiobox3=document.getElementById('paypal');
// const submit=document.getElementById('button');
// const res1=document.getElementById('sub');
// const res2=document.getElementById('pay');

// submit.onclick=()=>{
//    if(myCheckbox.checked){
//     res1.textContent='You subscribed'
//    }
//    else{
//     res1.textContent='You select nothing'
//    }

//    if(myRadiobox1.checked){
//     res2.textContent='Your payment : visa'
//    }
//    else if(myRadiobox2.checked){
//     res2.textContent='Your payment : master'
//    }
//    else if(myRadiobox3.checked){
//     res2.textContent='Your payment: paypal'
//    }
//    else{
//     res2.textContent='You select nothing'
//    }
    
// }

// Ternary operator

// let age=21;
// let message=age>=18?'You are an adult':'You re a minor'
// console.log(message);
// let date=new Date();
// let time=date.getHours();
// let greeting=time<12?'good morning':'good afternoon'
// console.log(greeting);


// let purchaseAmount=125;
// let discount=purchaseAmount>=100?10:0;
// console.log(`Your total is ${purchaseAmount- (purchaseAmount*discount/100)}`);

//Switch cases
// let date=new Date();
// let day=date.getDay();
// switch(day){
//     case 1:console.log('Monday');break;
//     case 2:console.log('Tuesday');break;
//     case 3:console.log('Wednesday');break;
//     case 4:console.log('Thursday');break;
//     case 5:console.log('Friday');break;
//     case 6:console.log('Saturday');break;
//     case 7:console.log('Sunday');
//     default:console.log('no matches');
// }

let testScore=62;
let letterGrade;
switch(true){
    case testScore>=90: letterGrade='A'; break;
    case testScore>=80: letterGrade='B'; break;
    case testScore>=70: letterGrade='C'; break;
    case testScore>=60: letterGrade='D'; break;
    default: letterGrade='F'
}
console.log(letterGrade);