import React, { useState, useEffect } from "react";
import api from "../api";
import PropTypes from "prop-types";

const SearchByName = () => {
    const [name, setName] = useState();
    useEffect(() => {
        api.users.getById(name).then((data) => setName(data));
    });
    const handleNameChanch = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    };
    return (
        <div className="form-outline mb-4">
            <input
                type="text"
                className="form-control"
                id="name"
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
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    error: PropTypes.string
};

export default SearchByName;
