import { useEffect, useState } from "react";
import axios from "axios";

const api =  axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL
})

function App() {
  const [message, setMessage] = useState("");
  const [postRes, setPostRes] = useState("");

  // GET request
  useEffect(() => {
    async function fetchHealth(params) {
      const res = await api.get("/health");
      setMessage( res.data.message);
    }
    fetchHealth()
  }, []);

  // POST request
  const sendData = async () => {
    const res = await api.post("/data", {
      name: "Ashok"
    });
    setPostRes(res.data.message + " " + res.data.name);
  };

  return (
    <div className="App">
      <h1>Frontend</h1>
      <p> here is /api/health result -- {message}</p>

      <button onClick={sendData}>Send POST</button>
      <p>{postRes}</p>
    </div>
  );
}

export default App;