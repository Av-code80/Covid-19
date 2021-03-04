
// Asynchronized fetchApi way to get the data of website

// const fetchApi = async function() {
//     const response = await fetch('')
//     const jsonData = await response.json();
//     displayData(jsonData);
// }


                                                      // Get request
fetch(http://apps.who.int/gho/athena/api/GHO/WHOSIS_000001.html?filter=COUNTRY:*&profile=xtab&x-sideaxis=COUNTRY&x-topaxis=GHO;YEAR;SEX&x-title=table", {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
})

    .then(response => response.json())   //convert to json
    .then(json => console.log(json))     // print data to console
    .catch(err => console.log('Request Failed', err));         //catch error




