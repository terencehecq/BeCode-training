/* becode/javascript
 *
 * /05-arrays/10-reduce-array/script.js - 5.10: utilisation d'un reducer
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = [
        {
            firstname: "Grenville",
            lastname: "Stive",
            age: 64,
        },
        {
            firstname: "Luis",
            lastname: "Jedrzejewsky",
            age: 73,
        },
        {
            firstname: "Teodor",
            lastname: "Warrington",
            age: 56,
        },
        {
            firstname: "Danya",
            lastname: "Bigby",
            age: 17,
        },
        {
            firstname: "Jemmy",
            lastname: "Goodbur",
            age: 87,
        },
        {
            firstname: "Vilhelmina",
            lastname: "Fost",
            age: 43,
        },
        {
            firstname: "Igor",
            lastname: "Putson",
            age: 45,
        },
        {
            firstname: "Klement",
            lastname: "Braybrook",
            age: 88,
        },
        {
            firstname: "Trefor",
            lastname: "Le Jean",
            age: 69,
        },
        {
            firstname: "Tarrah",
            lastname: "de Clerc",
            age: 77,
        },
        {
            firstname: "Brad",
            lastname: "Hookes",
            age: 82,
        },
        {
            firstname: "Kippar",
            lastname: "Fancet",
            age: 25,
        },
        {
            firstname: "Jecho",
            lastname: "Hawket",
            age: 87,
        },
        {
            firstname: "Lief",
            lastname: "Blazy",
            age: 80,
        },
        {
            firstname: "Jo-ann",
            lastname: "Sacase",
            age: 81,
        },
    ];

    // your code here

    document.getElementById("run").addEventListener("click", function(){
        

        // On stock tous les ages dans un array

        var ages = [];

        people.forEach(function(person){
            ages.push(person.age);
        });

        console.log(people.age);

        // Utilisatione de reduce() : 
        // reduce() lance la fonction entrée en paramètre
        // La fct doit avoir (au moins) 2 param reconnus automatiquement : "total" et "num" (peu importe leur nom)
        // total = la valeur actuelle dans l'array
        // num = la prochaine valeur
        // Ici, le total augmente (total + num) mais on peut lui appliquer n'importe quelle opération.

        function getSum(total, num){
            return total + num;
        };

        console.log(ages.reduce(getSum));


        // La fonction peut aussi être écrite directement après le reduce() 

        console.log(ages.reduce(function getSum(total, num){
            return total + num;
        }));

        
    });
})();
