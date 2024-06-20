'use client';
import { useState } from 'react';
import { signupUser } from './actions';

export default function SignupForm({ onClose, onLoginClick }) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

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
                formAction={() => signupUser(formData)}
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
