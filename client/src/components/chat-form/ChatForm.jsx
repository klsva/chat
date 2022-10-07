import React from 'react';
import { useState } from 'react';
import {nanoid} from 'nanoid';
import EnterButton from '../UI/button-enter/EnterButton';
import MyInput from '../UI/input/MyInput';


function ChatForm({socket, userId, username}) {
  const [messageBody, setMessageBody] = useState('');
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageBody.trim() && username) {
      socket.emit('add_message',
        {
          userId,
          username,
          messageId: nanoid(8),
          body: messageBody
        }
      );
      setMessageBody('')
    }
  }

  return (
    <div className='chat__form'>
      <form onSubmit={handleSendMessage}>
        <MyInput
          type='text'
          placeholder='Type your messge...'
          value={messageBody}
          onChange={(e) => setMessageBody(e.target.value)}
          required
        />
        <EnterButton>
          Send
        </EnterButton>
      </form>          
    </div>
  )
}

export default ChatForm;
