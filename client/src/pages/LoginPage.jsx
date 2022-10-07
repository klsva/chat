import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import MyInput from '../components/UI/input/MyInput';
import EnterButton from '../components/UI/button-enter/EnterButton';
import {nanoid} from 'nanoid';
import { ENTER, LOGIN_PAGE_TITLE } from '../const';

function LoginPage(){
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      localStorage.setItem('userId', nanoid(8));
      localStorage.setItem('username', username);    
    } 
    navigate(`/chat`);  
  }

  return (
    <div className='login__container'>
      <h1>{LOGIN_PAGE_TITLE}</h1>
      <p>Hello! <br/>
        Please, enter your name to use our servicies.
        Have a good time!
      </p>
      <form onSubmit={handleSubmit}>
        <MyInput
          type='text'
          placeholder='Type the username you will use in the chat'
          area-lable='username'
          value={username}
          required
          onChange={e => setUsername(e.target.value)}
        />
        <EnterButton>{ENTER}</EnterButton>
      </form>
    </div>
  )
 }

 export default LoginPage;