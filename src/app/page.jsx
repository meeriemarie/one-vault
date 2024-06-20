'use client';
import LoginForm from '@/app/components/LoginForm';
import SignupForm from '@/app/components/SignupForm';
import { createContext, useMemo, useState } from 'react';

export const SuccessContext = createContext([]);
export const ErrorContext = createContext([]);
export const MsgContext = createContext({
  msg: '',
  setMsg: () => {},
});

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const handleOpenLogin = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const handleOpenSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  const handleCloseModal = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(false);
  };

  return (
    <SuccessContext.Provider value={[]}>
      <ErrorContext.Provider value={[]}>
        <MsgContext.Provider value={{ msg: '', setMsg: () => {} }}>
          <div className={'h-screen lg:p-8 p-2 font-normal bg-indigo-300'}>
            <article className={'lg:m-6 m-4'}>
              <p
                className={
                  'text-3xl md:text-5xl lg:text-6xl lg:w-3/5 text-gray-900'
                }
              >
                Take security to another level and become one of thousands of
                happy users.
              </p>
              <p
                className={
                  'font-light text-xl md:text-2xl lg:text-4xl lg:w-1/2 text-gray-900'
                }
              >
                OneVault is the best password manager for securely storing, and
                managing sensitive online data such as passwords, passkeys, and
                more.
              </p>
              <div
                className={
                  'lg:text-left md:inline flex flex-col justify-center items-center'
                }
              >
                <button
                  onClick={handleOpenSignup}
                  className={
                    'm-4 w-32 lg:w-48 lg:h-12 lg:text-lg rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-normal leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  }
                >
                  Start Now
                </button>
                <button
                  onClick={handleOpenLogin}
                  className={
                    'm-4 w-32 lg:w-48 lg:h-12 lg:text-lg rounded-md bg-gray-200 px-3 py-1.5 text-sm font-normal leading-6 text-indigo-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  }
                >
                  Welcome Back
                </button>
                {isLoginOpen && (
                  <LoginForm
                    onClose={handleCloseModal}
                    onSignupClick={handleOpenSignup}
                  />
                )}
                {isSignupOpen && (
                  <SignupForm
                    onClose={handleCloseModal}
                    onLoginClick={handleOpenLogin}
                  />
                )}
              </div>
            </article>
          </div>
        </MsgContext.Provider>
      </ErrorContext.Provider>
    </SuccessContext.Provider>
  );
}
