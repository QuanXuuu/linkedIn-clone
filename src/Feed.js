import React, {useEffect, useState} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './inputOption'
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './Post.js'
import { db } from './firebase';
import firebase from 'firebase'

function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        db.collection("post").onSnapshot(snapshot => 
            setPosts(
                snapshot.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data(),
            }))
        )
        );
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name:"Quan Xu",
            description:"this is a test",
            message: input,
            photoUrl:'',
            timestamp: firebase.firestore.fieldValue.serverTimestamp(),
        })
    }

  return (
    <div className="feed">
        <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon />
            <form>
                <input 
                value={input} 
                type="text" 
                onChange={(e)=>setInput(e.target.value)} />
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

{posts.map(({id, data:{ name, description, message, photoUrl}}) =>(
    <Post />
))}
        <Post 
        key={id}
        name={name} 
        description={description}
        message={message}
        photoUrl={photoUrl}
        />
    </div>
  )
}

export default Feed