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


function rowGenerator(name, casesTotal, casesNewly, deathsTotal, deathsNewly, Transmission Classification) {
let tr = document.createElement("TR");
tr.appendChild(colGenerator(name));
tr.appendChild(colGenerator(casesTotal));
tr.appendChild(colGenerator(casesNewly));
tr.appendChild(colGenerator(deathTotal));
tr.appendChild(colGenerator(deathRating));
tr.appendChild(rowGenerator(Transmision classification));
  return tr;
}                                       //?? why 2 functions are seperated?

function myFunction() {
  let tr = rowGenerator(            //assign the tr elements to rowGenerator function
    "Iran",
    "88889",
    "49999",
    "77778",
    "28999",
    "Clusters of cases"
  )

let tbl = document.querySelector("#text");
tbl.appendChild(tr);
};

