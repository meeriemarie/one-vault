'use client';

import { deleteCredentialOfUser } from '../services/vault-service';

export default function CredentialBox({ credentials, reloadCrendentials }) {
  const handleDelete = async (id) => {
    const res = await deleteCredentialOfUser(id);
    if (res.success) {
      console.log(res.msg);
      await reloadCrendentials(id);
    }
    //console.log(res);
  };

  return (
    <>
      <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
        {credentials.title}
      </td>
      <td className='px-6 py-4'>{credentials.username}</td>
      <td className='px-6 py-4'>{credentials.password}</td>
      <td className='px-6 py-4'>{credentials.site}</td>
      <td>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>
          Edit
        </button>
        <button
          className='px-4 py-2 bg-red-500 text-white rounded-md'
          onClick={() => handleDelete(credentials.id)}
        >
          Delete
        </button>
      </td>
    </>
  );
}
