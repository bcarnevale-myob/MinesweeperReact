import React, {Component} from "react";
import {Coordinates} from "./Game"

type FieldProps = {
    onClick: (coord: Coordinates) => void
}

type ColProps =
    {
        value: string,
        col: number,
    }
type RowProps =
    {
        value: string,
        row: number
    }

class FieldColumn extends Component<FieldProps & RowProps & ColProps> {
    constructor(props: any) {
        super(props);
        this.click = this.click.bind(this);
    }

    render() {
        return <button id="square" type="button" onClick={this.click}>{this.props.value}</button>;

    }

    click() {
        this.props.onClick({x: this.props.row, y: this.props.col})
    }
}

class FieldRow extends Component<FieldProps & RowProps> {
    render() {
        return <div>{
            this.props.value.split("").map((c, col) => <FieldColumn row={this.props.row} col={col}
                                                                onClick={this.props.onClick} value={c}/>)
        }</div>;
    }
}

export class Field extends Component<{ onClick: (coord:Coordinates) => void, field: string[] }> {
    render() {
        return <div id={'field'}>
            {this.props.field.map((value, row) => <FieldRow row={row} onClick={this.props.onClick} value={value}/>)}
            <br/>
        </div>;
    }
}