import React from "react";
import PropTypes from "prop-types";

const SearchByName = ({ onChange, search }) => {
    const handleTextChange = (e) => {
        onChange(e.target.value);
        console.log(e);
    };
    return (
        <div className="form-outline mb-4">
            <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Search..."
                value={search}
                onChange={handleTextChange}
            />
        </div>
    );
};
SearchByName.defultProps = {
    types: "text"
};
SearchByName.propTypes = {
    onChange: PropTypes.func,
    search: PropTypes.string
};

export default SearchByName;
