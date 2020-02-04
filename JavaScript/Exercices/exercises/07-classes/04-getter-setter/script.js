/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    class Person{
        constructor(firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }

        // get : permet de lancer la méthode en l'appelant comme une propriété --> xxx.name
        get name(){ 
            return `${this.firstname} ${this.lastname}`;
        }

        // set : permet de modifier un objet en l'appelant comme une propriété --> xxx.name = '...'
        set name(value){
            var parts = value.split(' '); // On coupe la valeur au niveau de l'espace
            this.firstname = parts[0]; // on récupère la première partie et on l'assigne a firstname
            this.lastname = parts[1]; // on récupère la 2e partie et on l'assigne à lastname
        }
    }
    document.getElementById("run").addEventListener("click", ()=>{

        var me = new Person("Térence", "Hecq");

        console.log(me.name); // on utilise le getter (get)

        me.name = 'Pierre Quiroul' // on utilise le setter (set)

        console.log(me.name);
    });
})();
