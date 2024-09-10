"use client";

import AddNewCredentials from "@/app/components/AddNewCredentials";
import {useState} from "react";
import {FiPlusCircle} from "react-icons/fi";

export default function Vault() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className={"h-screen lg:p-8 p-2 font-normal bg-gray-200"}>
            <h2 className={"p-8 text-xl md:text-2xl lg:text-4xl text-center"}> Personal Vault </h2>
            <button
                onClick={handleOpenModal}
                className={"absolute bottom-0 right-0 m-4 w-32 lg:w-36 lg:h-12 lg:text-lg rounded-md bg-indigo-600 px-2 text-sm font-normal leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}>
                <div className={"flex flex-row align-middle justify-center"}>
                    <FiPlusCircle size={24} className={"mt-1 mb-1 mr-3 ml-1"}/>
                    <p className={"m-1"}> New Item </p>
                </div>
            </button>
            {isModalOpen && <AddNewCredentials onClose={handleCloseModal}/>}
        </div>

    )
}