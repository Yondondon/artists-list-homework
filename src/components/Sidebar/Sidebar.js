import { Component } from "react";
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <NavLink to="/dashboard" activeClassName="activePage">Dashboard</NavLink>
        <NavLink to="/favorites" activeClassName="activePage">Favorites</NavLink>
      </div>
    )
  }
}

export default Sidebar