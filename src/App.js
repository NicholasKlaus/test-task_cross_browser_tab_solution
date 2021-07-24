import React, { useState } from 'react';
import tabs from './tabs.json';

function App() {
  const [index, setIndex] = useState(0);
  
  const toggleHandler = (id) => {
    setIndex(id);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="tab-wrap">
          <div className="tab">
            {
              tabs.map((el,key) => {
                return(
                  <span key={key} className={index === el.id ? "btn-basic btn-active": el.disabled ?"btn-basic btn-disabled": "btn-basic"} onClick={() => toggleHandler(el.id)}>{el.title}</span>
                )
              })
            }          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
