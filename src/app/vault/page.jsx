"use client";

import AddNewCredentials from "@/app/components/AddNewCredentials";
import {useState} from "react";

export default function Vault() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className={"h-screen lg:p-8 p-2 font-normal"}>
            <button
                onClick={handleOpenModal}
                className={"m-4 w-32 lg:w-48 lg:h-12 lg:text-lg rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-normal leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}>
                Add New Item
            </button>
            {isModalOpen && <AddNewCredentials onClose={handleCloseModal}/>}
        </div>

    )
}