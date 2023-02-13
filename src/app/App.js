import React from "react";
import Users from "./components/users";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/layouts/login";
import Main from "./components/layouts/main";
import userApi from "./api/fake.api/user.api";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route
                    path="/users"
                    render={(props) => <Users users={userApi} {...props} />}
                />
                <Route
                    path="/users/:user._id"
                    render={(props) => <Users users={userApi} {...props} />}
                />
                <Route path="/login" component={Login} />
                <Route path="/" component={Main} />
            </Switch>
            {/* <Users /> */}
        </div>
    );
}

export default App;
