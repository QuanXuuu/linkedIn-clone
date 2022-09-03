import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './inputOption'
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NewspaperIcon from '@mui/icons-material/Newspaper';

function Feed() {
  return (
    <div className="feed">
        <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon />
            <form>
                <input type="text" />
                <button type="submit">Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9"/>
            <InputOption Icon={OndemandVideoIcon} title="Video" color="##228B22"/>
            <InputOption Icon={CalendarMonthIcon} title="Event" color="#D2691E"/>
            <InputOption Icon={NewspaperIcon} title="Write article" color="#FF8C00"/>
        </div>
        </div>
    </div>
  )
}

export default Feed