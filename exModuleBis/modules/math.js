const math = {
    // ... = spread operator -> On va récupérer
    // un nombre indéfini de paramètres
    addition: (...numbers) => {
        let result = 0;
        for (const nombre of numbers) {
            //Incrémentation du résultat
            //parseInt-> transformer les strings en number
            result += parseInt(nombre)
        }
        return result;
    },
    soustraction: (...nombres) => {
        let resultat = nombres[0];
        for (let i = 1; i < nombres.length; i++) {
          //Soustraction du résultat
          //parseInt-> transformer les strings en number
          resultat -= parseInt(nombres[i]);
        }
        return resultat;
      }
};

module.exports = math;