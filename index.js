// function shopping(product){
//     console.log('product name :'+product);
//     console.log('go to shop');
//     console.log('buy a product');
//     console.log('go back home');
// }

// shopping('pen');
// shopping('gucci')

// function add(num1,num2){
//     return num1+num2;
// }
// document.querySelector('p').textContent=add(10,10);

// function getAge(year){
//     return 2024-year;
// }

// console.log("You are "+getAge(2000)+" years old")

// function add(a,b=0){
//     console.log(a,b);
// }
// add(5);

//Rest parameter
// function test(a,...b){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// test(1,2,3,4,5)
// ကွင်းစကွင်းပိတ်ထဲမှာ အစက်သုံးစက်ရှိမှ rest parameter

//Function statement 
// function myName(){
//     console.log('gloria');
// }

//Function expression
// တခုအနေနဲ့သိမ်းတာ
// let sayHi=function(msg){
//     console.log(msg);
// }

// sayHi('hello');

//Callback function 
// function saysMyname(name,fun){
//    console.log(fun(name)); 
// }

// saysMyname('gloria',function(name){return name;});

//Callback function part-2
// function twice(num,modifier){
//     num=modifier(num)
//     let result=num*2;
//     console.log(result);
// }

// twice(5,function(num){return num+6});


//Arrow function 1
// let sayHi=()=>console.log('hello');
// sayHi();

//Arrow function 2
// let sum=(a,b)=>a+b;
// console.log(sum(50,40));

//Arrow function 3
// let greet=g=>g;
// console.log(greet('hi'));

// let twice=num=>num*2;
// console.log(twice(10));



// let cat={
//     name:'gloria',
//     age:3,
//     isMale:true,
//     behaviour:()=>{
//         console.log('playful');
//     }
// }

// let mixture=new Array('dog',20,1.3,true); // array object constructor
// console.log(mixture.length);

// let mixture=['dog',20,1.3,true];
// mixture[3]=false;
// mixture[4]='glori';
// console.log(mixture);

// let fruits=['apple','mango'];
// fruits[2]='grape';
// console.log(fruits[fruits.length-1]); // retrieve last index value from array

//Nested arrays
// let arr=[
//     ['a','b','c'],
//     [1,2,3]
// ]

// console.log(arr[0][2]);

let data1=[1,2,3];
let data2=[4,5,6];
// let result=[1,2,3,4,5,6]// desired output
// let result=[data1,data2];
// console.log(result);

//Spread operator
// let result=[...data1,...data2];
// console.log(result);

// function add(a,b,c){
//     console.log(a+b+c);
// }

// add(...data1);
// add(...data2);


//destructuring

// let datas=['MgMg',20,'Ttu'];
// let [name,age,school]=datas;
// console.log(name,age,school);

// function add([a,b,c]){
//     console.log(a+b+c);
// }

// add([1,2,4]);

