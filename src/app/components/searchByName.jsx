import React, { useState, useEffect } from "react";
import api from "../api";
import PropTypes from "prop-types";

const SearchByName = ({ userId, value, onChange, type }) => {
    const [name, setName] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setName(data));
    });
    const handleNameChanch = (userId) => {
        setName(userId.target.value);
        console.log(userId.target.value);
    };
    return (
        <div className="form-outline mb-4">
            <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Search..."
                value={name}
                onChange={handleNameChanch}
            />
        </div>
    );
};
SearchByName.defultProps = {
    types: "text"
};
SearchByName.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    userId: PropTypes.string
};

export default SearchByName;
