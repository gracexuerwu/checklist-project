import React from "react";
import "../styles/TaskColumn.css";

export default function TaskColumn(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-11">
                    <div className="TaskColumn-left">
                        <p>{props.task}</p>
                    </div>
                </div>
                <div className="col-1">
                    <div className="TaskColumn-right">
                        <i className="far fa-square fa-lg tickBox"></i>
                    </div>
                </div>
            </div>
        </div>

    )
}