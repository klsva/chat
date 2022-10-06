import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ChatMessage from '../chat-message/ChatMessage';
import cl from './ChatBody.module.css';

function ChatBody({socket}) {
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
        {
          messages.length > 0 
          &&  
          messages.map((message) => <ChatMessage key={message.messageId} message={message} />)
        }
      </div>
    </div>
  )
}

export default ChatBody;

        