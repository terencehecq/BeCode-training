/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {

        constructor(name, greeting){
            this.name = name;
            this.greeting = greeting;
        }

        sayHello() {
            return `${this.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Cat extends Animal{
        constructor(name){ 
            super(name); // Je récupère la propriété name de la classe "Animal"
            this.greeting = "Meow " // Je défini la valeur par défaut de greeting pour la classe "Cat"
        }
    }

    class Dog extends Animal{
        constructor(name){
            super(name);
            this.greeting = "Wouf "
        }
    }


    document.getElementById("run").addEventListener("click", () => {

        var archi = new Cat("Archi");
        var cloche = new Dog("Clochette");

        console.log(archi.sayHello());
        console.log(cloche.sayHello());
        
    });
})();
