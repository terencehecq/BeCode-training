let toHover = document.querySelectorAll(".hoverMe");

toHover.forEach((x)=>{
    x.addEventListener("mouseenter",()=>{
        x.classList.add("disappear");
    })

    
})