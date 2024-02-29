function hideElementById(elementId){
    const element = document.getElementById( elementId);
    element.classList.add("hidden");
}

//show element
function showElementById(elementId){
    const element= document.getElementById(elementId)
    element.classList.remove("hidden")
} 

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
    
}
  function setElementValueById(elementId, value){
      const element = document.getElementById(elementId);
      element.innerText = value;
    
    
  }

function getElementTextById (elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function setBackgroundColorById (elementId){
    const element = document.getElementById(elementId)
    element.classList.add("bg-orange-400");
}
function removeBackgroundColorById (elementId){
    const element = document.getElementById(elementId)
    element.classList.remove("bg-orange-400");
}


function getARandomAlphabet(){
    const alphabetstring = "abcdefghijklmnopqrstuvwxyz" ;
    const alphabets = alphabetstring.split('');
    

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
     
}