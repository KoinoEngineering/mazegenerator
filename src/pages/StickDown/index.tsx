import React from "react";
import { ComponentBase } from "../../core/Component";
import { IStickDownProps } from "./props";
import TextBox from "../../common/TextBox";
import Maze from "./parts/Maze";

export class StickDown extends ComponentBase<IStickDownProps> {
    render() {
        const { state, dispatch } = this.props
        return <div >
            <div>
                高さ：<TextBox state={state.get("height")} dispatch={dispatch} />
            </div>
            <div>
                幅&emsp;：<TextBox state={state.get("width")} dispatch={dispatch} />
            </div>
            <div>
                <Maze state={state.get("maze")} dispatch={dispatch} />
            </div>
        </div >;
    }
}

