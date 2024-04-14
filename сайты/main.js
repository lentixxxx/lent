function Swap() {

    var width = window.innerWidth;
    
    if (width <= 599 && swapped === false) {
    
    swapDesign("Mobile");
    
    swapped = true;
    
    } else if (width > 599 && swapped === true) {
    
    swapDesign("Desktop");
    
    swapped = false;
    
    }
    
    }