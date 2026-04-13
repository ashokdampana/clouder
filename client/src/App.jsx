import { useEffect, useState } from "react";
import axios from "axios";
import img from "./assets/react.svg";

function App() {
  const [message, setMessage] = useState("");
  const [postRes, setPostRes] = useState("");

  // GET request
  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then(res => setMessage(res.data.message))
      .catch(err => console.log(err));
  }, []);

  // POST request
  const sendData = async () => {
    const res = await axios.post("http://localhost:5000/", {
      name: "Ashok"
    });
    setPostRes(res.data.message);
  };

  return (
    <div>
      <h1>Frontend</h1>
      <img src={img} width="200" />
      <p>{message}</p>

      <button onClick={sendData}>Send POST</button>
      <p>{postRes}</p>
    </div>
  );
}

export default App;