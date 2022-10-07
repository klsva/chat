import React from 'react';
import {useNavigate} from 'react-router-dom';
import EnterButton from '../UI/button-enter/EnterButton';
import ExitButton from '../UI/button-exit/ExitButton';
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

  const handleNewChat = () => {

  }

  return (
    <div className={cl.chat__bar}>
      <div className={cl.bar__content}>
        <h1>Name of the chat</h1>
        <div>
          <h2>Users online:</h2>
          <ul>
            {users.length > 0 && users.map(u => <li key={u.userId}>{u.username}</li>)}
          </ul>
        </div>
      </div>      
      <div className={cl.bar__footer}>
        <EnterButton>Create new chat</EnterButton>
        <ExitButton onClick={handleLeaveChat}>Leave this chat</ExitButton>
      </div>
    </div>
  )
}

export default ChatBar;
