import React from 'react';
import cl from './ChatMessage.module.css';

function ChatMessage({message}) {
  const username = JSON.parse(localStorage.getItem('username'));
  return (
    <div className={message.username === username 
                    ? 
                    [cl.message__item, cl.message__my].join(' ')
                    :
                    [cl.message__item, cl.message__other].join(' ')
                    } 
          key={message.messageId}>
      <div className={cl.sender__name}>{message.username}</div>
      <div className={cl.message__text}>{message.body}</div>
    </div>
  )
}

export default ChatMessage;