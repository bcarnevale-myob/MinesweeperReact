import React, {Component} from 'react';
import {FieldSize} from "./FieldSize";
import {Field} from "./Field";

export type Coordinates = {
    x: number,
    y: number
}

export type Size = {
    height: number,
    width: number
}

export interface GameEventHandlers {
    clickHandler: (coords: Coordinates) => void,
    sizeHandler: (size: Size) => void,
}

export interface GameData {
    field: string[],
    gameOver: boolean,
}

export class Game extends Component<GameEventHandlers & GameData, never> {
    constructor(props: Readonly<GameEventHandlers & GameData>) {
        super(props);
    }

    render() {
        return (
            <div>
                <FieldSize sizeChanged={this.props.sizeHandler}/>

                <Field onClick={this.props.clickHandler} field={this.props.field}/>
                <p>{this.props.gameOver ? "BOOM! GAME OVER" : "Select your next hit"}</p>

            </div>
        )
    }




}