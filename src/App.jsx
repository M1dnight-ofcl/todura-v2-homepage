import { useState } from 'react';
import './App.scss';
const App=()=>{
  return(<>
    <header>
      <div className="sectionWrapper">
        <div className="split_left">
          <div className="contentWrapper">
            <h2>Next-Generation</h2>
            <h1>Todo App</h1>
            <div className="gap_small"></div>
            <p>
              Task-management at it's peak. With advanced features like 
              colored tasks, advanced theming, and a sleek ui, Todura V2 
              will be your ticket to advanced and efficient task management
            </p>
          </div>
        </div>
        <div className="split_right">
          {/* <div id="appPreview"></div> */}
        </div>
      </div>
    </header>
  </>);
};
export default App;
