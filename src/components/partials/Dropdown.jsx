import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

function Dropdown({ title, options, func }) {
  return (
    <div className="select">
      <select defaultValue="0" onChange={func} name="format" id="format">
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o.toLowerCase()}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
