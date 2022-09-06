import React from "react";
import { Outlet, NavLink } from "react-router-dom";
function Technologies() {
  return (
    <div>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <NavLink className="nav-link" to="html">
            HTML
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="javascript">
            JavaScript
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Technologies;
