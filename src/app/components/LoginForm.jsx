'use client';

import { useContext, useState } from 'react';
import { loginUser } from '../server/actions';
import { MsgContext } from '../page';
import { login } from '../services/user-service';

export default function LoginForm({ onClose, onSignupClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { msg, setMsg } = useContext(MsgContext);

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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
        {showSuccess && (
          <div
            role='alert'
            className={
              'relative flex sm:w-5/6 px-4 py-4 text-base text-white bg-green-500 rounded-lg font-regular'
            }
            data-dismissible='alert'
          >
            <div className={'mr-12'}>{successMessage}</div>
            <button
              data-dismissible-target='alert'
              className={
                '!absolute  top-3 right-3 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              }
              type='button'
              onClick={() => setShowSuccess(false)}
            >
              <span
                className={
                  'absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-6 h-6'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        )}
        {showError && (
          <div
            role='alert'
            className={
              'relative flex sm:w-5/6 px-4 py-4 text-base text-white bg-red-500 rounded-lg font-regular'
            }
            data-dismissible='alert'
          >
            <div className={'mr-12'}>{errorMessage}</div>
            <button
              data-dismissible-target='alert'
              className={
                '!absolute  top-3 right-3 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              }
              type='button'
              onClick={() => setShowError(false)}
            >
              <span
                className={
                  'absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-6 h-6'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        )}
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
              formAction={async () => {
                const res = await login(username, password);
                if (res) {
                  setShowSuccess(true);
                  setSuccessMessage('Login successful');
                  setMsg('Login successful');
                  onClose();
                } else {
                  setShowError(true);
                  setErrorMessage('Login failed');
                  setMsg('Login failed');
                }
              }}
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
