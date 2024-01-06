const log = (...param) => {console.log(...param)}

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const countryInfo = JSON.parse(xhr.response);
  //A.Get all the countries from Asia continent /region using Filter function
  let asiaRegionCountries = countryInfo.filter((value)=>{
    if(value.region === 'Asia')
    {
        return value;
    }
  });
  log(asiaRegionCountries);
  //B.Get all the countries with a population of less than 2 lakhs using Filter function
  const less2LPopulate=countryInfo.filter((value)=>{
    return value.population<200000;
  });
  log(less2LPopulate);
  //C.Print the following details name, capital, flag, using forEach function
  countryInfo.forEach((value)=>{
    console.log(value.name,value.capital,value.flag);
  })
  //D.Print the total population of countries using reduce function
  const totalpopulation=countryInfo.reduce((acc, value)=>{
    
    return (acc += value.population);
  },0);
  log(totalpopulation);
  //E.Print the country that uses US dollars as currency.
  for(i=0;i<countryInfo.length;i++){
    if(countryInfo[i].currencies != null){
        let currInfo = Object.keys(countryInfo[i].currencies);
        currInfo.forEach(key => {
            if(key === 'USD')
            console.log(countryInfo[i]);
        })
    }
    
 }
};




