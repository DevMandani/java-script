class toyota {
    constructor(brand,milage){
        console.log("creating new constructor");
        this.brand = brand;
        this.milage = milage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

   
}

let fortuner = new toyota("fortuner",12);
console.log(fortuner);
let lexus = new toyota("lexus",11);
console.log(lexus); 
