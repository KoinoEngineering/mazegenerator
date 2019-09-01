import React from "react";
import { ComponentBase } from "../../core/Component";
import { IStickDownProps } from "./props";
import { TextBox } from "../../common/TextBox";

export class StickDown extends ComponentBase<IStickDownProps> {
    render() {
        const { state, dispatch } = this.props
        return <div>
            <div>
                <TextBox state={state.get("height")} dispatch={dispatch} />
            </div>
            <div></div>
        </div>;
    }
}