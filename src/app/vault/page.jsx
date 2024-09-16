'use client';

import AddNewCredentials from '@/app/components/AddNewCredentials';
import { createContext, useContext, useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import Alerts from '@/app/components/Alerts';
import CredentialBox from '@/app/components/CredentialBox';
import { getCredentialsByUserId } from '@/app/server/vault-actions';
import { UserContext } from '../components/ClientView';

export default function Vault() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [credentials, setCredentials] = useState([]);
  const [message, setNewMsg] = useState('');
  const { user, setUser } = useContext(UserContext);

  const fetchCredentials = async () => {
    if (!user) return;
    const data = await getCredentialsByUserId(user.userId);
    console.log(data);
    setCredentials(data);
  };

  const reloadCrendentials = async (id) => {
    if (!user) return;
    setCredentials(credentials.filter((c) => c.id !== id));
    const data = await getCredentialsByUserId(user.userId);
    setCredentials(data);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchCredentials();
  }, [user]);

  if (!user) return null;

  return (
    /* Simple sub page with a button to open a modal to add new credentials */

    <div className={'h-screen lg:p-8 p-2 font-normal bg-gray-200'}>
      <Alerts />
      <h2 className={'p-8 text-xl md:text-2xl lg:text-4xl text-center'}>
        {' '}
        Personal Vault{' '}
      </h2>
      <table className='w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className={'px-6 py-3'}>Title</th>
            <th className={'px-6 py-3'}>Username</th>
            <th className={'px-6 py-3'}>Password</th>
            <th className={'px-6 py-3'}>Site</th>
            <th className={'px-6 py-3'}>Action</th>
          </tr>
        </thead>
        <tbody>
          {credentials.length > 0 &&
            credentials.map((credential, index) => (
              <tr
                key={index}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
              >
                <CredentialBox
                  credentials={credential}
                  reloadCrendentials={reloadCrendentials}
                />
              </tr>
            ))}
        </tbody>
      </table>
      <button
        onClick={handleOpenModal}
        className={
          'absolute bottom-0 right-0 m-4 w-32 lg:w-36 lg:h-12 lg:text-lg rounded-md bg-indigo-600 px-2 text-sm font-normal leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        }
      >
        <div className={'flex flex-row align-middle justify-center'}>
          <FiPlusCircle size={24} className={'mt-1 mb-1 mr-3 ml-1'} />
          <p className={'m-1'}> New Item </p>
        </div>
      </button>
      {isModalOpen && <AddNewCredentials onClose={handleCloseModal} />}
    </div>
  );
}
