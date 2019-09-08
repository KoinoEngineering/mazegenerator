import { IRoomProps } from "./props";
import { ComponentBase } from "../../../../core/Component";
import React from "react";
import { createStyles } from "@material-ui/core";
import classNames from "classnames";
import { withStyles } from "@material-ui/styles";

const style = createStyles({
    root: {
        display: "inline-block",
        boxSizing: "border-box",
        width: 10,
        height: 10
    },
    pillar: {
        backgroundColor: "#000000"
    },
    wall: {
        backgroundColor: "#000000"
    },
    load: {
        backgroundColor: "#FFFFFF"
    },
})

class Room extends ComponentBase<IRoomProps> {
    render() {
        const { state, classes } = this.props;
        return <div className={classNames(classes.root, classes[state.get("type")])} />;
    }
}
export default withStyles(style)(Room);