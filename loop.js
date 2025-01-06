// for (let i = 1 ; i<=5 ; i++){
//     console.log(i)
// }



// let i = 0;
// while(i <=5){
//     console.log(i);
//     i++
// }



// let i = 0;
// while(i <=5){
//     i++
//     console.log(i);
  
// }




// let i =1;
// do{
//     console.log(i);
//     i++
// }while(i <= 5);

// let i =1;
// do{
//     i++
//     console.log(i);
   
// }while(i <= 5);



// let i = 2;
// while( i <= 20){
//     console.log(i);
//     i += 2
// }



// let i = 1;
// while( i <= 20){
//     console.log(i);
//     i += 2
// }



// let i = 1;
// while( i <= 5){
//     console.log("Jui");
//     i += 1
// }


// let i = 1;
// do{
    
//     console.log("JUI");
//     i++
// }while( i <= 5);



// let fruits = ["Apple", "Banana", "Orange"]
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }




// let number = [10, 20, 30, 40, 50, 60]
// let sum =0;
// for(let i =0; i<number.length; i++){
//     sum += number[i]
// }
// console.log(sum);






// let fruits = ["Apple", "Banana", "Orange"]
// let i=0;
// while( i<fruits.length){
//     console.log(fruits[i]);
//     i++
// }




// let number = [1, 2, 3, 4,5,7];
// let text =[];
// for(let i=0; i < number.length; i++){
//     text += number[i]
//     console.log(text);
    
// }





// let array = [ 10, 12, 16, 18, 20];
// let maxValue = array [0];
// let minValue = array[0];
// let i = 1;
// while(i < array.length){
//     if (array [i] > maxValue){
//         maxValue = array[i]
//     }
//     if(array [i] < minValue){
//         minValue= array[i]
//     }
//     i++
// }

// console.log(`${maxValue} MaxValue ${minValue} MinValue`)






const number = [1,2,3,4,5,6,7,8];
let reverseNumber = [];
for(let i = number.length-1;i>=0; i--){
    reverseNumber.push(number[i])
}
console.log(reverseNumber);