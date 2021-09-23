//child of app

//returns
// an array of Article components (one component for each post passed down as a prop to ArticleList)
// make sure to assign a unique key prop to each Article

import React from "react";
import Article from "./Article";

function ArticleList (props) {
    //props is equal to blogData.posts, so should be an array
    console.log('props in articlelist', props)
    //ACTUALLY PROPS ARE OBJECTS!!! so still have to dot into there to get into the array!

    console.log('props.bloginfo', props.blogInfo)
    //okay so props.blogInfo finally gets me into the array!


    return (
        <main>
            {props.blogInfo.map(each => <Article title={each.title} date={each.date} preview={each.preview} time={each.minutes} key={each.id} />)}
        </main>
    )
};

export default ArticleList;