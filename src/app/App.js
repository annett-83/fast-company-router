import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/layouts/login";
import Main from "./components/layouts/main";
import User from "./components/layouts/user";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={User} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Main} />
            </Switch>
            {/* <Users /> */}
        </div>
    );
}

export default App;
