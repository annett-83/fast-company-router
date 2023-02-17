import React from "react";
import PropTypes from "prop-types";

const UserPage = ({ id }) => {
    return <div >{id} </div>;
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserPage;
