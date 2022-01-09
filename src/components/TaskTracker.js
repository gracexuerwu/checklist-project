import React from "react";
import "../styles/TaskTracker.css";

export default function TaskTracker() {
    return (
        <div className="TaskTracker">
            <div className="row">
                <div className="col-11">
                    <h4>All tasks</h4>
                </div>
                <div className="col-1">
                    <h4>5</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-11">
                    <h4>Completed</h4>
                </div>
                <div className="col-1">
                    <h4>0</h4>
                </div>
            </div>
        </div>
    )
}