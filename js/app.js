

// Game Started by displaying playground and hidden home screen
function displayPlayground(hideElementID, displayElementID) {
    hideScreen(hideElementID);
    displayScreen(displayElementID);
    continueGame();
}
// Key background Set Function
function setBackgroundColorById(id){
    const element=document.getElementById(id);
    element.classList.add('bg-orange-400');
}
// Key Background Remove Function
function removeBackgroundColorById(id){
    const element=document.getElementById(id);
    element.classList.remove('bg-orange-400');
}
// Keyboard Button Pressed Event Handle
function handleKeyboardButtonPress(event){
    const playerPressed=event.key;
    const playerPressedAlphabet=playerPressed.toLocaleLowerCase();
    
    const currentAlphabetElement=document.getElementById('showAlphabet');
    const currentAlphabet=currentAlphabetElement.innerText.toLocaleLowerCase();
    let finalScore=0;
    let finalLife=5;
    if(playerPressedAlphabet===currentAlphabet){
        removeBackgroundColorById(playerPressedAlphabet);
        continueGame();
        finalScore=scoreUpdate();
        document.getElementById('finalScore').innerText=finalScore;
    }else{
        finalLife=lifeDecreased();
        if(finalLife<=0){
            hideScreen('playGroundSection');
            displayScreen('finalScoreSection');
            return;
        }
    }
}
// Score Update Function
    function scoreUpdate(){
        const scoreElement=document.getElementById('scoreNumber');
        const scoreText=scoreElement.innerText;
        const score=parseInt(scoreText);
        const newScore=score+1;
        scoreElement.innerText=newScore;
        return newScore;
    }
    //Life Decreased Function
    function lifeDecreased(){
        const lifeElement=document.getElementById('lifeNumber');
        const lifeText=lifeElement.innerText;
        const life=parseInt(lifeText);
        const newLife=life-1;
        lifeElement.innerText=newLife;
        return newLife;
    }
// capture keyboard key pressed
document.addEventListener('keyup', handleKeyboardButtonPress);

//Get a random alphabets
function getRandomAlphabets(){
    const alphabetString="abcdefghijklmnopqrstuvwxyz";
    const alphabets=alphabetString.split('');

//Get a random generates index
    const randomNumber= Math.random()*25;
    const index=Math.round(randomNumber);
    const alphabet=alphabets[index];
    return alphabet;
}

function continueGame(){
    // step-1 generate a random alphabet
    const alphabet=getRandomAlphabets();

    const currentAlphabetElement=document.getElementById('showAlphabet');currentAlphabetElement.innerText=alphabet;

    //set background Color to kbd
    setBackgroundColorById(alphabet);
}

// Play Again Section
function playAgain(hideId,displayId){
    hideScreen(hideId);
    displayScreen(displayId);
    document.getElementById('lifeNumber').innerText=5;
    document.getElementById('scoreNumber').innerText=0;
}

// Section Displaying
function displayScreen(id) {
    const playNowElement = document.getElementById(id);
    playNowElement.classList.remove('hidden');
}
//Section Hiding
function hideScreen(id) {
    const playGroundElement = document.getElementById(id);
    playGroundElement.classList.add('hidden');
}