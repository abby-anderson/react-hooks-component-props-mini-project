//child of app

//returns
// the <img> element should use this placeholder image as a default value for the prop if no prop is passed in: "https://via.placeholder.com/215 (Links to an external site.)"

import React from "react";

function About (props) {
    return (
        <aside>
            <img src={props.blogImage} alt={"blog logo"} ></img>
            <p>{props.blogAbout}</p>
        </aside>
    )
};

export default About;