import React from "react";
import { ComponentBase } from "../../../../core/Component";
import { IMazeProps } from "./props";

export default class Maze extends ComponentBase<IMazeProps> {
    render() {
        const { state } = this.props;
        return <div >
            {
                state.get("maze").map(row => {
            return <div>
            {
                row.map(room=>{
                    return <Room/>
                })
            }</div>        
                })
            }
        </div>;
    }
}
