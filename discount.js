// const addToCart = 300;

// if(addToCart >= 500){
//     const discount = addToCart * 10 / 100;
//     const pay = addToCart - discount;
//     console.log(pay)
// }else if(addToCart >= 250){
//     const discount = addToCart * 5 /100;
//     const pay = addToCart - discount;
//     console.log(pay)
// }

// else{
//     console.log(addToCart)
// }

const child = 10;
const age = 75;
const isIdCard = true;
const cuponCard = true
const buy = 550;

if (child <= 8){
    console.log("free food")
}else if (age >= 60 && isIdCard == true){
    const discount = buy * 50 /100
    const pay = buy - discount
    console.log(pay);

}else if(cuponCard == true){
    const Discount = buy * 25 /100
    const pay = buy - discount
    console.log(pay);
}else{
    console.log(`send money `)
}
