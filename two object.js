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
if(obj1 === obj2)
{
    console.log('Same Object')
}
else
{
    console.log('not Same Object')
}
console.log('----restcountries----')

//let xhr = new XMLHttpRequest();
//xhr.open("GET", "https://restcountries.com/v2/all")
//xhr.send();
//xhr.onload = () => {
   // let data = JSON.parse(xhr.response)
   // let answer = data.filter((dummy) => (dummy.flag !== undefined))
    //let realanswer = answer.filter((dollar) => (dollar.flag[0].name === "flag"))
   // console.log(realanswer)

//}