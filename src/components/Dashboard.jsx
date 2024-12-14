import React from "react";
import MetricsCard from "./MetricsCard";
import ApplicationsTable from "./ApplicationsTable";

function Dashboard() {
  return (
    <div className="dashboard">
         <h1>Dashboard</h1>
      <div className="metrics-container">
        <MetricsCard title="Bandwidth Admin" value="70%" />
        <MetricsCard title="Package Delay/Loss" value="20%" />
        <MetricsCard title="Active Flows" value="35%" />
        <MetricsCard title="Traffic Quality" value="11%" />
      </div>
      <ApplicationsTable />
    </div>
  );
}

export default Dashboard;
