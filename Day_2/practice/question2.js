let score = prompt("enter your score:");
let grade;
if(score<=100 && score>=90){
    grade = "A";
}
else if(score>=70 && score<=89){
    grade = "B";
}
else if(score>=60 && score<=69){
    grade = "C";
}
else if(score>=50 && score<=59){
    grade = "D";
}

else{
    grade="F";
}
console.log(score);
console.log(grade);

