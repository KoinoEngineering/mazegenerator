import React from "react";
import { ComponentBase } from "./core/Component";
import { IPropBase } from "./core/Props";
import { IState } from "./common/State";
import { TextBox } from "./common/TextBox";

export default class App extends ComponentBase<IAPPProps> {
    render() {
        const { state } = this.props;
        return <div >
            <TextBox state={state.get("StickDown").get('height')} dispatch={this.props.dispatch} />
        </div>;
    }
}

interface IAPPProps extends IPropBase<IState> { }
