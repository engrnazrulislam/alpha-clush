

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

function displayPlayground(hideElementID, displayElementID) {
    hideScreen(hideElementID);
    displayScreen(displayElementID);
    continueGame();
}

function setBackgroundColorById(id){
    const element=document.getElementById(id);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(id){
    const element=document.getElementById(id);
    element.classList.remove('bg-orange-400');
}

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
    function scoreUpdate(){
        const scoreElement=document.getElementById('scoreNumber');
        const scoreText=scoreElement.innerText;
        const score=parseInt(scoreText);
        const newScore=score+1;
        scoreElement.innerText=newScore;
        return newScore;
    }

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

function displayScreen(id) {
    const playNowElement = document.getElementById(id);
    playNowElement.classList.remove('hidden');
}
function hideScreen(id) {
    const playGroundElement = document.getElementById(id);
    playGroundElement.classList.add('hidden');
}