// function first(name){
//     console.log("Hello " + name);
// }
// first("Tamanna")
// first("Suborna")




// function sum(a, b){
//     console.log(a+b)
// }
// sum(10, 20)



// function sum(a, b){
//     console.log(a*b)
// }
// sum(10, 20)



// function sum (a, b){
//     document.getElementById("text").
//     innerHTML = (a+b);
// }
// sum(10,20);
// sum(10,50);





//1. name function
// function multi(a , b){
//     return a*b;
// }console.log(multi(2,4));





// 2. Anonymous function
// const divide = function (a,b){
//     return a/b;
// }
// console.log(divide(10,5))



// 3. Arrow function ES6

// const sub = (a,b) => a-b;
// console.log(sub(10,5))

// const sub = (a,b) => {
//     return a-b;
// }
// console.log(sub(10,5))




// function greet(name = "user"){
//     return `Hi ${name}`
// }
// console.log(greet("JUI"));





function isCheck(number){
    if(number % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
    
}
console.log(isCheck(4))