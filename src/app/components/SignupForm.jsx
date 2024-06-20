'use client';
import { useContext, useState } from 'react';
import { signupUser } from './actions';
import { MsgContext } from '../page';

const handleSignup = async (
  formData,
  setErrorMessage,
  setShowError,
  setMsg,
  onLoginClick
) => {
  const { success, msg } = await signupUser(formData);
  if (!success) {
    setErrorMessage(msg);
    setShowError(true);
  } else {
    console.log('Signup successful');
    setMsg(msg);
    onLoginClick();
  }
};

export default function SignupForm({ onClose, onLoginClick }) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });
  const { msg, setMsg } = useContext(MsgContext);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
            Welcome Aboard!
          </h2>
        </div>
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
              required={true}
              placeholder='Name'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={
                'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6}'
              }
            ></input>
            <input
              type='text'
              required={true}
              placeholder='Surname'
              value={formData.surname}
              onChange={(e) =>
                setFormData({ ...formData, surname: e.target.value })
              }
              className={
                'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              }
            ></input>
            <input
              type='text'
              required={true}
              placeholder='E-Mail'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={
                'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              }
            ></input>
            <input
              type='password'
              required={true}
              placeholder='Password'
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className={
                'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              }
            ></input>
            <div className={'flex justify-center items-center'}>
              <button
                formAction={() =>
                  handleSignup(
                    formData,
                    setErrorMessage,
                    setShowError,
                    setMsg,
                    onLoginClick
                  )
                }
                className={
                  'flex justify-center w-1/2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                }
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <p className={'mt-10 text-center text-sm text-gray-500 m-6'}>
          Already have an account?
          <a
            onClick={onLoginClick}
            className={
              ' leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer'
            }
          >
            {' '}
            Log In
          </a>
        </p>
      </dialog>
    </main>
  );
}
