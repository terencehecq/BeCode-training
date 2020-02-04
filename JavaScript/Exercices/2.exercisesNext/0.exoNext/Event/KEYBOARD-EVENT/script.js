window.addEventListener("keydown",(e)=>{

    let key = e.keyCode;
    let target = document.getElementById("color");

    switch(true){
        case(key == 48):
            target.style.backgroundColor = "rgba(123,32,211,1)";
            break;
        case(key == 49):
            target.style.backgroundColor = "rgba(11,201,150,1)";
            break;
        case(key == 50):
            target.style.backgroundColor = "rgba(130,10,10,1)";
            break;
        case(key == 51):
            target.style.backgroundColor = "rgba(255,200,10,1)";
            break;
        case(key == 52):
            target.style.backgroundColor = "rgba(13,32,21,1)";
            break;
        case(key == 53):
            target.style.backgroundColor = "rgba(123,140,30,1)";
            break;
        case(key == 54):
            target.style.backgroundColor = "rgba(3,32,181,1)";
            break;
        case(key == 55):
            target.style.backgroundColor = "rgba(123,200,1,1)";
            break;
        case(key == 56):
            target.style.backgroundColor = "rgba(100,230,21,1)";
            break;
        case(key == 57):
            target.style.backgroundColor = "rgba(33,32,101,1)";
            break;
    }

    switch(true){
        case(key==37):
            document.getElementById("left").classList.add("highlight");
            break;
        case(key==38):
            document.getElementById("up").classList.add("highlight");
            break;
        case(key==39):
            document.getElementById("right").classList.add("highlight");
            break;
        case(key==40):
            document.getElementById("down").classList.add("highlight");
            break;
    }
})

window.addEventListener("keyup",(e)=>{

    let key = e.keyCode;
    
    switch(true){
        case(key==37):
            document.getElementById("left").classList.remove("highlight");
            break;
        case(key==38):
            document.getElementById("up").classList.remove("highlight");
            break;
        case(key==39):
            document.getElementById("right").classList.remove("highlight");
            break;
        case(key==40):
            document.getElementById("down").classList.remove("highlight");
            break;
    }
})