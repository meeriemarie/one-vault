import { useContext } from 'react';
import { MsgContext } from '../page';

export default function Alerts() {
  const { msg, setMsg } = useContext(MsgContext);
  return (
    <div>
      {msg && (
        <div
          class='bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'
          role='alert'
        >
          <p class='font-bold'>Informational message</p>
          <p class='text-sm'>{{ msg }}</p>
        </div>
      )}
    </div>
  );
}
