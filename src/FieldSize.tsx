import React, {Component} from "react";
import {Size} from "./Game";

export type FieldSizeFormProps = {
    sizeChanged: (size:Size) => void
}

export class FieldSize extends Component<FieldSizeFormProps, Size> {
    constructor(props: Readonly<FieldSizeFormProps>) {
        super(props);
        this.state = {height: 4, width: 4}
    }

    render() {
        return <form>
            Field Height: <input name="height" value={this.state.height}
                                 onChange={(e) => this.setState({height: e.target.valueAsNumber})}
                                 type={"number"}/>
            Field Width: <input name="width"
                                value={this.state.width}
                                onChange={(e) => this.setState({width: e.target.valueAsNumber})}
                                type={"number"}/><br/>
            <button type="button" onClick={() => this.props.sizeChanged(this.state)}>Let's Play!</button><br/><br/>
        </form>;
    }
}