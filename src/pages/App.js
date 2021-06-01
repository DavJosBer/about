import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Welcome} from "./Welcome";
import {About} from "./About";
export class App extends React.Component{
    navOptions = {
        home: "Inicio",
        about: "Acerca de mi"
    }
    render(){
        return(
            <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Welcome
                            home={this.navOptions.home}
                            about={this.navOptions.about}
                            />
                        </Route>
                        <Route exact path="/about-david">
                            <About
                            home={this.navOptions.home}
                            about={this.navOptions.about}
                            />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}