import React, {useState} from 'react';
import styled from '@emotion/styled';
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../../firebase'

const NewMessageStyled = styled.div`
  background-color: #f1f1f1;
  border-radius: 8px;
  padding: 1em;
  position: relative;
  textarea{
    background-color: transparent;
    border: 0;
    font-family: 'Open Sans', sans-serif;
    outline: none;
    color: black;
    width: 100%;
    resize: none;
  }
  button{
    background-color: black;
    border: 0;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    padding: 0.5em 1em;
    position: absolute;
    right: 1em;
    bottom: 1em;
  }
`

const NewMessage = (props) => {
  const [message, setMessage] = useState('');
  const {username} = props;

  const handleSendMessage =  () => {
    const docRef = addDoc(collection(db, 'messages'), {
      message: message,
      username: username,
      createdAt: Date.now(),
    })
    setMessage('');
  }

  return <NewMessageStyled>
    <textarea onChange={(e)=>setMessage(e.target.value)} value={message} name="" id="" cols="30" rows="5" placeholder="Enter your message"></textarea>
    <button onClick={handleSendMessage}>Send now</button>
  </NewMessageStyled>
}

export default NewMessage;