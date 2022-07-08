let headers= new Headers();
let init={
    method: 'GET',
    headers: headers,
    mode: 'no-cors',
    cache: 'default'
};


const searchInput = document.querySelector("#search")
const searchResult = document.querySelector(".table-results")


let dataArray;

 function getFormations(){

  const res =  fetch('http://127.0.0.1:8000/api/formations/1', {mode: 'no-cors'})
    .then(function(response){
        if(response.ok){
            return response.json();
        }
        
    })
    .then(function(data){
        console.log(data);
    })
}  



fetch('https://api.openweathermap.org/data/2.5/weather?q=lyon&units=metric&lang=fr&appid=2dd72b2d925f9030121bd2d615f8fc81', {mode: 'cors'})
         .then(function(res){
             if(res.ok){
                 return res.json();
             }
         })
         .then(function(data){
             console.log(data);
         })


  fetch('https://randomuser.me/api/?nat=fr&results=50')
      .then(function(response){
         if(response.ok){
              return response.json();
         }
        
      })
      .then(function(data){
          console.log(data);
      })

      fetch('http://127.0.0.1:8000/api/formations/1')
      .then(function(response){
         if(response.ok){
              return response.json();
         }
        
      })
      .then(function(data){
          console.log(data);
      })





// getFormations()


// fetch('http://localhost:3001/questions', {
//         method: 'GET',
//         headers: {
//         "Accept": "application/json",
//         'Content-Type': 'application/json'
//         }
//     })
//     .then(response => { return response.json();})
//     .then(responseData => {console.log(responseData); return responseData;})
//     .then(data => {this.setState({"questions" : data});})

//     .catch(err => {
//         console.log("fetch error" + err);
//     });
// }