for (let property in statistics) {
  if(property.indexOf('r') == 0){
   console.log(`${property}: ${statistics[property]}`);
  } else if(statistics[property]%2 == 1){
  	console.log(`${property}: ${statistics[property]}`);
  }
}
