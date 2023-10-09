class utente {

constructor(_firstName, _lastName, _age, _location){

this.firstName= _firstName
this.lastName= _lastName
this.age= _age
this.location= _location
}
showAge(){
return `
mi chiamo ${this.firstName} ${this.lastName} ho ${this.age} e sono di ${this.location}`
}

}

const x = new utente ("lorenza","d'amore","25","pescara")
console.log(x)

const y= new utente("luca", "rossi", "30", "roma")
console.log(y)




function showBigger(utente1,utente2){
    if (utente1.age > utente2.age){return `${utente1.firstName} è più grande di ${utente2.firstName}`}
    else {return `${utente2.firstName} è più grande di ${utente1.firstName}`}
}

console.log(showBigger(x,y))


// esercizio 2

class pet {

constructor(_name, _owner, _species, _breed){

    this.name= _name
    this.owner= _owner
    this.species= _species
    this.breed= _breed

}

showPet(){
    return `${this.name} è in affido a ${this.owner}. è un/una ${this.species} di razza ${this.breed}`
}

}

const animali = []



let bottone= document.getElementsByTagName("button")[0]
let nome = document.getElementById("nome")
let proprietario= document.getElementById("owner")
let specie= document.getElementById("species") 
let razza= document.getElementById("razza")
let petsList= document.getElementsByTagName("h2")[0]
let lista= document.getElementsByTagName("ul")[0]

let inserimentoDati = function(){
  
animali.forEach((pet) =>{

const ulli= document.createElement("li")
ulli.innerText = `${pet.name} ${pet.owner} ${pet.species} ${pet.breed}`
    
    lista.appendChild(ulli)})

}

inserimentoDati()



bottone.addEventListener("click", function(e){
    e.preventDefault()

let animals= new pet  (

    nome.value,
    proprietario.value,
    specie.value,
    razza.value
)
   
animali.push(animals)

})
console.log(animali)


const stessoPadrone= function(animals1,animals2){

if (animals1=== animals2){return console.log(true)}
else{return console.log(false)}

}

stessoPadrone(pet.proprietario, pet.proprietario)