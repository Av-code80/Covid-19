// let age = prompt("What is your age?", 18);      Arrow functions can be used in the same way as Function Expressions.
// let welcome = (age < 18) ?
  // () => alert('Hello') :
  // () => alert("Greetings!");


// welcome();

//Creation an information button in the statistic board.
/*function btnFunction() {
    var p = document.getElementById("paragraph");
    p.style.display = "block";   
  };
*/

/*
function btnFunction() {
const btn = document.getElementById("button");
const createBtn = document.createElement(button)
createBtn.innerHTML("information");
createBtn.classList.add("classBtn");
btn.appendChild("IRAAAAAN");
}
*/
/*
function myFunction() {
  var x = document.createElement("P");
  var t = document.createTextNode("Iran	60570	80880	5999	9000	Clusters of cases");
  x.appendChild(t);
  document.body.appendChild(x); 
}*/


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