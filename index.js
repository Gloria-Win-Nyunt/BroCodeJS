// let fullName='Gloria Win';
// let age=23;
// let isStudent=true;

// document.getElementById('p1').textContent=`Your name is ${fullName}`;
// document.getElementById('p2').textContent=`You are ${age} years old`;
// document.getElementById('p3').textContent=`Enrolled: ${isStudent}`;

// let students =30;
// students=students-1;
// students=students*2;
// students=students/2;
// students=students**2; //power 2
// students=students%2; //remainder
// students+=1;

// let result= 1+2*3+4**2;


// console.log(result);

// let username=prompt("what's your username");
// console.log(username);


// document.getElementById('mySubmit').onclick=function(){
//     let username=document.querySelector('input').value;
//     document.getElementById('myH1').textContent=`Welcome ${username}`
// }
// btn.addEventListener('click',()=>{
//  return username.value;
// })
// let span=document.querySelector('span');
// span.textContent=username.value;

//Type conversion 
// let age=Number(prompt('how old are you?'))
// age+=1;
// console.log(age);

// let x;
// let y;
// let z;

// x=Number(x);
// y=String(y);
// z=Boolean(z);

// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);
// document.querySelector('button').onclick=function(){
//     const pi=3.14159;
//     let radius=document.querySelector('input').value;
//     let circumference=2*pi*radius;
//     document.getElementById('result').textContent=`The circumstane of circle with ${radius} is ${circumference}cm`;
// }

//Counter program

let num=0;
document.getElementById('de').onclick=function(){
    document.querySelector('h1').textContent=--num;
}

document.getElementById('re').onclick=function(){
    num=0;
    document.querySelector('h1').textContent=num;
}

document.getElementById('in').onclick=function(){
    document.querySelector('h1').textContent=++num;
}