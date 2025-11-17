import { useContext, useEffect } from "react";
import { MessagesContext } from "./MessagesContext";

export default function Messages() {

    const AllMessages = useContext(MessagesContext);
    
    useEffect(() => {
        console.log("A new message was added")
    }, [AllMessages])

    return (
        AllMessages.map((messageContent) => (
            <>
            <img src={messageContent[0]}/>
            <h1>{messageContent[1]}</h1>
            </>
        ))
    )
}
