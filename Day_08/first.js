let btn = document.querySelector("#btn1");

btn.onclick=(e)=>{
    console.log(e.type);
    console.log(e.target);
}