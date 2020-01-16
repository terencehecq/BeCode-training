window.addEventListener("load",async ()=>{

    try{
        let response = await fetch("https://thatsthespir.it/api"); // On attend de récupérer le fetch du localhost qui renvoie une 'response'
        let data = await response.json(); // on transforme la response du fetch en json
        // console.log(quote); // on affiche les valeurs}
        
        let quote = data.quote;
        let author = data.author;
        let picSrc = data.photo;

        document.getElementById("quote").innerHTML = quote;
        document.getElementById("author").innerHTML = author;

        if(picSrc !== ""){
            document.getElementById("author-pic").style.backgroundImage = `url(${picSrc})`;
        }else{
            document.getElementById("author-pic").style.backgroundImage = `url(https://originalcreators.dk/wp-content/uploads/2018/05/person-placeholder.png)`;
        }
    
    } catch(e){
        console.log(e);
    }

})