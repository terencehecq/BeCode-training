let character = {
    name : "Jay-son",
    age : 27,
    items_to_give : ["Carapils", "Lange sale", "Mortadelle"],
}

for(let key in character){
    console.log(character[key]);
}

function giveItem(){
    let itemsLength = (character.items_to_give).length;
    let randomItem = Math.floor(Math.random()*itemsLength);
    console.log(character.items_to_give[randomItem]);
}
giveItem();



let toSell = [
    {title: "Pistolet", physic:10, magic:0, minLevel:5, available: true},
    {title: "Fusil à pompe", physic:20, magic:0, minLevel:10, available: true},
    {title: "Tronçonneuse", physic:12, magic:0, minLevel:7, available: false},
    {title: "Café", physic:0, magic:10, minLevel:2, available: true},
    {title: "Batte", physic:5, magic:0, minLevel:2, available: true},
    {title: "Bouclier", physic:5, magic:5, minLevel:5, available: false},
    {title: "Arbalète", physic:9, magic:3, minLevel:8, available: false},
    {title: "Baguette magique", physic:3, magic:10, minLevel:12, available: true},
];

function showObjects(){

    toSell.forEach((item)=>{
        console.log(item);
    })
} 
// showObjects();

function showAvailable(){
    toSell.forEach((item)=>{
        if(item.available){
            console.log(item);
        }
    })
}
// showAvailable();

function showMinLevel(lvl){
    toSell.forEach((item)=>{
        if(item.minLevel >= lvl){
            console.log(item);
        }
    })
}
showMinLevel(7);

