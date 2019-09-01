import React, { ChangeEvent } from "react";
import { ComponentBase } from "../../core/Component";
import { ITextBoxProps } from "./props";
import { generateAction } from "../../core/Action";

export class TextBox extends ComponentBase<ITextBoxProps> {
    render() {
        const { state, dispatch } = this.props;
        return <div>
            <input type="text" value={state.get('value')} onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(generateAction("COMMON_TEXTBOX_CHANGE", state.get('path'), { value: e.target.value }))} />
        </div>;
    }
}