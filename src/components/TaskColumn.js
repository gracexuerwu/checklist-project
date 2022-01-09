import React from "react";
import "../styles/TaskColumn.css";

export default function TaskColumn() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-11">
                    <div className="TaskColumn-left">
                        <p>Meditate</p>
                    </div>
                </div>
                <div className="col-1">
                    <div className="TaskColumn-right">
                        <i class="far fa-square fa-lg tickBox"></i>
                    </div>
                </div>
            </div>
        </div>

    )
}