import React, {useState} from 'react';
import styled from '@emotion/styled';

const LoginStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  div{
    width: 300px;
    display: flex;
    flex-direction: column;
  }
  input{
    border: 1px solid #DFE0E0;
    border-radius: 5px;
    display: block;
    font-family: 'Open Sans', sans-serif;
    margin: 0 0 1em 0;
    padding: 0.5em 1em;
    outline: 0;
  }
  button{
    background-color: black;
    border: 0;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    color: white;
    display: block;
    padding: 0.5em 1em;
  }
`;

const Login = (props) => {
  const [userName, setUserName] = useState('');
  const {handleUserName} = props;

  return <LoginStyled>
    <div>
      <input value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="Enter your username"/>
      <button onClick={()=>handleUserName(userName)}>Create user</button>
    </div>
  </LoginStyled>
}

export default Login;