import './App.css';
import TaskColumn from './components/TaskColumn';
import TaskTracker from './components/TaskTracker';
import EnterTaskColumn from './components/EnterTaskColumn';


function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>SELF-CARE CHECKLIST</h1>
        <h2>Date: 6/1/2021</h2>
        <h3>Mon Tue Wed Thu Fri Sat Sun</h3>
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
      </div>
    </div >
  );
}

export default App;
