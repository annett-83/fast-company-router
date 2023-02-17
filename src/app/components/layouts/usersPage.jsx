import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../api";
import QualitiesList from "../qualitiesList";
import { useHistory } from "react-router-dom";
const UserPage = ({ id }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    });
    const handeleBackToUser = () => {
        history.replace("/users");
    };
    if (user) {
        return (
            <div>
                <div>{user.name}</div>
                <div>Профессия: {user.profession.name}</div>
                <QualitiesList qualities={user.qualities} />
                <div>completedMeetings: {user.completedMeetings}</div>
                <div>Rate: {user.rate}</div>
                <button
                    onClick={() => {
                        handeleBackToUser();
                    }}
                >
                    Все пользователи
                </button>
            </div>
        );
    }
    return "loading...";
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserPage;
