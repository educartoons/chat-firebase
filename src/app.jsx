import React, {useState} from 'react';
import styled from '@emotion/styled'
import Login from './components/Login';
import Chat from './components/Chat'

const AppStyled = styled.div`
  height: 100vh;
`;

const App = () => {
  const [userName, setUsername] = useState('');

  const handleUserName = (user) => {
    setUsername(user);
  } 

  return <AppStyled>
    {
      userName==='' ? <Login handleUserName={handleUserName}/>  : <Chat username={userName}/>
    }
  </AppStyled>
}

export default App;