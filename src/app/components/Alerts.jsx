import {useContext, useEffect, useState} from 'react';
import { MsgContext } from '../page';

export default function Alerts() {
  const { message, setMessage } = useState('');
  const { msg, setMsg } = useContext(MsgContext);
  // Simple Alert component to display messages
  useEffect(() => {
    if (msg && msg.length > 0) {
      setMessage(msg);
      console.log(message);
    }
  }, [msg]);
  console.log(msg);
  return (
    <div>
      {msg && msg.length > 0 && (
        <div
          className='bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'
          role='alert'
        >
          <p className='font-bold'>Informational message</p>
          <p className='text-sm'>{msg[0]}</p>
        </div>
      )}
    </div>
  );
}
