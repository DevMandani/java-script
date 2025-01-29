let company=["bloomberg","microsoft","uber","google","ibm","netflix"];
//deleted first element from start for we used shift method
company.shift;
 console.log(company);


 //add element instead of uber we can write ola for that operation we can write splice method

 company.splice(2,1,"ola");
 console.log(company);

company.push("amazon");

console.log(company);