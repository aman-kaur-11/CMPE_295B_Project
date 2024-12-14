import React from 'react';
import { Link } from 'react-router-dom'; 

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>XYZ Server</h2>
      <ul>
        <li>
          <Link to="/">Dashboard</Link> 
        </li>
        <li>
          <Link to="/logs">Logs</Link> 
        </li>
        <li>Settings</li>
        <li>
          <Link to="/support">Support</Link> 
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
