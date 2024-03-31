// const min=10;
// const max=20;

//  console.log(Math.floor(Math.random()*(max-min+1)+min));
// console.log("Hello World");

const myDate=new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

function myFun(val1,val2,...num){
    return num;
}

// console.log(myFun(200,400,500,600))

// const user={
//     userName: "Ranjit",
//     age: 22
// }

// const{userName:name}=user

// console.log(name);

// user.userName="sam"

// console.log(user.userName);

// var b=20;
// let a=10;
// if(true){
//     let a=100;
//     var b=200;
//     console.log("Inner: ",a)
//     console.log("Inner: ",b);
// }

// console.log("Outer: ",a);
// console.log("Outer: ",b);

// const user={
//     userName:"Ranjit",
//     price:999,

//     welcomeMessage:function(){
//         console.log(`${this.userName}, Welcome To Website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// // user.userName="Sam"
// // user.welcomeMessage()
// console.log(this)


// const one=function () {
//     let userName="Sam"
//     console.log(this.userName);
// }
// const one= ()=> {
//     let userName="Sam"
//     console.log(this);
// }
// one()

const score=20;

if(score>100){
     a=10;
    // console.log(a);
}else{
    let a=20;
    // console.log(a);
}
// console.log(a);


// for (const val of arr) {
//     if(val%2==0){
//         // console.log(val);
//        //can work
//     }
// }
// for (const [key] in arr) {
//     // console.log(`key ${key} :- value ${arr[key]}`);
//     //it work
// }



const obj={
    a:"Ranjit",
    b:"Sam",
    c:"Akki"
}

// for (const key in obj) {
//     console.log(key);
//     console.log(key.valueOf());
//     //only print key not values
// } 

// for (const [key, value] of obj) {
//    console.log(key);
//    console.log(value);
//    //not work obj is not iterable
// }

const map=new Map()
map.set("js", "JavaScript")
map.set("cpp", "C++")
map.set("rb", "Ruby")

// for (const [key, value] in map) {
//      console.log(`key ${key} :- value ${value}`);
//      //not work
// }
for (const [key,value] of map) {
    //  console.log(`key ${key} :- value ${value}`);
    //  it work
}

// arr.forEach(function (i) {
//     // console.log(i+1);
// })

// arr.forEach((i)=>{
//     // console.log(i);
// })


// function printfn(item){
//     console.log(item);
// }

const name= function (item) {
    // console.log(item);
}
const arr=[25,14,6,8,75,64,35]

const newNum=arr.map((num)=>(num+10))

const newNum2=arr.filter((num)=>(num>25))

// console.log(newNum);

// console.log(newNum2);

const myObject=[
    {
        courseName:"Js Course",
        price:3999
    },
    {
        courseName:"Python Course",
        price:999
    },
    {
        courseName:"Mobile Dev Course",
        price:4999
    },
    {
        courseName:"DSA Course",
        price:2999
    }
]

const finalTotal=myObject.reduce((acc,curr)=>(acc+curr.price),0)

// console.log(finalTotal);

console.log("10"-5);

