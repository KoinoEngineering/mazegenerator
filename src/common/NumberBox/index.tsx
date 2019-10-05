import React, { ChangeEvent } from "react";
import { ComponentBase } from "../../core/Component";
import { INumberBoxProps } from "./props";
import { generateAction } from "../../core/Action";
import { createStyles, withStyles, Slider } from "@material-ui/core";

const style = createStyles({
    root: {
        display: "inline-block"
    }
})

class NumberBox extends ComponentBase<INumberBoxProps> {
    render() {
        const { state, dispatch, classes } = this.props;
        return <div className={classes.root}>
            <input type="text" value={state.get('value')} onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(generateAction("PUT_COMMON_NUMBERBOX_CHANGE", state.get('path'), { value: e.target.value }))} />
            <Slider
                step={1}
                marks
                min={5}
                max={100}
                valueLabelDisplay="auto"
                onChange={(e, value) => dispatch(generateAction("PUT_COMMON_NUMBERBOX_CHANGE", state.get('path'), { value: value.toString() }))}
            />
        </div>;
    }
}

export default withStyles(style)(NumberBox);