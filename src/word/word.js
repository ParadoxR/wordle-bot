import React from "react";
import '../App.css';

const Word = ({ children }) => {

    return (
        <>
        <div className="wrapper">
            {children}
        </div>
        </>
    )
}

export default Word;