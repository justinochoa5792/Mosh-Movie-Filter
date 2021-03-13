import React from "react";
import SideBar from "./sidebar";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
    </div>
  );
};

export default Dashboard;
