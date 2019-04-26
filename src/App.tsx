import React, {Component} from 'react';
import './App.css';
import axios from "axios";

import {Game, GameEventHandlers, Coordinates, Size, GameData} from "./Game";

type AppState = GameData & GameEventHandlers;

class App extends Component<any, AppState> {

    constructor(props: any) {
        super(props);
        this.gameClickHandler = this.gameClickHandler.bind(this);
        this.gameSizeHandler = this.gameSizeHandler.bind(this);
        this.updateBoard = this.updateBoard.bind(this);

        this.state = {
            field: [],
            gameOver: true,
            clickHandler: this.gameClickHandler,
            sizeHandler: this.gameSizeHandler,

        }
    }

    componentDidMount(): void {
        this.gameSizeHandler({height:4,width:4})
    }

    render() {
        return (
            <div>
                <Game {...this.state}/>
            </div>
        );

    }

    async gameSizeHandler(size: Size) {
        try {
            await axios.post(`http://localhost:8081/api/game/setup/${size.height}/${size.width}/`);
            const {data: gameData} = await axios.get(`http://localhost:8081/api/game/board/`);
            this.updateBoard(gameData);
        } catch (error) {
            console.log(error);
        }
    }

    async gameClickHandler(coords: Coordinates) {

        try {
            await axios.post(`http://localhost:8081/api/game/play/${coords.x}/${coords.y}/`);
            const {data: gameData} = await axios.get(`http://localhost:8081/api/game/board/`);
            this.updateBoard(gameData);
        } catch (error) {
            console.log(error);
        }

    }

    updateBoard(gameData: GameData) {
        this.setState(gameData);
    }
}

export default App;
