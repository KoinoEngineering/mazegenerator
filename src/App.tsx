import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IState } from "./common/State";
import Static from "./common/Static";
import { ComponentBase } from "./core/Component";
import { IPropsWithDispatch } from "./core/Props";
import { StickDown } from "./pages/StickDown";
import Navigation from "./common/Navigation";

export default class App extends ComponentBase<IAPPProps> {
    render() {
        const { state } = this.props;
        return <Router>
            <Static>
                <Navigation />
            </Static>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/StickDown">
                        <StickDown state={state.get('StickDown')} dispatch={this.props.dispatch} />
                    </Route>
                </Switch>
            </div>
        </Router>
    }
}

interface IAPPProps extends IPropsWithDispatch<IState> { }
