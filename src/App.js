import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "./config";
import "./App.css";

function App() {
  const [backendMsg, setBackendMsg] = useState(null);
  useEffect(() => {
    axios({
      url: API + "/api/message",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
      },
      method: "GET",
    }).then((body) => {
      setBackendMsg(body?.data?.body);
    });
  }, []);

  return (
    <div className="App">
      {backendMsg === null ? <h1>Loading....</h1> : <h1>{backendMsg}</h1>}
    </div>
  );
}

export default App;
