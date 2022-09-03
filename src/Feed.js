import React, {useState} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './inputOption'
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './Post.js'

function Feed() {
    const [posts, setPosts] = useState([]);

    const sendPost = e => {
        e.preventDefault();
        
    }

  return (
    <div className="feed">
        <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon />
            <form>
                <input type="text" />
                <button onClick={sendPost} type="submit">Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9"/>
            <InputOption Icon={OndemandVideoIcon} title="Video" color="##228B22"/>
            <InputOption Icon={CalendarMonthIcon} title="Event" color="#D2691E"/>
            <InputOption Icon={NewspaperIcon} title="Write article" color="#FF8C00"/>
        </div>
        </div>

{posts.map((post) =>(
    <Post />
))}
        <Post 
        name='Quan Xu' 
        description='This is a test' 
        message='WOW this worked'
        />
    </div>
  )
}

export default Feed