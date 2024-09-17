"use client";

import {useContext, useEffect, useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import PasswordInput from "@/app/components/PasswordInput";
import {createNewCredentials, editCredential} from "@/app/server/vault-actions";
import {MsgContext} from "@/app/page";

export default function DeleteModal({onClose, credentials, confirmAction}) {

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
                            'mt-2 pl-10 pr-10 text-2xl font-bold leading-9 tracking-tight text-gray-900'
                        }
                    >
                        Warning
                    </h2>
                </div>
                <div className={'flex justify-center pl-10 pr-10'}>
                    Are you sure you want to delete the credential with the title {credentials.title}
                </div>
                <div className={'p-4 mt-8 sm:mx-auto sm:w-full sm:max-w-sm'} >
                        <div className={'flex justify-center items-center space-x-5'}>
                            {/* Signup button with formAction to call handleSignup function */}
                            <button
                                onClick={confirmAction}
                                className={
                                    'flex justify-center w-1/2 rounded-md bg-red-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                                }
                            >
                                Delete
                            </button>
                            <button
                                onClick={onClose}
                                className={
                                    'flex justify-center w-1/2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                }
                            >
                                Cancel
                            </button>
                        </div>
                </div>
            </dialog>
        </main>
    );
}