import { useContext, useEffect } from "react";
import { MessagesContext } from "./MessagesContext";

export default function Messages() {
  const AllMessages = useContext(MessagesContext);

  useEffect(() => {
    console.log("A new message was added");
    console.log(AllMessages);
  }, [AllMessages]);

  return (
 <div className="space-y-4 p-15">
      {AllMessages[0].map((messageContent, index) => (
        <div
          key={index}
          className="flex items-start gap-4 bg-white p-4 rounded-md shadow-sm"
        >
          {/* Avatar */}
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={messageContent[1]}
            alt="avatar"
          />

          {/* Message Content */}
          <div className="flex-1">
            <p className="text-gray-800">{messageContent[0]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
