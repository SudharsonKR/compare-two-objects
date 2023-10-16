console.log("--two object compare--")
const obj1={
    name: "Person1",
    age: 5
};
const obj2={
    age: 5,
    name: "Person1"
    };
console.log(obj1)
console.log(obj2)
// let abj= Object.keys(obj1)
// let abc= Object.keys(obj2)
if(Object.keys(obj1) === Object.keys(obj2))
{
    console.log('Same Object')
}
else
{
    console.log('not Same Object')
}
// console.log('----restcountries----')

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send();
xhr.onload=()=>{
    const data = JSON.parse(xhr.response)
  console.log(data[0].flags.png)
  console.log(data[1].flags.png)
     data.forEach((val) => {
         console.log("Flag Image:", val.flags.png)
        console.log("Region:", val.region)
         console.log("Subregion:", val.subregion)
         console.log("Population:", val.population)
     });
}