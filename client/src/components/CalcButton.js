import React from "react";

const CalcButton = ({content, onClick, type}) => {
    return (
    <div
        className={`Button ${content === "0" ? "zero" : ""} ${type || ""}`}
        onClick={onClick(content)}
    >
        {content}
    </div>
    );
};

export default CalcButton;