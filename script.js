let words = ["אבא", "בית", "גשר", "דג", "הרים", "ים", "סוס", "מכונית", "כלב", "תפוח", "חנות", "כסף"];
let secretWord;
let gameOver = false;

// Start a new game
function startNewGame() {
    secretWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('guesses').innerHTML = ''; // Clear previous guesses
    document.getElementById('feedback').innerText = ''; // Clear feedback
    document.getElementById('newGame').classList.add('hidden'); // Hide the New Game button
    document.getElementById('guess').value = ''; // Reset input
    gameOver = false;
}

// Check if the guessed word is correct or not
function checkGuess(guess) {
    if (guess === secretWord) {
        gameOver = true;
        return "ניחשת נכון! המילה היא " + secretWord;
    } else if (guess < secretWord) {
        return "המילה היא אחרי " + guess;
    } else {
        return "המילה היא לפני " + guess;
    }
}

// Display guesses and feedback
document.getElementById("submit").addEventListener("click", function() {
    if (gameOver) return; // Stop if game is over
    
    let guess = document.getElementById("guess").value.trim();
    if (guess === '') return; // Ignore empty input

    let feedback = checkGuess(guess);

    // Add the guess and feedback to the list of guesses
    let guessFeedback = document.createElement('div');
    guessFeedback.innerText = feedback;
    document.getElementById('guesses').appendChild(guessFeedback);

    // Clear the input field
    document.getElementById('guess').value = '';

    // If the game is over, show the New Game button
    if (gameOver) {
        document.getElementById('feedback').innerText = "ברכות! ניחשת את המילה!";
        document.getElementById('newGame').classList.remove('hidden');
    }
});

// Start a new game when the New Game button is clicked
document.getElementById("newGame").addEventListener("click", function() {
    startNewGame();
});

// Initialize the first game
startNewGame();
