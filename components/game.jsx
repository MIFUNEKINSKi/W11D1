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
    }
}

export default Game;

}