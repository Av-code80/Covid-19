// Asynchronized fetchApi way to get the data of website

const fetchApi = async function() {
    const response = await fetch ('https://ghoapi.azureedge.net/api/Dimension')
    const jsonData = await response.json();
    displayData(jsonData);
}




// Creating a board for each data / tr / td of table which sent in the API Json 
function displayData(data) {
    data.forEach(tr => {
        const tr = new rowGenerator(name, casesTotal, casesNewly, deathsTotal, deathsNewly, Transmission Classification);
        tr.showingRowGenerator();
    })
};


 
/*

fetch('https://ghoapi.azureedge.net/api/Dimension').then(function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});

*/