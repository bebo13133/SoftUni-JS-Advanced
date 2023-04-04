function ticTacToe(input){

    let dashboard = 
    [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let player = 'X';
    let hasWon = false;

    for(let i = 0; i < input.length; i++){
        let line = input[i];
        let [row, col] = line.split(" ").map(num => Number(num));
        if (dashboard[row][col] === false) {
            dashboard[row][col] = player;
 
            if (ifWins(dashboard, player)) {
                hasWon = true;
                break;
            }
 
            player = player === 'X' ? 'O' : 'X';
        } else if (dashboard.every(row => row.every(el => el !== false))) {
            break;
        }
        else {
            console.log('This place is already taken. Please choose another!');
        }
    }
 
    if (hasWon) {
        console.log(`Player ${player} wins!`);
    } else {
        console.log('The game ended! Nobody wins :(');
    }
 
    printMatrix(dashboard);
 
    function ifWins(dashboard, player) {
        return checkFirstDiagonal(dashboard, player) ||
            checkSecondDiagonal(dashboard, player) ||
            checkCols(dashboard, player) ||
            checkRows(dashboard, player);
    };
 
    function checkFirstDiagonal(dashboard, player) {
        return dashboard[0][0] === player &&
            dashboard[1][1] === player
            && dashboard[2][2] === player;
    }
 
    function checkSecondDiagonal(dashboard, player) {
 
        return dashboard[2][0] === player
            && dashboard[1][1] === player
            && dashboard[0][2] === player;
    }
 
    function checkRows(dashboard, player) {
 
        return (dashboard[0][0] === player
            && dashboard[0][1] === player && dashboard[0][2] === player)
            || (dashboard[1][0] === player && dashboard[1][1] === player
                && dashboard[1][2] === player)
            || (dashboard[2][0] === player && dashboard[2][1] === player
                && dashboard[2][2] === player);
    }
 
    function checkCols(dashboard, player) {
        return (dashboard[0][0] === player &&
            dashboard[1][0] === player
            && dashboard[2][0] === player)
            || (dashboard[0][1] === player && dashboard[1][1] === player
                && dashboard[2][1] === player) ||
            (dashboard[0][2] === player && dashboard[1][2] === player
                && dashboard[2][2] === player);
    }
 
    function printMatrix(dashboard) {
        dashboard.forEach(row => {
            console.log(row.join('\t'));
        });
    }
}