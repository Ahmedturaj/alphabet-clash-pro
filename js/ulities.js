function moveToPage(p1, p2) {
    const item1 = document.getElementById(p1);
    item1.classList.add('hidden');
    const item2 = document.getElementById(p2);
    item2.classList.remove('hidden');

}
function getRandomLetter() {
    const alphabets = [...Array(26)].map((_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
    const randomIndex = Math.floor(Math.random() * alphabets.length);

    const alphabet = alphabets[randomIndex];
    const alphabetId = document.getElementById('alphabet');
    alphabetId.innerText = alphabet;
    const random = heightLight(alphabet);
    return random;
}

function heightLight(element) {
    const elements = document.getElementById(element);
    elements.classList.add('bg-orange-400', 'text-black');
}
function removeBg(element) {
    const elements = document.getElementById(element);
    elements.classList.remove('bg-orange-400', 'text-black');
}
function getOrLosePoint(point) {
    const currentPointElement = document.getElementById
        (point);
    const currentPointText = currentPointElement.innerText;
    const currentPoint = parseInt(currentPointText);
    return currentPoint;
}
function updatePointById(setPoint, updatePoint) {
    const currentElement = document.getElementById(setPoint)
    currentElement.innerText = updatePoint;
}

function getElementText(event) {
    const element = document.getElementById(event);
    const text = element.innerText;
    return text;
}

document.addEventListener('keyup', handleKeyBoardButtonPress)
function handleKeyBoardButtonPress(e) {
    const keyPressed = e.key;

    if(keyPressed === 'Escape'){
        gameOver();
    }
    const alphabetElement = document.getElementById('alphabet');
    const currentAlphabet = alphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    if (keyPressed === expectedAlphabet) {
        console.log('you are ok.');

        const currentScore = getOrLosePoint('game-score');
        const newScore = currentScore + 1;
        updatePointById('game-score', newScore);

        removeBg(expectedAlphabet);
        getRandomLetter();
    } else {
        // alert('Wrong Key, Press the right key.');
        const currentLife = getOrLosePoint('game-life');
        const newLife = currentLife - 1;
        if (newLife < 0) {
            gameOver();
            console.log('gameOver');

        }
        updatePointById('game-life', newLife);


    }
}
function gameOver() {
    moveToPage('playGround', 'score');
    const gameScore = getOrLosePoint('game-score');
    const finalScore = document.getElementById('final-score');
    finalScore.innerText = gameScore;
    const text = getElementText('alphabet');
    removeBg(text);
}