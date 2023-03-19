document.querySelector(".cross").style.display="none"
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".sidenavbar").classList.toggle("sidenavbargo")
    if(document.querySelector(".sidenavbar").classList.contains("sidenavbargo")){
        document.querySelector(".hamb").style.display="inline";
        document.querySelector(".cross").style.display="none";        
    }else{
        
        setTimeout(()=>{
            document.querySelector(".cross").style.display="inline";
        },300)
        document.querySelector(".hamb").style.display="none";   
    }
})