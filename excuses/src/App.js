import "./styles.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [prob, setProb] = useState("");
  const fetchData = (name) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${name}/`).then(
      (res) => {
        setProb(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h1>Generate Excuse</h1>
      <div className="button-container">
        <button className="excuse-button" onClick={() => fetchData("party")}>
          Party
        </button>
        <button className="excuse-button" onClick={() => fetchData("family")}>
          Family
        </button>
        <button className="excuse-button" onClick={() => fetchData("office")}>
          Office
        </button>
      </div>
      <p className="excuse-text">{prob}</p>
    </div>
  );
}

export default App;
