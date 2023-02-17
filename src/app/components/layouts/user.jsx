import React from "react";
import { useParams } from "react-router-dom";
import Users from "../users";
import UserPage from "./usersPage";

const User = () => {
    const params = useParams();
    const { userId } = params;
    // console.log(userId);

    return <>{userId ? <UserPage id={userId} /> : <Users />}</>;
};

export default User;
