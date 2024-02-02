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

// let data1=[1,2,3];
// let data2=[4,5,6];
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
// let animals=['cat','dog','snake','rabbit'];
// animals.push('duck'); // နောက်ဆုံးခန်းကထည့်
// animals.unshift('ant'); // ရှေ့ခန်းကထည့်
// animals.pop();//နောက်ဆုံးခန်းကိုထုတ် parameter no need
// animals.shift();//ရှေ့ခန်းက value ကိုထုတ်
// let index=animals.indexOf('snake');// အခန်းနံပါတ်ရှာ
// console.log(animals.join(':'));//array ခန်းထဲက value တွေကို ဆက်
// animals.splice(0,2)// array ထဲက data တွေကို ဘယ်ကနေဘယ်ထိ တိတိကျကျဖြတ်ချင်တဲ့နေရာသုံး
// console.log(animals);

//Array advanced methods
//map method

// let nums=[1,2,3,4,5];
// let newArr=nums.map((n)=>{
//     return n+100;
//  });
// console.log(newArr);

// let animals=['cat','dog','snake','rabbit'];
// let newAnimals=animals.map((ani)=>{
//     return 'Mr.'+ani;
// })

// console.log(newAnimals);

//Filter method
// let nums=[1,2,3,4,5,6];
// // let result=[2,4,6];
// let result=nums.filter((num)=>{
//    return num!=3;
  
// })
// console.log(result);

//Reduce method
// let nums=[1,2,3,4,5,6];
// let result=nums.reduce((prev,current)=>{
//     console.log(prev,current);
//     return prev*current;
// })
// console.log(result);

//Array methods
// let nums=[1,2,3,4,5,6];

// //map
// let newArr=nums.map(num=>num+100)
// console.log(newArr);

// //filter
// let filteredNumbers=nums.filter(num=>num%2==0)
// console.log(filteredNumbers);

// //reduced
// let reducedNumbers=nums.reduce((prev,current)=>prev+current)
// console.log(reducedNumbers);

//Refactoring ဆိုတာ line အရေအတွက်နဲပီး ဖတ်ရင်ရှင်းလင်းနေအောင်လုပ်တာ parameter ကွင်းဖြုတ်လို့ရရင်ဖြုတ် {} ဖြုတ်ရရင်ဖြုတ်

// let str=new String('hello');// low level declaration
// console.log(str);

//String properties
// let str='hello,world,again';
// console.log(str.length); //length property
// console.log(str[4]);//retrive value with index
// console.log(str.toUpperCase());// ပင်မ data ကိုမချိန်း
// console.log(str.toLowerCase());
// console.log(str.trim());//space တွေကိုဖြုတ်ချင် ရင်သုံး string အသစ်တခု return ပြန်
// let splitData=str.split(',');
// console.log(splitData);

// let num=new Number(12.5);
// let fix=num.toFixed(); //.5 ကျော်ရင်တိုးယူ အနီးစပ်ဆုံးကိန်းယူ
// console.log(fix);

// let isTrue=new Boolean(true);
// let rest=isTrue.toString()
// console.log(typeof rest);

//Objects
   //parent code
// console.log(this); //window
// let people={
//     name:'john',
//     age:20,
//     // eat:()=>{
//     //     console.log('person is eating');
//     // } မသုံးသင့်
//     //short form
 
   
//    eat(){
//     //child code
//     setTimeout(()=>{
//         console.log(this);
//     },3000)
//    }
// }

// people.eat();
// console.log(person);
// console.log(person.age); //dot notation
// console.log(person["name"]);//ဆွဲထုတ်ချင်တဲ့ property ကို string ပုံစံနဲ့ရေး

//why we use array notation
// let propName='age';
// console.log(person[propName]);

// person.name='John Doe'; //Overriding
// person.eat();
// person.drink=function(){
//     console.log('person is drinking');
// }
// console.log(person);


// console.log(window); //window object (default object)

// setTimeout(()=>{
//     console.log('I am callback');
// },3000);

//This keyword ဆိုတာ current function ရဲ့ object ကိုလှမ်းထောက်ပေးတာဖြစ်တယ်


// method => method's object
// regular func => window
// arrow func => ကိုယ်ပိုင် this keyword မရှိ မိဘဆီကယူသုံး lexical scoping လို့ခေါ်တယ်

//Object spread
// let obj1={
//     myName:'gloria',
//     myAge:23
// }
// let obj2={
//     myHairColor:'black',
// }
// let obj3={...obj1,...obj2};
// console.log(obj3);

//object destructuring
// let {name,age}={
//     name:'gloria',
//     age:20
// }
// console.log(name,age);

//property shorthand

// let name='gloria';// pure code
// let age=23;
// let person={
//     name:name,
//     age:age
// }
// console.log(person);

// let name='gloria';// property shorthand
// let age=23;
// let person={
//    name,age
// }
// console.log(person);
//property နာမည်နဲ့ variable name နဲ့တူနေမယ်ဆိုရင် shorthand ကိုအသုံးချလို့ရ

//javascript data structure
// let people=[
//     {name:'gloria',age:23,gender:'male'},
//     {name:'maria',age:53,gender:'male'},
//     {name:'aria',age:29,gender:'female'}
// ]
// //Map method 
// let result=people.map((user)=>{
//     return user.name;
// })
// console.log(result);

// // Filter method

// let searchKeyword=prompt('search person: ');
// let search=people.filter((user)=>{
//     return user.name.includes(searchKeyword)
// })
// console.log(search);


//Json သတ်မှတ်ထားတဲ့ format နဲ့ရေးတဲ့ string 
// transfering data from one language to another
// long form of Json= javascript object notation

//Json format
//Json မှာသိမ်းလို့ရတဲ့ data type 6 မျိုး = string,number,boolean,array,object,null

//change Json format to javascript object using parse
/*
let person='{"name":"gloria","age":20}'
let obj=JSON.parse(person);
console.log(obj.name);
*/ //accept string with json format

//change javascript object to json using stringify
// let person={
//     name:'gloria',
//     age:20
// }
// console.log(JSON.stringify(person));

// let tired=prompt('Are you tired? yes/no');
// if(tired==='yes'){
//     console.log('rest well');
// }
// else if(tired==='no'){
//     console.log('go back to work');
// }
// else{
//     console.log('you typed wrong');
// }

// let product_prices=[100,500,100,300,700,200,100];
// let price_100=product_prices.map((price)=>{
//    if(price===100)price-=30;
//    return price;
// })
// console.log(price_100);

// let people=[
//     {name:'john',age:25},
//     {name:'jane',age:20,gender:'f'},
//     {name:'jack',age:40,gender:'m'},
//     {name:'mary',age:20,gender:'f'},
//     {name:'yuya',age:20,gender:'f'},
//     {name:'nodd',age:90}
// ]
// let result=people.map((user)=>{
//     if(user.gender==='f'){
//         return user.gender='female'
//     }
//     else if(user.gender==='m'){
//         return user.gender='male'
//     }
//     else{
//         return user.gender='unknown'
//     }
// })

// people=people.map((user)=>{
//     if(user.gender){
//         if(user.gender==='m')
//         user.gender='male'
//         if(user.gender==='f')
//         user.gender='female'
//     }
//     else
//         user.gender='unknown'
//     return user
// })

// console.log(people);

// ternary operator

// let age=19;
// let hasLicense=age>18?'yes':'no';
// console.log(hasLicense);

// switch cases break မလုပ်ခဲ့ရင်အောက်က case တွေပါ ဆက် run 


// people=people.map((person)=>{
//     switch(person.gender){
//         case 'm':person.gender='male';break;
//         case 'f':person.gender='female';break;
//         default: person.gender='unknown'

//     }
//     return person
// })
// console.log(people);

//while loop
// let x=0
// while(x<3){
//     console.log('Hi'+x);
//     x++
// }

// let people=['mgmg','kyawkyaw','ayeaye','susu'];
// let person={
//     name:'gloria',
//     age:20
// }
// x=0;
// while(x<people.length){
//     console.log(people[x]);
//     x++;
// }
// people.map((m)=>{
//     console.log(m);
// })
// console.log(people);

//Do while loop 
// let x=0
// do{
//     console.log('work');
//     x++;
// }while(x<3)

// for loop

// for(let x=0;x<people.length;x++){
//    console.log(people[x]);
// }

//for of loop
// for (person of people) {
//     console.log(person);
// }

//for in loop (objects)
// for (key in person) {
//    console.log(`${key} is ${person[key]}`);
// }

// //for in loop (arrays)
// for(user in people){
//     console.log(`index ${user} is ${people[user]}`);
// }

// {
//     {
//         let x=10;
//         console.log(x);
//     }

// }   


// class Car{
//     wheels=4;
//     color="black"
//     drive(){
//         console.log('car is driving');
//     }
// }

// let car=new Car
// console.log(car.color);

// let car2=new Car
// car2.color="red"
// console.log(car2.color);


//Calculator blueprint
// class Calculator{
//     static PI=3.14
//     add(n1,n2){
//         return n1+n2;
//     }
//     sub(n1,n2){
//         return n1-n2;
//     }
//     mul(n1,n2){
//         return n1*n2
//     }
//     div(n1,n2){
//         return n1/n2
//     }
//     rem(n1,n2){
//         return n1%n2
//     }
// }

// let calculator=new Calculator
// console.log(calculator.rem(3,2))
// console.log(calculator.PI);

//object  1 ခုမတည်ဆောက်ပဲ တိုက်ရိုက်ခေါ်သုံးချင်ရင် property ကို static တပ်ပေးလိုက် 
// static ပါတဲ့ property က classname နဲ့တိုက်ရိုက်ခေါ်သုံးလို့ရတယ်

// console.log(Calculator.PI);

// class Calculator{
//    PI=3.14
//    name='casio'
//    area(r){
//         return this.PI*r**2
//     }
//     volume(r,h){
//         return this.area(r)*h;
//     }
//     static info(){
//         let calculator=new Calculator
//         console.log('i am '+calculator.name+' calculator')
//     }
// }
// // let calculator=new Calculator;
// // console.log(calculator.volume(2,3));

// Calculator.info();


// class Car{
//     Name=''
//     wheels=4;
//     constructor(type,wheels){
//         this.Name=type;
//         this.wheels=wheels
//         this.drive()
//     }
//     drive(){
//         console.log(this.Name+" is driving");
//     }
//     getWheel(){
//         console.log(this.Name+' has '+this.wheels+' wheels');
//     }
// }

// new Car('toyota')
// new Car('BMW',10).getWheel();

// class Car{
//     Name="toyota"
//     #hp=200;
//     getHP(){
//         console.log('Horse power is '+this.#hp);
//     }
// }

// let car=new Car;
// car.Name='BMW'
// console.log(car.getHP());

class Animal{
    #age=1
    Name='';
    constructor(name){
        this.Name=name;
    }
    run(){
        console.log(`${this.Name} is running`);
    }
}
class Dog extends Animal{
    bark(){
        console.log(this.Name+' wolf wolf');
    }
}

let animal=new Animal;
animal.age=4
console.log(animal.age);

