import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {

 const recentItem = (topic) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
 )

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="coding-background" />
            <Avatar className="sidebar__avatar"/>
            <h2>Quan Xu</h2>
            <h4>quanxu@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Connections</p>
                <p className="sidebar__statNumber">432</p>
            </div>
            <div className="sidebar__stat">
            <p>Who's viewed you</p>
            <p className="sidebar__statNumber">50</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem ("reactjs")}
            {recentItem ("programming")}
            {recentItem ("softwareengineering")}
            {recentItem ("design")}
            {recentItem ("developer")}
        </div>
    </div>
  )
}

export default Sidebar