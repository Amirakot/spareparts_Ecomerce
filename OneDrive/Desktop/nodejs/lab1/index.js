let fs=require('fs');
// const { parse } = require('path');

//    let z = data.map(function (d, i) {
//     let sum =0

//     sum += parseInt(d.grade);
//      return sum;
//      // data.grade=;
//    });

//    return z;
// }
function get() {
  let data = new Object();

  data.name = process.argv[3];
  data.grade = process.argv[4];
  let newdata = JSON.parse(fs.readFileSync("node.txt", "utf-8"));
  newdata.push(data);
  fs.writeFileSync("node.txt", JSON.stringify(newdata));
  //
 
return newdata;

}
if (process.argv[2] == "add") {
console.log(get());

}else if(process.argv[2]=='data'){
let newdata = JSON.stringify(fs.readFileSync("node.txt", "utf-8"));
console.log(newdata);
// console.log(JSON.stringify(res));
} 
else if (process.argv[2] == "edit") {
  let data = JSON.parse(fs.readFileSync("node.txt", "utf-8"));
console.log(data[process.argv[4]].grade)

// let z=data.map(function(d,i){
   return (data[process.argv[4]] = process.argv[3]);
// data.grade=;
// })
// console.log(z);
// console.log();
  fs.writeFileSync("node.txt", JSON.stringify(data));
} else if (process.argv[2] == "delete") {
  let data = JSON.parse(fs.readFileSync("node.txt", "utf-8"));
console.log(data)
  data.splice(parseInt(process.argv[3]), 1);

  fs.writeFileSync("node.txt", JSON.stringify(data));
}

else if(process.argv[2] == "sum"){
// function sum() {
let data = JSON.parse(fs.readFileSync("node.txt", "utf-8"));
let sum=0;

for(let i=0;i<data.length;i++){
sum += parseInt(data[i].grade);
}
console.log(sum);
// let z= data.forEach(element => {
//     console.log(element)
// let sum=0;
// sum += parseInt(element.grade);
// return sum;    
//    });
// return z
// }
// console.log(sum());

}
 else {
  console.log("error");
}
