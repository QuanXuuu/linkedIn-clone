import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className="header">

    
    <div className="header__left">
    <img src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlua2VkaW58ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt=""/>

    <div className="header__search">
        <SearchIcon />
        <input type="text"/>
    </div>
    </div>

    <div className="header__right">
      <HeaderOption Icon={HomeIcon} title='Home'/>
      <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
      <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
      <HeaderOption Icon={ChatIcon} title='Messaging'/>
      <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
      <HeaderOption avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" title='me'/>
    </div>
    </div>
  )
}

export default Header