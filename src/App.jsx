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
              Task-management at its peak. With advanced features like 
              colored tasks, advanced theming, and a sleek ui, Todura V2 
              will be your ticket to advanced and efficient task management
            </p>
            <div className='gap_medium'></div>
            <div className="buttonWrapper">
              <button className='s1'>Web Version</button>
              <button className='s1'>Our Github</button>
            </div>
          </div>
        </div>
        <div className="split_right">

        </div>
      </div>
    </header>
    <div id="s1" className='section'>
      <div className="split_left">
        <div className="appPreviewWrapper">
          <iframe 
            id="appPreview"
            src="https://todura-v2.vercel.app"/>
        </div>
      </div>
      <div className="split_right">
        <div className="contentWrapper">
          <h1>A Sleek UI</h1>
          <h2>Functional, Practical, and Useful</h2>
          <div className="gap_small"></div>
          <p>
            With useful features like color marking, importance, and so much 
            more! Todura V2 has tons of features to allow for task management 
            with ease. Our sleek interface is built to be practical without any 
            sacrifices.
          </p>
          <div className='gap_medium'></div>
          <p className='label'>{"<"} Try it out with our interactive preview</p>
        </div>
      </div>
    </div>
  </>);
};
export default App;
