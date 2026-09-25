function createPlayerPool() {
    const players = {player1: "", player2: ""};
    function addPlayer(name) {
        //To add change name feature
        return players.player1 === "" ? players.player1 = name : players.player2 = name;
    }

    return {addPlayer, players};
}

function playGame() {
    const gameBoard = [];
    
}