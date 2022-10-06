let messages = [];
const messagesHandler = (socket, io) => {
  //adds new message
  const addMessage = (message) => {
    messages.push({
      createdAt: new Date(),
      ...message
    })
    getMessages() 
  }
  //gets list of messages
  const getMessages = () => {
    io.emit('get_messages', messages)
  }
  //removes the message
  const removeMessage = (messageId) => {
    messages.filter(m => m.messageId !== messageId)
    getMessages()
  }

  socket.on('add_message', addMessage);
  socket.on('get_messages', getMessages)
  socket.on('remove_message', removeMessage);
}

export default messagesHandler