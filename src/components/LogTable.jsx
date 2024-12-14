import React from "react";
import { Link } from "react-router-dom"; 
import './LogTable.css'; 

const LogTable = () => {
  const logData = [
    {
      id: 1,
      timestamp: "2024-11-20 10:15:00 AM",
      appName: "App1",
      logLevel: "INFO",
      message: "Application started successfully",
      size: "25 KB",
      action: "Yes",
    },
    {
      id: 2,
      timestamp: "2024-11-20 10:16:45 AM",
      appName: "App2",
      logLevel: "WARNING",
      message: "High memory usage detected",
      size: "42 KB",
      action: "No",
    },
    {
      id: 3,
      timestamp: "2024-11-20 10:18:30 AM",
      appName: "App3",
      logLevel: "ERROR",
      message: "Database connection failed",
      size: "35 KB",
      action: "No",
    },
    {
      id: 4,
      timestamp: "2024-11-20 10:20:00 AM",
      appName: "App4",
      logLevel: "INFO",
      message: "New user session initiated",
      size: "18 KB",
      action: "Yes",
    },
    {
      id: 5,
      timestamp: "2024-11-20 10:22:10 AM",
      appName: "App5",
      logLevel: "DEBUG",
      message: "Cache cleared successfully",
      size: "12 KB",
      action: "Yes",
    },
    {
      id: 6,
      timestamp: "2024-11-21 10:25:50 AM",
      appName: "App6",
      logLevel: "INFO",
      message: "API request completed",
      size: "28 KB",
      action: "Yes",
    },
    {
      id: 7,
      timestamp: "2024-11-22 10:27:00 AM",
      appName: "App7",
      logLevel: "CRITICAL",
      message: "Server outage reported",
      size: "55 KB",
      action: "No",
    },
    {
      id: 8,
      timestamp: "2024-11-22 10:30:20 AM",
      appName: "App8",
      logLevel: "INFO",
      message: "Configuration updated",
      size: "20 KB",
      action: "Yes",
    },
    {
      id: 9,
      timestamp: "2024-11-22 10:32:15 AM",
      appName: "App9",
      logLevel: "WARNING",
      message: "Slow response time",
      size: "30 KB",
      action: "Yes",
    },
    {
      id: 10,
      timestamp: "2024-11-2 10:35:00 AM",
      appName: "App10",
      logLevel: "INFO",
      message: "Scheduled backup completed",
      size: "15 KB",
      action: "Yes",
    },
  ];

  return (
    <div>
      <h1>Logs Table</h1>
      <table className="log-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Timestamp</th>
            <th>App Name</th>
            <th>Log Level</th>
            <th>Message</th>
            <th>Size</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {logData.map((log) => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.timestamp}</td>
              <td>{log.appName}</td>
              <td>{log.logLevel}</td>
              <td>{log.message}</td>
              <td>{log.size}</td>
              <td>{log.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Link to="/">Back to Dashboard</Link>
    </div>
  );
}

export default LogTable;
