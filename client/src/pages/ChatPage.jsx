import { useEffect } from 'react';
import {useState} from 'react';
import {io} from 'socket.io-client';
import {useLocalStorage} from '../hooks/useLocalStorage';
import ChatBody from '../components/chat-body/ChatBody';
import ChatForm from '../components/chat-form/ChatForm';
import ChatBar from '../components/chat-bar/ChatBar';
import { SERVER_URL } from '../const';

function ChatPage(){
  const [users, setUsers] = useState([])
  const [userId] = useLocalStorage('userId');
  const [username] = useLocalStorage('username');

  //const socket = io.connect(SERVER_URL);
  //const socketRef = useRef(null);

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(SERVER_URL);
    setSocket(newSocket);
    newSocket.emit('add_user', {userId, username});
    newSocket.on('get_users', (users) => {setUsers(users)});
    newSocket.emit('get_messages');
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <main className='wrapper'>      
      {socket ? (
        <section className='chat__container'>
          <div className='chat__content'>
            <ChatBody socket={socket} />
            <ChatForm socket={socket} userId={userId} username={username}/>  
          </div>
          <ChatBar socket={socket} users={users} userId={userId}/> 
          </section>           
      ) : (
        <div>Not Connected</div>
      )}      
    </main>
  )
}

export default ChatPage;