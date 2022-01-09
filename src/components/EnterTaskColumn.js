import React from "react";
import "../styles/EnterTaskColumn.css";

export default function EnterTaskColumn() {
    return (
        <div className="EnterTaskColumn">
            <div className="row">
                <div className="col-11">
                    <p>Enter tasks here</p>
                </div>
                <div className="col-1">
                    <i className="fas fa-pencil-alt fa-lg pencilIcon"></i>
                </div>
            </div>
        </div>
    )
}