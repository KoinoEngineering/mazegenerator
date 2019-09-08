import React from "react";
import { ComponentBase } from "../../core/Component";
import { IStickDownProps } from "./props";
import NumberBox from "../../common/NumberBox";
import Maze from "./parts/Maze";

export class StickDown extends ComponentBase<IStickDownProps> {
    render() {
        const { state, dispatch } = this.props
        return <div >
            <div>
                高さ：<NumberBox state={state.get("height")} dispatch={dispatch} />
            </div>
            <div>
                幅&emsp;：<NumberBox state={state.get("width")} dispatch={dispatch} />
            </div>
            <div>
                <Maze state={state.get("maze")} dispatch={dispatch} />
            </div>
        </div >;
    }
}

