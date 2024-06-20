'use client';

import { useState } from 'react';
import { loginUser } from './actions';

export default function LoginForm({ onClose, onSignupClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <main
      className={
        'fixed flex items-center justify-center top-0 left-0 w-full h-full z-50 bg-black/50'
      }
    >
      <dialog className='w-5/6 lg:w-1/4 md:w-1/2 flex justify-center items-center bg-slate-200 flex-col rounded-md font-normal'>
        <p className='relative pt-4 pl-4 ml-0 mr-auto cursor-pointer text-gray-900 hover:text-gray-500 font-bold'>
          <button onClick={onClose}>X</button>
        </p>
        <div className={'flex justify-center'}>
          <h2
            className={
              'mt-2 text-2xl font-bold leading-9 tracking-tight text-gray-900'
            }
          >
            Welcome Back!
          </h2>
        </div>
        <div className={'p-4 mt-8 sm:mx-auto sm:w-full sm:max-w-sm'}>
          <form className={'space-y-6'}>
            <input
              type='text'
              placeholder='E-Mail'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={
                'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              }
            ></input>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={
                'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              }
            ></input>
            <button
              formAction={() => loginUser(username, password)}
              className={
                'mt-6 flex w-1/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              }
            >
              Log In
            </button>
          </form>
        </div>
        <p className={'mt-10 text-center text-sm text-gray-500 m-6'}>
          Don`t have an account?
          <a
            onClick={onSignupClick}
            className={
              'leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer'
            }
          >
            {' '}
            Sign Up
          </a>
        </p>
      </dialog>
    </main>
  );
}
