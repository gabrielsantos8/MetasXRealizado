import React from "react";
import './style.css'

export const ComboBox = props => {


    return (
        <>

            <label className="form-label">{props.lbl}</label>
            <select name={props.name} className={props.className} onChange={props.onChange}>
                <option value="0">Selecione...</option> {
                    props.data.map(function (rec) { return <option value={rec._id} key={rec._id}>{rec.valor}</option> })
                }
            </select>

        </>
    );
};
