const menuToggle = document.getElementById('header-menu-toggle');
const menuBlock = document.getElementById('header-menu-block');
const menuPrimary = document.getElementById('header-primary');


menuToggle.addEventListener("click", toggleOnOff);

//* scroll Down
window.onscroll = function(){
    scrollDown();
}

//* toggleOnOff
function toggleOnOff(){
    // menuHidden.classList.toggle('content-visible');
    if(menuBlock.style.display == "none"){
        menuBlock.style.display = "block";
    }else{
        menuBlock.style.display = "none";
    }
}

//* scroll Down
function scrollDown(){
    if(document.body.scrollTop >100 
        || document.documentElement.scrollTop >100){
            menuPrimary.style.position = "fixed";
    }else{
        menuPrimary.style.position = "static";
    }
}



