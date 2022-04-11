import React from 'react';

class Game extends React.Component {
    constructor(props);
    super(props);
    let board = new Minesweeper.board(9, 10);
    this.state = { board: board };
    this.updateGame = this.updateGame.bind(this);
}

    updateGame() {
       
    }

    render() {
    if (this.state.board.lost() || this.state.board.won()) {
        const text = this.state.board.won() ? "You won!" : "You lost!";
       
    }

    return (
        <div>
            <Board board={this.state.board} updateGame={this.updateGame} />
        </div>
    );
}
    }
}

export default Game;

}