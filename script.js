// let number =Math.PI;
// console.log(number.toFixed(5));


// let num=Math.max(1,5,4,2,9,8);
// console.log(num)


// let num=Math.min(1,5,4,2,9,8);
// console.log(num)


// let num=Math.pow(2, 3);
// console.log(num)


// let num=Math.round(3.2);
// console.log(num)


// let num=Math.floor(2.7);
// console.log(num)


// let num=Math.random()
// console.log(num)
// console.log(num.toFixed(1))
// console.log(num.toFixed(1)*10)


// let date=new Date();
// console.log(date);


// let date = new Date("2025,12,15")
// console.log(date)


// let date=new Date(2024,9,21,10,10,10);
// console.log(date)


// let date=new Date(3245698758967);
// console.log(date)


// let date = new Date()
// console.log(date.getTime())


// let date=new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours() +':'+date.getMinutes()+':'+date.getSeconds());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());


// let date = new Date()
// date.setFullYear(2030)
// date.setDate(25)
// date.setHours(203)
// console.log(date)


// let current=new Date();
// console.log(current.toLocaleString())  //  12/4/2025, 4:18:25 PM
// console.log(current.toDateString())  //  Thu Dec 04 2025
// console.log(current.toTimeString())  //  16:19:43 GMT+0530 (India Standard Time)
// console.log(current.toLocaleDateString()) // 12/4/2025
// console.log(current.toLocaleTimeString()) // 4:21:00 PM



























// let data=Math.PI
// console.log(data.toFixed(4))
// document.body.innerText=data.toFixed(4)


// let data1 = Math.max(1,2,3,4,5,6,7)
// console.log(data1)
// document.body.innerText=data1 

// let data2=Math.min(1,2,3,4,5,6,7)
// console.log(data2)
// document.body.innerText=data2 

// let data3=Math.random()
// console.log(data3.toFixed(5))
// document.body.innerText=data3.toFixed(5) 



let a  = document.createElement('div');
let h = document.createElement('h1');
    
document.body.append(a);           
a.append(h);                     

let num = Math.random()
let otp = Math.floor(num*100000)  
h.innerHTML = 'your otp is:' + otp





let input = document.getElementById('input')

input.addEventListener('focus', ()=>{
    input.style.borderColor = 'blue'
    console.log("this is the focus effect")
})

input.addEventListener('blur', ()=>{
    input.style.borderColor = 'red'
    console.log("this is the blur effect")
})