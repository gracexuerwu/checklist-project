import React  from "react";
import { useState } from "react";
import "../styles/TaskRow.css";

export default function TaskRow(props) {
    
    const [checked, setChecked] = useState(false);

    return (
        <div className="TaskRow">
            <div className="row">
                <div className="col-1">
                    {/* <div className="TaskRow-left"> */}
                    <div className="checkBox">
                        <input type="checkbox" id="checkBox" name="checkBox" checked={checked} onChange={e => setChecked(e.target.checked)} />
                        {/* </div> */}
                    </div>
                </div>
                <div className="col-10">
                    {/* <div className="TaskRow-right float-left"> */}
                    <p>{props.task}</p>
                    <hr />
                    {/* </div> */}
                    {/* <i class="fas fa-trash-alt float-right"></i> */}
                </div>
                <div className="col-1">
                    <i className="fas fa-trash-alt float-right" ></i>
                </div>

            </div>
        </div >

    )
}