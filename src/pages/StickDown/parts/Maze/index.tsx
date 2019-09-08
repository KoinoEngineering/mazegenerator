import React from "react";
import { ComponentBase } from "../../../../core/Component";
import { IMazeProps } from "./props";
import Room from "../Room";
import { withStyles, createStyles } from "@material-ui/styles";

const style = createStyles({
    row: {
        height: 10,
        borderCollapse: "collapse"
    }
})


class Maze extends ComponentBase<IMazeProps> {
    render() {
        const { state, classes, dispatch } = this.props;
        return <div >
            <div>
                <button onClick={() => dispatch({
                    type: "STICK_DOWN_GNENRATE_START",
                    payload: {
                        path: state.get("path")
                    },
                    meta: {}
                })}>Generate</button>
            </div>
            <div>
                {
                    state.get("field").map((row, h) => {
                        return <div key={state.get("path").push(h).join(",")} className={classes.row}>
                            {
                                row.map(room => {
                                    return <Room key={room.get("path").join(",")} state={room} />
                                })
                            }</div>
                    })
                }
            </div>
        </div>;
    }
}
export default withStyles(style)(Maze)