const display=document.getElementById("display");
function appedndToDisplay(input){
    display.value+=input;
}
function ClearDisplay(){
    display.value="";
}
function Calculate(){
    
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Enter proper expression"

    }
   
}