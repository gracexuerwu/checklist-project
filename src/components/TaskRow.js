import { useState } from "react";
import "../styles/TaskRow.css";

export default function TaskRow(props) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleOnChange(event) {
    setIsCompleted(!isCompleted);
  };

  console.log(isCompleted);

  return (
    <div className="TaskColumn">
      <div className="row">
        <div className="col-1">
          <div className="TaskColumn-left">
            <div className="checkBox">
              <input type="checkbox" checked={isCompleted} onChange={handleOnChange} id="checkBox" name="checkBox" />
            </div>
          </div>
        </div>
        <div className="col-10">
          <div className="TaskColumn-right float-left">
            {isCompleted ? <strong>{props.task}</strong> : <p>{props.task}</p>}
          </div>
          {/* <i class="fas fa-trash-alt float-right"></i> */}
        </div>
        <div className="col-1">
          <i className="fas fa-trash-alt float-right"></i>
        </div>
      </div>
    </div >

  )
}