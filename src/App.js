import React from 'react';
import './App.css';

//import components
import TaskColumn from './components/TaskColumn';
import TaskTracker from './components/TaskTracker';
import EnterTaskColumn from './components/EnterTaskColumn';
import Signature from './components/Signature';

//import images
import selfCareicon from "./images/selfcare.png";

function App() {
  //Date
  let date = new Date();
  let day = date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let month = (date.getMonth() + 1);
  if (month < 10) {
    month = `0${month}`;
  }
  let year = date.getFullYear();
  let currentDate = day + '/' + month + '/' + year;
  console.log(currentDate);

  let daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


  return (
    <div className="App">
      <div className="Container">
        <div className="d-flex justify-content-center">
          <h1>SELF-CARE CHECKLIST</h1>
          <img src={selfCareicon} alt="" width={65} className="selfCareIcon" />
        </div>
        <h2>Date: {currentDate}</h2>
        <div className="daysOfTheWeek">{daysOfTheWeek.map((day, index) => {
          return (<span key={index}>{day}</span>);
        })}</div>
        <EnterTaskColumn />
        <div className="EnterMessage">**You’ve exceeded the max. number of tasks. Avoid trying to overload yourself! :)</div>
        <div className="Heading">Tasks to do</div>
        <TaskColumn />
        <TaskColumn />
        <TaskColumn />
        <TaskColumn />
        <TaskColumn />
        <div className="Heading">Task Tracker</div>
        <TaskTracker />
        <Signature />
      </div>
    </div >
  )
}

export default App;
