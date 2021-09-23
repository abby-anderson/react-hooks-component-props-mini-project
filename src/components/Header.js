//child of app

// returns
// a <header> element with the following elements inside:
// an <h1> with the name of the blog, passed as a prop

import React from "react";

function Header (props) {
    return (
        <header>
            <h1>{props.blogName}</h1>
        </header>
    )
};

export default Header;