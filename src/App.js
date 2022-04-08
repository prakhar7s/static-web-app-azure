import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

const BASE_URL = 'http://localhost:7071/'

function App() {

useEffect(() => {
  axios({ url : BASE_URL + 'api/GetName',             headers: { 'Content-Type': 'application/json','Access-Control-Allow-Headers':"*"}
, method: "GET"}).then(body => {
    console.log(body)
  })
}, [])


  return (
    <div className="App">
      <h1>First commit after deployment</h1>
    </div>
  );
}

export default App;
