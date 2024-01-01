import React, { useState } from 'react';
import './App.css';

function App() {
  const [btnList, setBtnList] = useState([
    {
      id: 1,
      name: "主站",
      url: ""
    },
    {
      id: 2,
      name: "Portal",
      url: ""
    },
    {
      id: 3,
      name: "Intranet(新)",
      url: ""
    },
    {
      id: 4,
      name: "Intranet(舊)",
      url: ""
    },
    {
      id: 5,
      name: "供應鏈(新)",
      url: ""
    },
    {
      id: 6,
      name: "供應鏈(舊)",
      url: ""
    },
  ]);

  const openTabs = (url) => {
    window.open(url, "_blank");
  }

  return (
    <div className="App">
      <h3>Choose it!</h3>
      <div className="btn-list">
        {btnList.length > 0 && btnList.map((item) => {
          return (
            <button onClick={() => openTabs(item.url)}>{item.name}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;
