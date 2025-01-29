let num=25;
let usernum=prompt("guess any number:");
console.log(usernum);

while(usernum !== num){
    usernum=prompt("you guess the wrong number,please guess another time");
}   

console.log("you entered the right number");