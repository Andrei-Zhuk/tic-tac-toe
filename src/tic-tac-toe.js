class TicTacToe {
    constructor() {
        this._firstPlayer = 'x';
        this._secondPlayer = 'o';
        this._playGround = [[null, null, null], [null, null, null], [null, null, null]]
        this._winner = null;
        this._current = this._firstPlayer;
    }

    getCurrentPlayerSymbol() {
        return this._current;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this._playGround[rowIndex][columnIndex] === null) {
            this._playGround[rowIndex][columnIndex] = this._current;
            if (this._current === this._firstPlayer) {
                this._current = this._secondPlayer;
                } else {
                this._current = this._firstPlayer
            }
        }   
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {
        for(var i = 0; i < 3; i++) {
            for(var j = 0; j < 3; j++) {
                if (this._playGround[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        return this._playGround[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
