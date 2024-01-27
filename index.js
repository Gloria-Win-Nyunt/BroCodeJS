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

const myButton=document.getElementById('myButton');
const myLabel1=document.getElementById('myLabel1');
const myLabel2=document.getElementById('myLabel2');
const myLabel3=document.getElementById('myLabel3');
const min=1;
const max=6;
let randomNum1;
let randomNum2;
let randomNum3;
myButton.onclick=function(){
    randomNum1=Math.floor(Math.random()*max)+min;
    randomNum2=Math.floor(Math.random()*max)+min;
    randomNum3=Math.floor(Math.random()*max)+min;
    myLabel1.textContent=randomNum1;
    myLabel2.textContent=randomNum2;
    myLabel3.textContent=randomNum3;
}