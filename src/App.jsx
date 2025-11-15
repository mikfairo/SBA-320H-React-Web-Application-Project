import { useState } from "react";
import "./index.css";
import { useEffect } from "react";
import { getRandomUrl } from "./assets/randomAvatars";

function App() {

  const [randomUrls, setRandomUrls] = useState([]);

  useEffect(() => { //creates 9 images of random avatars 
    const urls = [] 
    for (let i = 0; i < 9 ; i++) {
      const url = getRandomUrl()
      urls.push(url)
    }

    setRandomUrls(urls);

  }, []);

  // loops thru each url to display an image for each
  return <> 
    {randomUrls.map(( url, i ) => ( 
      <img key={ url + i } src={url}>
      
      </img>
    ))}
    
  </>;
}

export default App;
