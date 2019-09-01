import React, { ChangeEvent } from "react";
import { ComponentBase } from "../../core/Component";
import { ITextBoxProps } from "./props";
import { generateAction } from "../../core/Action";
import { createStyles, withStyles } from "@material-ui/core";

const style = createStyles({
    root: {
        display: "inline-block"
    }
})

class TextBox extends ComponentBase<ITextBoxProps> {
    render() {
        const { state, dispatch, classes } = this.props;
        return <div className={classes.root}>
            <input type="text" value={state.get('value')} onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(generateAction("COMMON_TEXTBOX_CHANGE", state.get('path'), { value: e.target.value }))} />
        </div>;
    }
}

export default withStyles(style)(TextBox);