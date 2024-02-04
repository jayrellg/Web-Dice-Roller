function rollDice() {
    var player1 = Math.floor(Math.random() * 6) + 1;
    var player2 = Math.floor(Math.random() * 6) + 1;


    document.getElementById('player1Score').textContent = player1;
    document.getElementById('player2Score').textContent = player2;

    
    if (player1 > player2) {
        document.getElementById('winner').textContent = "Player 1 wins!";
    } else if (player2 > player1) {
        document.getElementById('winner').textContent = "Player 2 wins!";
    } else {
        document.getElementById('winner').textContent = "It's a draw! Rolling again...";
        setTimeout(function()
        {
            rollDice();
        }, 1000);
    }


    document.getElementById('rollButton').focus();
}



