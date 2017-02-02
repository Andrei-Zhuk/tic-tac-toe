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

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;
