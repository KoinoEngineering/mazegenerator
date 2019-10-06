import React from "react";
import { ComponentBase } from "../../core/Component";
import { IStickDownProps } from "./props";
import NumberBox from "../../common/NumberBox";
import Maze from "./parts/Maze";
import { createStyles, withStyles } from "@material-ui/core";

const style = createStyles({
    root: {
        padding: 10
    },
})

class StickDown extends ComponentBase<IStickDownProps> {
    render() {
        const { state, classes, dispatch } = this.props
        return <div className={classes.root}>
            <div>
                <NumberBox state={state.get("height")} dispatch={dispatch} />
            </div>
            <div>
                <NumberBox state={state.get("width")} dispatch={dispatch} />
            </div>
            <div>
                <Maze state={state.get("maze")} dispatch={dispatch} />
            </div>
        </div >;
    }
}

export default withStyles(style)(StickDown);