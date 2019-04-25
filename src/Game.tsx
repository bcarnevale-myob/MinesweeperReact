import React, {Component} from 'react';

export type GameField = String[];
export type Coordinates = {
    x: number,
    y: number
}
export type GameState = {
    field: GameField,
    gameOver: boolean,
    clickHandler: (coords:Coordinates) => void,
};

export class Game extends Component<GameState, any> {

    render() {
        console.log("App props:")
        console.log(this.props);
        return (
            <div onClick={this.fieldClickHandler}>
                {this.props.field}<br/>
                {this.props.gameOver ? "BOOM! GAME OVER" : "Select your next hit"}
            </div>
        )
    }

    fieldClickHandler = () => {
            this.props.clickHandler({x: 2,y: 2})
    }
}