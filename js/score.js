document.getElementById('btn-score').addEventListener('click', function () {
    moveToPage('score', 'playGround' );
    // const RandomAlphabet = getRandomLetter();
    // const alphabet = document.getElementById('alphabet');
    // alphabet.innerText = RandomAlphabet;
    // heightLight(RandomAlphabet);
    getRandomLetter();
    updatePointById('game-life', 5);
    updatePointById('game-score', 0);
})