function createPlayerPool() {
    const players = {player1: "", player2: ""};
    function addPlayer(name) {
        return players.player1 === "" ? players.player1 = name : players.player2 = name;
    }

    return {addPlayer, players};
}

function createGame() {
    let x = [], y = [];
    let index = 0;

    const wins = [
        [1,2,3], [4,5,6], [7,8,9], 
        [1,4,7],[2,5,8],[3,6,9],
        [1,5,9],[3,5,7]
    ];

    const hasWon = move => wins.some(line => line.every(n => move.includes(n)))

    return function play(choice) {
        if(index % 2 === 0) {
        x.push(choice);
        } else {
            y.push(choice);
        }

        if(index >= 4) {
            if(hasWon(x)) return "X wins";
            if(hasWon(y)) return "Y wins";
        }
        index++;
        return {x,y,index};
    };
}