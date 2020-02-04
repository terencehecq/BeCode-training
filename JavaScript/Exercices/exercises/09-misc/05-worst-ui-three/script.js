/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //changer la couleur des boutons
    document.querySelectorAll("button").forEach((button)=>{
        button.style.backgroundColor ="red";
    })

    
    // Fonction qui, appelée par setInterval() fait tourner les slots
    function test(id){
        let value = parseInt(document.getElementById(id).value);
        let max = parseInt(document.getElementById(id).dataset.max);
        let min = parseInt(document.getElementById(id).dataset.min);
        
        if(value<max){
            document.getElementById(id).value = value+1;
        }else{
            document.getElementById(id).value = min;
        }
    }
    
    let arrInterval = [];
    let arrRunning = [];

    let values = []; // On rempli l'Array avec les valeurs par défaut du n° de téléphone
    values["part-one"] = document.getElementById("part-one").dataset.min;
    values["part-two"] = document.getElementById("part-two").dataset.min;
    values["part-three"] = document.getElementById("part-three").dataset.min;
    values["part-four"] = document.getElementById("part-four").dataset.min;
    
    
    // C'est le départ de keskifofère
    document.querySelectorAll("input").forEach((input)=>{ // Pour chaque input, on lance le setInterval(test)
        let id = input.id; 

        arrInterval[id] = setInterval(test, 100, id); //  on stocke les setInterval dans un tableau associatif où l'id correspond à la fonction
        arrRunning[id] = true; // Toutes les valeurs du tableau sont true par défaut;

        document.querySelector(`#fix-${id}`).addEventListener("click",()=>{ // On écoute le click sur un bouton 
            
            if(arrRunning[id] === true){ // On stoppe l'appel de la fonction (donc le slot)
                clearInterval(arrInterval[id]);
                arrRunning[id] = false; // On passe la valeur correspondant à l'id à false (le slot est stoppé)
                document.querySelector(`#fix-${id}`).innerHTML = "Start"
                document.querySelector(`#fix-${id}`).style.backgroundColor = "green"

            }else{
                arrInterval[id] = setInterval(test, 100, id); // Si le slot était stoppé, on le relance
                arrRunning[id] = true; //On passe la valeur correspondant à l'id à true (On dit que le slot tourne)
                document.querySelector(`#fix-${id}`).innerHTML = "Stop";
                document.querySelector(`#fix-${id}`).style.backgroundColor = "red";
            }

            if(arrRunning[id] === false){ // Si le slot est stoppé
                values[id] = document.getElementById(id).value; // Alors, on modifie la valeur correspondante dans l'array values 
                if(values[id] < 10){ // Si la valeur est < 10, 
                    values[id] = `0${values[id]}`; // On rajoute un 0 devant
                }
                // à chaque clic sur l'un des bouton, on met à jour la valeur affichée dans "target"
                target.innerHTML = `+${values["part-one"]}${values["part-two"]}${values["part-three"]}${values["part-four"]}`;
            }
            
        });
    });
})();
