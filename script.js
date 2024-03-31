const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  const result = request.response;
  const data = JSON.parse(result);
  //console.log(data)

/*
//Task-a
const asia = data.filter((reg)=>reg.region==="Asia");
asia.map((country)=>console.log(country.name.common))
*/

/*
//Task-b
const popul = data.filter((popu)=>popu.population<200000)
popul.map((pname)=>console.log(pname.name.common));
*/

/*
//Task-c

const t3 = data.forEach((element )=>console.log(`Name : ${element.name.common}, Capital : ${element.capital[0]}, Flag : ${element.flag}`));
*/

/*
//Task-d

const population = data.map((popu)=>popu.population);
const t4 = population.reduce((sum,i)=>{
  return sum+i;
},0)
console.log(t4)
*/


//Task-e
const cur = data.filter((curren)=>curren?.currencies?.USD);
cur.map((usd)=>console.log(usd.name.common));
  
};
