class person{
    eat(){
        console.log("eating");
    }
    
    sleep(){
        console.log("sleeping");
    }
}

class engineer extends person{
    work(){
        console.log("problem solving");
    }
}

let devobj = new engineer();