let btn = document.createElement("button");
btn.innerText="click Here!";
console.log(btn);


let p = document.querySelector("p");
p.after(btn);


let heading = document.createElement("h1");
heading.innerText="Hello,my name is dev!";


let div = document.querySelector("div");
div.before(heading);


let para = document.querySelector("p");
para.remove();