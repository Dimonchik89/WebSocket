import React from "react";

const Message = ({name, message}) => {
    return (
        <div style={{display: "flex"}}>
            <h3>
                {`${name}:`}
            </h3>
            <h3>{message}</h3>
        </div>
    )
}
export default Message;