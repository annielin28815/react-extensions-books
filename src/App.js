import React, { useState } from 'react';
import './App.css';

function App() {
  const [btnList, setBtnList] = useState([
    {
      id: 1,
      name: "主站",
      url: "https://www.books.com.tw/"
    },
    {
      id: 2,
      name: "Portal",
      url: "https://portal.bpm.books.com.tw:8443/"
    },
    {
      id: 3,
      name: "Intranet(新)",
      url: "https://intranet.books.com.tw/exep/intranet/main/index_main.php"
    },
    {
      id: 4,
      name: "Intranet(舊)",
      url: "https://intranet5.books.com.tw/siteindex/loadMain"
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
            <button onClick={() => openTabs(item.url)} className='btn'>{item.name}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;
