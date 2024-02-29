// //hide home sction
// function play(){
//     const homeSection = document.getElementById("home-screen")
//     homeSection.classList.add("hidden")

//     //playground show
// const playGroundSection = document.getElementById("play-ground")
// playGroundSection.classList.remove("hidden");
// }
function keyUpEvenHandler(event){
    const playerPressed = event.key;

    if (playerPressed === 'Escape'){
        gameOver();
    }

    //expected alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedElement = currentAlphabet.toLocaleLowerCase();

    //right wrong check
    if(playerPressed === expectedElement){

        const currentScore = getElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setElementValueById('current-score', updatedScore);

        //update score
        // const currentScoreElement = document.getElementById('current-score')
        // const curentScoreText = currentScoreElement.innerText;
        // const curentScore = parseInt(curentScoreText);

        // const newScore = curentScore + 1;
        
        // currentScoreElement.innerText = newScore;


        removeBackgroundColorById (expectedElement)
        continuegame();
    }
    else{

        const currentlife = getElementValueById ('current-life');
        updatedLife = currentlife - 1;
        setElementValueById('current-life', updatedLife);

        if (updatedLife === 0){
            gameOver();
        }

        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;

    }

   
}
document.addEventListener('keyup',keyUpEvenHandler )

function continuegame(){
  const alphabet =   getARandomAlphabet();

  const getAlphabet = document.getElementById("current-alphabet")
  getAlphabet.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function play(){
    hideElementById("home-screen")
    showElementById("play-ground")
    hideElementById("final-score")

    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0);


    continuegame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById("final-score");

    const finalScore = getElementValueById('current-score');
    setElementValueById('score', finalScore);

    const currentAlphabetId = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabetId);
}