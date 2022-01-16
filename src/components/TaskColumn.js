import React from "react";
import "../styles/TaskColumn.css";

export default function TaskColumn(props) {
    return (
        <div className="TaskColumn">
            <div className="row">
                <div className="col-1">
                    <div className="TaskColumn-left">
                        <i className="far fa-square fa-lg tickBox"></i>
                    </div>
                </div>
                <div className="col-11">
                    <div className="TaskColumn-right float-left">
                        <p>{props.task}</p>
                    </div>
                    <i class="fas fa-trash-alt float-right"></i>
                </div>
            </div>
        </div >

    )
}