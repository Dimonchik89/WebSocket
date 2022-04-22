import React, { useEffect, useState } from "react";
import Message from "../Message/Message";
import { nanoid } from "nanoid";

const ws = new WebSocket("ws://127.0.0.1:8080")

const Chat = () => {
    const [ content, setContent ] = useState([]);
    const send = (event) => {
        event.preventDefault();
        const name = event.target?.name?.value;
        const message = event.target?.text?.value
        ws.send(JSON.stringify({name, message}))
    }

    useEffect(() => {
        ws.onmessage = (message) => {
            const name = JSON.parse(message?.data)[0]?.name || "";
            const text = JSON.parse(message?.data)[0]?.message || "";
            setContent(content => [...content, <Message key={nanoid()} name={name} message={text}/>])
        }
    }, [])

    return (
        <>
            <form
                id="messageForm"
                style={{marginTop: "30px"}}
                onSubmit={(event) => send(event)}
            >
                <input type="text" name="name" id="name"/>
                <input type="text" name="text" id="text"/>
                <input type="submit" value="send" />
            </form>
            <div id="chat">
                {content}
            </div>
        </>
    )
}
export default Chat;