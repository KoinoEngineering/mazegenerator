import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import CommonHeader from "./common/CommonHeader";
import Navigation from "./common/Navigation";
import { IState } from "./common/State";
import Static from "./common/Static";
import { ComponentBase } from "./core/Component";
import { fromJS } from "./core/Immutable";
import { IPropsWithDispatch } from "./core/Props";
import Theme from "./core/Theme";
import StickDown from "./pages/StickDown";

export default class App extends ComponentBase<IAPPProps> {
    render() {
        const { state } = this.props;
        return <div>
            <MuiThemeProvider theme={Theme}>
                <div id="headerArea">
                    <CommonHeader state={fromJS({})} />
                </div>
                <div id="bodyArea" style={{ padding: 10 }}>
                    <Router>
                        <Static>
                            <Navigation />
                        </Static>
                        <div>
                            <Switch>
                                <Route path="/StickDown" render={() => <StickDown state={state.get('StickDown')} dispatch={this.props.dispatch} />} />
                                <Route render={() => <Redirect to={'/'} />} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </MuiThemeProvider>
        </div>
    }
}

interface IAPPProps extends IPropsWithDispatch<IState> { }
