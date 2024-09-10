"use client";
import {CgProfile} from "react-icons/cg";
import {IoMdSettings} from "react-icons/io";
import {TbLogin2, TbLogout} from "react-icons/tb";
import {PiVaultBold} from "react-icons/pi";
import LoginForm from "@/app/components/LoginForm";
import {useState} from "react";

export default function NavBar() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };
    const handleOpenLogin = () => {
        setIsLoginOpen(true);
    };
    const handleCloseModal = () => {
        setIsLoginOpen(false);
    };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  function logoutUser() {
    logout();
  }

  return (
    <nav
      className={
        'fixed flex flex-row justify-around items-center w-full h-14 z-10 top-0 bg-slate-800 text-white'
      }
    >
      <h2>
        <a href='/' className={'text-2xl'}>
          OneVault
        </a>
      </h2>
      <section className={'flex flex-row items-center font-light'}>
        <p
          className={
            'hover:bg-gray-500 pt-1 pb-1 rounded-md w-24 text-center cursor-pointer'
          }
        >
          <a href='/' className={'text-lg'}>
            Home
          </a>
        </p>
        {user && (
          <button
            onClick={toggleDropdown}
            className={'pl-2 pr-2 pt-2 pb-2 m-2 rounded-full hover:bg-gray-500'}
          >
            <CgProfile size={24} />

            {isDropdownVisible && (
              <div className={'absolute mt-3 bg-slate-800'}>
                <ul className={'table text-left border-collapse'}>
                  <li
                    className={
                      'hover:bg-indigo-300 hover:text-gray-900 p-2 w-32'
                    }
                  >
                    <a href='/' className={'table-row'}>
                      <IoMdSettings size={24} className={'inline-block'} />{' '}
                      Settings
                    </a>
                </p>
                <button onClick={toggleDropdown}
                        className={"pl-2 pr-2 pt-2 pb-2 m-2 rounded-full hover:bg-gray-500"}>
                    <CgProfile size={24}/>

                    {isDropdownVisible &&
                        (<div className={"absolute mt-3 bg-slate-800"}>
                                <ul className={"table text-left border-collapse"}>
                                    <li className={"hover:bg-indigo-300 hover:text-gray-900 p-2 w-32"}>
                                        <a href="./account"
                                           className={"table-row"}>
                                            <IoMdSettings size={24} className={"inline-block"}/> Settings
                                        </a>
                                    </li>
                                    <li className={"hover:bg-indigo-300 hover:text-gray-900 p-2 w-32"}>
                                        <a href="./vault"
                                           className={"table-row"}>
                                            <PiVaultBold size={24} className={"inline"}/> Vault
                                        </a>
                                    </li>
                                    <li className={"hover:bg-indigo-300 hover:text-gray-900 p-2 w-32"}>
                                        <a href="/"
                                           className={"table-row"}>
                                            <TbLogout size={24} className={"inline"}/> Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    {isDropdownVisible &&
                        (<div className={"hidden mt-3 bg-slate-800"}>
                                <ul className={"table border-collapse"}>
                                    <li className={"hover:bg-indigo-300 hover:text-gray-900 p-2 w-32"}>
                                        <a onClick={handleOpenLogin}
                                           className={"lg:table-row lg:text-left text-center"}>
                                            <TbLogin2 size={24} className={"inline"}/> Login
                                        </a>
                                    </li>
                                </ul>
                                {isLoginOpen && <LoginForm onClose={handleCloseModal}/>}
                            </div>
                        )}
                </button>
            </section>
        </nav>
    )
        ;
}
