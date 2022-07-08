const formationCardTemplate = document.querySelector("[data-formation-template]")
const formationCardContainer = document.querySelector("[data-formation-cards-container]")
const searchInput = document.querySelector("[data-search]")


searchInput.addEventListener("input", (e) => {
    const value = e.target.value
})


 fetch("http://127.0.0.1:8000/api/formations?page=1")
.then(res => res.json())
.then(data => { return data['hydra:member']})
.then(formation=> {
    

    formation.forEach(formation => {     
        const card = formationCardTemplate.content.cloneNode(true).children[0]
         const header = card.querySelector("[data-header]")
         const body = card.querySelector("[data-body]")
         header.textContent= formation.title 
         body.textContent= formation.description 
         formationCardContainer.append(card)

         })
 })
