// import React from 'react'
import Header from "../../components/common/Header.jsx";
import DashboardComponent from "../../components/Dashboard/Dashboard.jsx"
function Dashboard() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Dashboard" />
      <DashboardComponent />
    </div>
  )
}

export default Dashboard