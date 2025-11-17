import { useState } from "react";
import "./index.css";
import { useEffect } from "react";
import { getRandomUrl } from "./assets/randomAvatars";
import Messages from "./assets/Messages";

function App() {
  const [randomUrls, setRandomUrls] = useState([]);

  useEffect(() => {
    //creates 9 images of random avatars
    const urls = [];
    for (let i = 0; i < 9; i++) {
      const url = getRandomUrl();
      urls.push(url);
    }

    setRandomUrls(urls);
  }, []);

  // loops thru each url to display an image for each
  return (
    <div className="bg-blue-50 w-full h-full">
      <div className="grid grid-cols-3 w-fit mx-auto">
        {randomUrls.map((url, i) => (
          
          <img className=" w-24 h-24 object-cover border" key={url + i} src={url}></img>
        ))}
      </div>
      <Messages />
    </div>
  );
}

export default App;
