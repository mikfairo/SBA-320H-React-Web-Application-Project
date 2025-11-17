import { useContext, useEffect } from "react";
import { MessagesContext } from "./MessagesContext";

export default function Messages() {

    const AllMessages = useContext(MessagesContext);
    
    useEffect(() => {
        console.log("A new message was added")
        console.log(AllMessages)
    }, [AllMessages])

    return (
        AllMessages[0].map((messageContent) => (
            <div className="bg-blue-50">
            <h1>{messageContent[0]}</h1>
            <img className=" w-25 h-25" src={messageContent[1]}/>
            </div>
        ))
    )
}
