const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  const result = request.response;
  const data = JSON.parse(result);
  //console.log(data)

  /*
  //task-1
  const asia = data.filter((reg)=>reg.region==="Asia");
  asia.map((country)=>console.log(country.name.common))
*/

  /*
//task-2
const popul = data.filter((popu)=>popu.population<200000)
popul.map((pname)=>console.log(pname.name.common));
*/

  /*
//task-3

const t3 = data.forEach((element )=>console.log(`Name : ${element.name.common}, Capital : ${element.capital[0]}, Flag : ${element.flag}`));
*/

  /*
//task-4

const population = data.map((popu)=>popu.population);
const t4 = population.reduce((sum,i)=>{
  return sum+i;
},0)
console.log(t4)
*/


  //task-5

  const cur = data.filter((curren)=>curren?.currencies?.USD);
  cur.map((usd)=>console.log(usd.name.common));
  
};
