/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    var person = new Object();
    person.firstname="Térence";
    person.lastname="Hecq";
    person.age=23;
    person.city="Chatelineau";
    person.country="Belgium";

    document.getElementById("run").addEventListener("click",()=>{

        console.log(person);
    });
})();
