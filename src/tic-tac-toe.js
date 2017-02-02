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
        var g = this._playGround;
        var p1 = this._firstPlayer;
        var p2 = this._secondPlayer;
        if ((g[0][0] == p1 && g[0][1] == p1 && g[0][2] == p1) ||
            (g[1][0] == p1 && g[1][1] == p1 && g[1][2] == p1) ||
            (g[2][0] == p1 && g[2][1] == p1 && g[2][2] == p1) ||
            (g[0][0] == p1 && g[1][0] == p1 && g[2][0] == p1) ||
            (g[0][1] == p1 && g[1][1] == p1 && g[2][1] == p1) ||
            (g[0][2] == p1 && g[1][2] == p1 && g[2][2] == p1) ||
            (g[0][0] == p1 && g[1][1] == p1 && g[2][2] == p1) ||
            (g[0][2] == p1 && g[1][1] == p1 && g[2][0] == p1)) {
            this._winner = p1;
        };
        if ((g[0][0] == p2 && g[0][1] == p2 && g[0][2] == p2) ||
            (g[1][0] == p2 && g[1][1] == p2 && g[1][2] == p2) ||
            (g[2][0] == p2 && g[2][1] == p2 && g[2][2] == p2) ||
            (g[0][0] == p2 && g[1][0] == p2 && g[2][0] == p2) ||
            (g[0][1] == p2 && g[1][1] == p2 && g[2][1] == p2) ||
            (g[0][2] == p2 && g[1][2] == p2 && g[2][2] == p2) ||
            (g[0][0] == p2 && g[1][1] == p2 && g[2][2] == p2) ||
            (g[0][2] == p2 && g[1][1] == p2 && g[2][0] == p2)) {
            this._winner = p2;
        };
        return this._winner;
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
        if (this.noMoreTurns() && !this.getWinner()) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this._playGround[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
