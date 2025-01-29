let value =[250,645,300,900,50];
let offer;
let discount;

for(let i=0;i<value.length;i++){
    let offer= value[i]/10;

    value[i]-=offer;
}

console.log(value);
