import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import "../../styles/dashboard.css"
const DashboardNavigation = () => {
    const auth=useContext(AuthContext);
    if (!auth) return null;
  return (
    <div className='sidebar-menu'>
        <div className="sidebar-brand">
        <Link to="/dashboard" className='sidebar-link '>Smart Krishi</Link> 
      </div>
      <div className="sidebar-links">
        <Link to="/dashboard/reports" className="sidebar-link">Pest Reports</Link>
        <Link to="/dashboard/market" className="sidebar-link">Market</Link>
        <Link to="/dashboard/news" className="sidebar-link">Farming news</Link>
      </div>
      <div className="navbar-profile">
        <div className='profile'><p>P</p>
        <button className='logout-button' onClick={auth.logout} >Logout</button>
        </div>
      </div>
      
    </div>
  )
}

export default DashboardNavigation
