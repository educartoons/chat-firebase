import React, {useState, useEffect} from 'react';
import {orderBy} from 'lodash'
import {collection, onSnapshot} from 'firebase/firestore'
import {db} from '../../firebase'
import Message from '../Message';

const Messages = (props) => {
  const [messages, setMessages] = useState([]);
  const {username} = props;

  useEffect(()=>{

    const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot)=>{
      const data = snapshot.docs.map(doc=>({id: doc.id, ...doc.data()}));
      setMessages(orderBy(data, 'createdAt', 'asc'));
    })

  }, [])

  return <><h1>Messages</h1>
    {
      messages.map(message=><Message owner={message.username===username} key={message.id} message={message}/>)
    }
  </>
}

export default Messages;