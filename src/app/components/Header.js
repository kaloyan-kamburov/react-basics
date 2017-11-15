import React from "react";
import PropTypes from "prop-types";

export const Header = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="navbar-header">
                    {props.homeLink}
                </div>           
            </div>
        </nav>
    );
}