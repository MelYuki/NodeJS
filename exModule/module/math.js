const math = {
    // ... = spread operator -> On va récupérer
    // un nombre indéfini de paramètres (en array)
    addition: (...numbers) => {
        let result = 0;
        for (const nombre of numbers) {
            //Incrémentation du résultat
            //parseInt-> transformer les strings en number
            result += parseInt(nombre)
        }
        return result;
    }
}

module.exports = math