//child of ARTICLELIST

//returns
// a default value of "January 1, 1970" should be used if no date is passed as a prop

import React from "react";

function Article ({title, date="1/1/70", preview, time}) {

function coffeeCup () {
        //switch case
        const length = {time}
        const readTime = length.time

        // readTime === 5 ? '☕️' : null;
        // readTime === 15 ? '☕️ ☕️ ☕️' : null;

        switch(readTime) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                return <p>{'☕️'}</p>;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
                return <p>{'☕️ ☕️'}</p>;
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
                return <p>{'☕️ ☕️ ☕️'}</p>;
            default:
                return null;
        }
    }

    function bentoBox () {
        //switch case
        return '🍱'
    }


    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small> <br></br>

            <small>{time} minute read </small> 
            {time < 30 ? coffeeCup() : bentoBox() }
            
            <p>{preview}</p>
        </article>
    )
};

export default Article;