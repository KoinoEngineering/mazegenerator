import React from "react";
import { ComponentBase } from "./core/Component";
import { StickDown } from "./pages/StickDown";
import { IState } from "./common/State";
import { IPropsWithDispatch } from "./core/Props";

export default class App extends ComponentBase<IAPPProps> {
    render() {
        const { state } = this.props;
        return <>
            <StickDown state={state.get('StickDown')} dispatch={this.props.dispatch} />
        </>
    }
}

interface IAPPProps extends IPropsWithDispatch<IState> { }
