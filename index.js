
function colGenerator(col) {                      //?? col ?
  let td = document.createElement("TD");
  let text = document.createTextNode(col);        //?? col ?
  td.appendChild(text);
    return td;
}

function rowGenerator(name, casesTotal, casesNewly, deathsTotal, deathsNewly, transmissionClassification) {
let tr = document.createElement("TR");
tr.appendChild(colGenerator(name));
tr.appendChild(colGenerator(casesTotal));
tr.appendChild(colGenerator(casesNewly));
tr.appendChild(colGenerator(deathsTotal));
tr.appendChild(colGenerator(deathsNewly));
tr.appendChild(colGenerator(transmissionClassification)); 
  return tr; 
}

function myFunction() {
  let tr = rowGenerator(           
    "France",
    "88889",
    "49999",
    "77778",
    "28999",
    "Clusters of cases",        
  )
  
let tbl = document.querySelector("#text");
tbl.appendChild(tr);
} 



document.getElementById('maListe').addEventListener('click', function(e){ 
  var initElem = e.target; 
  if(initElem.className != 'element'){ // Si l'élément n'est pas un de ceux à traiter 
      return; 
  } 
  alert(initElem.dataset.texte); 
});