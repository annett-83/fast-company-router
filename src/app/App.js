import React from "react";
import Users from "./components/users";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import UsersNav from "./components/layouts/usersNav";
import Login from "./components/layouts/login";
import Main from "./components/layouts/main";
import UsersTable from "./components/usersTable";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users" component={UsersNav} />
                <Route path="/users" render={() => <UsersTable />} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Main} />
            </Switch>
            <Users />
        </div>
    );
}

export default App;
