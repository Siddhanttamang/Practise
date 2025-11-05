import React from 'react'
import DashboardNavigation from '../components/Dashboard/DashboardNavigation'
const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className='sidebar-section'>
            <DashboardNavigation/>
        </div>
        <div className="dashboard-content">
            <h1>This is content</h1>
        </div>
      
    </div>
  )
}

export default Dashboard
