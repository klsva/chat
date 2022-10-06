import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import cl from './ChatBody.module.css';

function ChatBody({socket}) {
  const username = useLocalStorage('username');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('get_messages', 
      messages => setMessages(messages));

    return () => {
      socket.off('get_messages');
    }
  }, [messages]) 

  return (
    <div className={cl.chat__body}>
      <div className='messages__container'>
        {messages.length > 0 && messages.map((message) => 
          message.username === username ? (
            <div className='message__item message__user' key={message.messageId}>
              <div className='sender__name'>{message.username}</div>
              <div className='message__text'>{message.body}</div>
            </div>
          ) : (
            <div className='message__item message__others' key={message.messageId}>
              <div className='sender__name'>{message.username}</div>
              <div className='message__text'>{message.body}</div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default ChatBody

        