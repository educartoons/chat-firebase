import React from 'react';
import styled from '@emotion/styled'
import NewMessage from '../NewMessage';
import Messages from '../Messages';

const ChatStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  padding: 2em 0.5em;
`

const Chat = (props) => {
  return <ChatStyled>
    <div>
      <Messages username={props.username}/>
      <NewMessage username={props.username}/>
    </div>
  </ChatStyled>
}

export default Chat;