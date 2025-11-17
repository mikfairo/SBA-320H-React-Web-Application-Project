import { useContext, useState } from "react";
import "./index.css";
import { useEffect } from "react";
import { getRandomUrl } from "./assets/randomAvatars";
import Messages from "./assets/Messages";
import { MessagesContext } from "./assets/MessagesContext";

function App() {
  const [randomUrls, setRandomUrls] = useState([]);
  const [viewingAvatars, setViewingAvatars] = useState(false); //to display the grid of images to select from
  const [selectedAvatar, setSelectedAvatar] = useState(); //for avatars to be selected

  const AllMessages = useContext(MessagesContext);

  useEffect(() => {
    //creates 9 images of random avatars
    const urls = [];
    for (let i = 0; i < 9; i++) {
      const url = getRandomUrl();
      urls.push(url);
    }

    setRandomUrls(urls);
  }, []);

  function publish(formData) {
    const content = formData.get("content");
    const button = formData.get("button");
    console.log(content, selectedAvatar);
    AllMessages.push([selectedAvatar, content]);
  }

  // loops thru each url to display an image for each
  return (
    <div className="bg-black w-full h-full">
      <button
        className="bg-amber-500"
        onClick={() => setViewingAvatars(!viewingAvatars)}
      >
        Choose your avatar
      </button>
      {/* if selecting an avatar is true than show the div with mapped images  */}
      {viewingAvatars && (
        <div className="grid grid-cols-3 w-fit mx-auto">
          {randomUrls.map((url, i) => (
            <img
              onClick={() => {
                setSelectedAvatar(url);
                setViewingAvatars(!viewingAvatars);
              }}
              className=" w-24 h-24 bg-blue-50 object-cover border"
              key={url + i}
              src={url}
            ></img>
          ))}
        </div>
      )}
      {selectedAvatar && (
        <>
          <h1>Your selected avatar</h1>
          <img src={selectedAvatar} />
        </>
      )}
      <form className="flex flex-col" action={publish}>
        <textarea
          className="border bg-blue-50 mx-auto"
          name="content"
          rows={4}
          cols={40}
        />
        <br />
        <button
          className="bg-lime-400 p-3 rounded shadow-2xl hover:bg-amber-600"
          type="submit"
          name="button"
          value="submit"
        >
          Publish
        </button>
      </form>
      <Messages />
    </div>
  );
}

export default App;
