
// import { MY_API_KEY } from './config.js';

fetch("https://covid-19-data.p.rapidapi.com/report/totals?date=2020-07-21", {
     "method": "GET",
    "headers": {
        "x-rapidapi-key":  "314cde1626msh0c36ecd28436040p1c58d5jsnd0c56333634c",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com"

        // "Content-Type": "text/plain;charset=UTF-8"    // need it ??
      }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response[0].active);
        // console.log(response.content);
    })
    .catch(err => {
        console.error(err); 
    });
    







