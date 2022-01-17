import { useState } from "react";
import './App.css';

//import components
import TaskColumn from './components/TaskColumn';
import TaskTracker from './components/TaskTracker';
import EnterTaskColumn from './components/EnterTaskColumn';
import Signature from './components/Signature';

//import images
import selfCareicon from "./images/selfcare.png";

function App() {

  function callbackByEnterTaskColumn(task) {
    // alert(task);
    if (todoArray.length < 5) {
      setTodoArray([...todoArray, { task, status: false }]);
    }
    else { }
  }

  const [todoArray, setTodoArray] = useState([
    { task: 'AAA', status: false },
    { task: 'BBB', status: false },
    { task: 'CCC', status: false }
  ]);
  console.log(todoArray.length);

  function TaskToDo(props) {
    return (
      <div>
        {todoArray.length > 0 &&
          <div className="Heading">You have {todoArray.length} Tasks to do</div>
        }
      </div>
    );
  }
  function errorMessage(props) {
    return (
      <div> {todoArray.length > 5 &&
        <div className="">error message You have the max number of tasks</div>
      }
      </div>
    )
  }

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

  let dayIndex = date.getDay();

  return (
    <div className="App">
      <div className="Container">
        <div className="d-flex justify-content-center">
          <h1>SELF-CARE CHECKLIST</h1>
          <img src={selfCareicon} alt="" width={65} className="selfCareIcon" />
        </div>
        <h2>Date: {currentDate}</h2>
        <div className="daysOfTheWeek">{daysOfTheWeek.map((day, index) => {
          if (index === dayIndex) {
            return (<strong key={index} className="daysOfTheWeekBold">{day}</strong>);
          }
          else {
            return (<span key={index}>{day}</span>);
          }
        })}</div>
        <EnterTaskColumn callback={callbackByEnterTaskColumn} />
        <div className="EnterMessage">**You’ve exceeded the max. number of tasks. Avoid trying to overload yourself! :)</div>
        <errorMessage message={errorMessage} />
        <TaskToDo todoList={todoArray} />
        {/* <TaskColumn task="AAA" />
        <TaskColumn task="CCC" /> */}
        {
          todoArray.map(({ task, status }, index) => (
            <TaskColumn key={index} task={task} />
          ))
        }
        <div className="Heading">Task Tracker</div>
        <TaskTracker />
        <Signature />
      </div>
    </div >
  )
}

export default App;
