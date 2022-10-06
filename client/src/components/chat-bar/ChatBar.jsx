import React from 'react';
import {useNavigate} from 'react-router-dom';
import MyButton from '../UI/button/MyButton';
import cl from './ChatBar.module.css';

function ChatBar({socket, users, userId}) {
  const navigate = useNavigate();  

  const handleLeaveChat = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    socket.emit('remove_user', userId);
    navigate('/');
    window.location.reload();
  }

  return (
    <div className={cl.chat__bar}>
      <h2>Name of the chat</h2>
      <div>
        <h3>Users in the room</h3>
        <ul>
          {users.length > 0 && users.map(u => <li key={u.userId}>{u.username}</li>)}
        </ul>
      </div>
      <div>
        <MyButton onClick={handleLeaveChat}>
          Leave chat
        </MyButton>
      </div>
    </div>
  )
}

export default ChatBar
