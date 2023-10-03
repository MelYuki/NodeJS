/*
3 façons d'écrire des fonctions

L'ancienne =>
function test () {}

La nouvelle (depuis 2015, 8 ans déjà) =>
const test = () => {}

Une fonction anonyme =>
() => {}
*/


// Fonction
const fnDisplay = (message) => {
    console.log(message)
}
// Utiliser la fonction
fnDisplay("Coucou")

// Fonction 'setTimeout' avec notre fonction
setTimeout(fnDisplay, 4*1000, "Hello")
setTimeout(fnDisplay, 8*1000, "Y a quelqu'un?")
setTimeout(fnDisplay, 12*1000, "Comme il n'y a personne...")



// Fonction 'setInterval' avec notre fonction et une fonction anonyme
let compteur = 0

const fnDisplay2 = (name) => {
    console.log(name)
    compteur ++
}
const intervalId = setInterval(() => {
    fnDisplay2("Pouf")
    if(compteur==10) {
        console.log("Pouf est occupé, ciao!")
        clearInterval(intervalId)
    }
}, 2*1000)

