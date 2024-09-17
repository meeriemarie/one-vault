"use client";

import {useContext, useEffect, useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import PasswordInput from "@/app/components/PasswordInput";
import {createNewCredentials, editCredential} from "@/app/server/vault-actions";
import {MsgContext} from "@/app/page";

export default function EditCredentials({onClose, credentials, reload}) {
    const [formData, setFormData] = useState({
        title: '',
        username: '',
        password: '',
        site: '',
    });
    const { msg, setMsg } = useContext(MsgContext);
    useEffect(() => {
        setFormData(credentials);
    }, []);
    const handleEdit = async (
        formData,
        setMsg
    ) => {
        // Call the action to submit a put request to edit the credtial
        const { success, msg } = await editCredential(
            formData, credentials.id
        );
        console.log(msg);
        if (!success) {
            setMsg(msg);
        } else {
            console.log('Creation successful');
            setMsg(msg);
            onClose();
            reload();
        }
    };
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
                        Edit Credentials
                    </h2>
                </div>

                <div className={'p-4 mt-8 sm:mx-auto sm:w-full sm:max-w-sm'} >
                    <form className={'space-y-6'}>
                        {/* Form to get user details for signup */}
                        <input
                            type='text'
                            required={true}
                            placeholder='Title'
                            value={formData.title}
                            onChange={(e) =>
                                setFormData({ ...formData, title: e.target.value })
                            }
                            className={
                                'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6}'
                            }
                        ></input>
                        <input
                            type='text'
                            required={true}
                            placeholder='Username'
                            value={formData.username}
                            onChange={(e) =>
                                setFormData({ ...formData, username: e.target.value })
                            }
                            className={
                                'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            }
                        ></input>
                        <PasswordInput value={formData.password} onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                        }>
                        </PasswordInput>
                        <input
                            type='text'
                            required={true}
                            placeholder='URL or Link'
                            value={formData.site}
                            onChange={(e) =>
                                setFormData({ ...formData, site: e.target.value })
                            }
                            className={
                                'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            }
                        ></input>


                        <div className={'flex justify-center items-center'}>
                            {/* Signup button with formAction to call handleSignup function */}
                            <button
                                formAction={() =>
                                    handleEdit(
                                        formData,
                                        setMsg
                                    )
                                }
                                className={
                                    'flex justify-center w-1/2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                }
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </main>
    );
}