import React from "react";
import "../styles/EnterTaskColumn.css";

export default function EnterTaskColumn() {
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
        <form id="search-form" onSubmit="">
            <div className="form-row">
                <div className="col-11 btn">
                    <input
                        type="text"
                        onChange=""
                        className="form-control"
                        id="search-input"
                        placeholder="Pen your tasks here . . ."
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