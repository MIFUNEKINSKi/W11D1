import React from 'react';

class Game extends React.Component {
    constructor(props);
    super(props);
    let board = new Minesweeper.board(9, 10);
    this.state = { board: board };
}

    updateGame() {
       
    }

    render() {
    let modal;
    if (this.state.board.lost() || this.state.board.won()) {
        const text = this.state.board.won() ? "You won!" : "You lost!";
        modal =
            <div className='modal-screen'>
                <div className='modal-content'>
                    <p>{text}</p>
                    <button onClick={this.restartGame}>Play Again</button>
                </div>
            </div>;
    }

    return (
        <div>
            {modal}
            <Board board={this.state.board} updateGame={this.updateGame} />
        </div>
    );
}
    }
}

export default Game;

}