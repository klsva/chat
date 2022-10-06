import './App.css';
import LoginPage from './pages/LoginPage';
import {Route, Routes} from 'react-router-dom';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/chat' element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
