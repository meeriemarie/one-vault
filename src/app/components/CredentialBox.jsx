'use client';

import { deleteCredentialOfUser } from '../services/vault-service';
import {useState} from "react";
import AddNewCredentials from "@/app/components/AddNewCredentials";
import EditCredentials from "@/app/components/EditCredentials";
import DeleteModal from "@/app/components/DeleteModal";

export default function CredentialBox({ credentials, reloadCrendentials }) {
  const handleDelete = async (id) => {
    const res = await deleteCredentialOfUser(id);
    if (res.success) {
      console.log(res.msg);
      await reloadCrendentials(id);
    }
    //console.log(res);
  };
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const handleDeleteModal = () => {
        setIsDeleteOpen(!isDeleteOpen);
    }
  const handleOpenEdit = () => {
        setIsEditOpen(true);
    };
  const handleCloseEdit = () => {
        setIsEditOpen(false);
  }

  return (
    <>
      <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
        {credentials.title}
      </td>
      <td className='px-6 py-4'>{credentials.username}</td>
      <td className='px-6 py-4'>{credentials.password}</td>
      <td className='px-6 py-4'>{credentials.site}</td>
      <td>
        <button
            onClick={handleOpenEdit}
            className='m-1 px-4 py-2 bg-blue-500 text-white rounded-md'>
          Edit
        </button>
        <button
          className='m-1 px-4 py-2 bg-red-500 text-white rounded-md'
          onClick={() => handleDeleteModal()}
        >
          Delete
        </button>
          {isEditOpen && <EditCredentials credentials={credentials} onClose={handleCloseEdit} reload={reloadCrendentials}/>}
          {isDeleteOpen && <DeleteModal credentials={credentials} onClose={handleDeleteModal} confirmAction={() => handleDelete(credentials.id)}/>}
      </td>
    </>
  );
}
