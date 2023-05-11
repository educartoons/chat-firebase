import React from 'react';
import styled from '@emotion/styled'

const MessageStyled = styled.div`
  background-color: ${(props)=>props.owner ? '#F8E4CB': '#f2f2f2'};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: ${(props)=>props.owner ? '8px': '0'};
  border-bottom-right-radius: ${(props)=>props.owner ? '0': '8px'};
  color: #412206;
  margin: 0 0 0.5em 0;
  padding: 1em 1em;
`

const MessageWrapperStyled = styled.div`
  display: flex;
  justify-content: ${(props)=> props.owner ? 'flex-end' : 'flex-start'};
  position: relative;
  span{
    background-color: black;
    color: white;
    padding: 0.5em 1em;
    position: absolute;
    left: 0em;
    bottom: 0em;
    font-size: 0.5em;
  }
`;

const Message = (props) => {
  const {owner} = props;
  const {message, username} = props.message;
  return <MessageWrapperStyled owner={owner}>
    <MessageStyled owner={owner}>
      {message}
    </MessageStyled>
    {!owner && <span>{username}</span>}
  </MessageWrapperStyled>
}

export default Message;