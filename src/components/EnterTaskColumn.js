import React, { useState } from "react";
import "../styles/EnterTaskColumn.css";

export default function EnterTaskColumn(props) {
    const [task, setTask] = useState('Pen your tasks here . . .');

    const onChange = (event) => {
        setTask(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(task);
        props.callback(task);
    }
    return (
        // <div className="EnterTaskColumn">
        //     <div className="row">
        //         <div className="col-11">
        //             <p>Enter tasks here</p>
        //         </div>
        //         <div className="col-1">
        //             <i className="fas fa-pencil-alt fa-lg pencilIcon"></i>
        //         </div>
        //     </div>
        // </div>
        <form id="search-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col-11 btn">
                    <input
                        type="text"
                        onChange={onChange}
                        className="form-control"
                        id="search-input"
                        placeholder={task}
                        autoFocus="on"
                        autoComplete="off"
                    />
                </div>
                <div className="col-1 btn search-btn">
                    <button type="submit" className="btn btn-link" id="button-search">
                        <i className="fas fa-pencil-alt fa-lg pencilIcon"></i>
                    </button>
                </div>
            </div>
        </form>
    )
}