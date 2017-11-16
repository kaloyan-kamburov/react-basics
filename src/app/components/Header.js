// import React from "react";
// import PropTypes from "prop-types";

// export const Header = (props) => {
//     return(
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container">
//                 <div className="navbar-header">
//                     {props.homeLink}
//                 </div>           
//             </div>
//         </nav>
//     );
// }

import React from "react";
import { Link } from "react-router";

export const Header = (props) => {
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"} activeClassName={"active"} activeStyle={{color: "red"}}>Home</Link></li>
                        <li><Link to={"/user/10"} activeClassName={"active"} activeStyle={{color: "red"}}>user</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}