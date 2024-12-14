import React from "react";

function ApplicationsTable() {
  const applications = [
    { name: "App1", liveStream: 0, Count: 84, storage: "5.3 GB" },
    { name: "App2", liveStream: 0, Count: 0, storage: "216 MB" },
    { name: "App3", liveStream: 0, Count: 1, storage: "38.7 MB" },
  ];

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Live Stream</th>
            <th>Count</th>
            <th>Storage</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{app.name}</td>
              <td>{app.liveStream}</td>
              <td>{app.Count}</td>
              <td>{app.storage}</td>
              <td>
                <button style={{ color: "red", cursor: "pointer" }}>✕</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationsTable;
