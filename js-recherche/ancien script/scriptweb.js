const searchInput = document.querySelector("#search")
const searchResult = document.querySelector(".table-results")


let dataArray;

 function getFormations(){

  const res =  fetch("http://127.0.0.1:8000/api/formations?page=1")

  .then(function(response){
        if(response.ok){
            return response.json();
        }
        })
  .then(function(data){
        console.log(data);

    })
        
   
  
   dataArray = orderList(data)
   console.log(dataArray);
   createFormationList(dataArray)
}

getFormations()

function orderList(data) {

  const orderedData = data.sort((a,b) => {
    if(a.name.last.toLowerCase() < b.name.last.toLowerCase()) {
      return -1;
    }
    if(a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
      return 1;
    }
    return 0;
  })
  
  return orderedData;
}

function createFormationList(formationsList) {

  formationsList.forEach(formation => {

    const listItem = document.createElement("div");
    listItem.setAttribute("class", "table-item");

    listItem.innerHTML = `
    <div class="container-img">
  
    <p class="name">${formation.title} </p>
    </div>
    <p class="email">${formation.description}</p>
    
    `
    searchResult.appendChild(listItem);
  })

}
