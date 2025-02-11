let modebtn = document.querySelector("#mode");
let currentmode="light";

modebtn.addEventListener("click",()=>{
    if(currentmode==="light"){
        currentmode="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector(".text").style.color="white";
    }
    else{
        currentmode="light";
        document.querySelector("body").style.backgroundColor="white";   
        document.querySelector(".text").style.color="black";
    }

    console.log(currentmode);
});