import React, {Component} from 'react';
import './App.css';
import axios from "axios";

import {Game, GameState, Coordinates} from "./Game";


class App extends Component<any, GameState> {

    constructor(props: any) {
        super(props);
        this.state = {field: [], gameOver: false, clickHandler: this.gameClickHandler};
        this.gameClickHandler = this.gameClickHandler.bind(this);
    }

    render() {
        const state = this.state.field;

        return (
            <div>
                <Game field={state} gameOver={this.state.gameOver} clickHandler={this.gameClickHandler}/>
            </div>
        );

    }

    gameClickHandler(coords: Coordinates) {
        axios.post(`http://localhost:8081/api/game/setup/4/4/`)
            .catch(error => console.log(error));

        axios.get(`http://localhost:8081/api/game/board/`)
            .then(this.updateBoard)
            .catch(error => console.log(error));

        axios.post(`http://localhost:8081/api/game/play/${coords.x}/${coords.y}/`)
            .catch(error => console.log(error));

        axios.get(`http://localhost:8081/api/game/board/`)
            .then(this.updateBoard)
            .catch(error => console.log(error))
    }

    updateBoard = (response: any) => {
        this.setState(response.data);
    }
}

export default App;
