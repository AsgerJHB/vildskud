import "./style.css";
document.getElementById("dageDropdown").addEventListener("change", filterTable);

function filterTable() {
  console.log("hej");
  // Variabler
  let dropdown, table, rows, cells, dag, filter;
  dropdown = document.getElementById("dageDropdown");
  table = document.getElementById("myTable");
  rows = table.getElementsByTagName("tr");
  filter = dropdown.value;

  // Filtrer med dropdown menuen
  for (let row of rows) {
    cells = row.getElementsByTagName("td");
    dag = cells[3] || null; // rammer den tredje "td" i "tr"
    if (filter === "Dato" || !dag || filter === dag.textContent) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}

//fold rækker ud og roter pil
document.querySelectorAll(".table_row").forEach((item) => {
  item.addEventListener("click", (event) => {
    {
      console.log("hej123");
      let infotekst = item.nextElementSibling;
      let arrowTing = item.lastElementChild;
      if (infotekst.style.display === "none") {
        infotekst.style.display = "block";
        arrowTing.classList.add("arrow");
        arrowTing.classList.remove("arrow2");
      } else {
        infotekst.style.display = "none";
        arrowTing.classList.remove("arrow");
        arrowTing.classList.add("arrow2");
      }
    }
  });
});
