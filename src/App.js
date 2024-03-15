import React, { useState } from 'react';
import './App.css';

function App() {
  const year = document.querySelector(".year");
  const [thisYear, setThisYear] = useState(new Date().getFullYear());

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
      url: "https://intranet5.books.com.tw/siteindex/loadMain"
    },
    {
      id: 4,
      name: "Intranet(舊)",
      url: "https://intranet.books.com.tw/exep/intranet/main/index_main.php"
    },
    {
      id: 5,
      name: "Demo 清單",
      url: "https://demo.books.com.tw/"
    },
    {
      id: 6,
      name: "EDM test",
      url: "http://10.38.25.168/mail/"
    },
    {
      id: 7,
      name: "Mobile Debug",
      url: "chrome://inspect/#devices"
    },
    {
      id: 8,
      name: "APP 例行測試",
      url: "https://docs.google.com/spreadsheets/d/10F2OLI22J49pH4u4vOYvkRe-2ci24LcIImXnC51O_7E/edit#gid=0"
    }
  ]);

  const openTabs = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="app">
      <h3>Shortcut key</h3>
      <div className="btn-list">
        {btnList.length > 0 && btnList.map((item) => {
          return (
            <button key={item.id} className="btn" onClick={() => openTabs(item.url)}>
              <span className="deco"></span>
              <span className="text">{item.name}</span>
            </button>
          )
        })}
      </div>

      <div className="mail-btn-list">
        <span>一鍵寄信給老大</span>
        <a href="mailto:paul_chan@books.com.tw" className="mail-link">
          <span className="deco">
            <svg className="deco-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span className="text" title="open mail server">go</span>
          <span className="invisible" title="open mail server">go</span>
        </a>
      </div>

      <p>&copy;{thisYear} All Rights Reserved.</p>
    </div>
  );
}

export default App;
