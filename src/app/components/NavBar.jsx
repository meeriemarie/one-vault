"use client";
import {CgProfile} from "react-icons/cg";
import {IoMdSettings} from "react-icons/io";
import {TbLogin2, TbLogout} from "react-icons/tb";
import {PiVaultBold} from "react-icons/pi";
import {useState} from "react";

export default function NavBar() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <nav
            className={"fixed flex flex-row justify-around items-center w-full h-14 z-10 top-0 bg-slate-800 text-white"}>
            <div>
                <a href="/" className={"text-2xl"}>
                    OneVault
                </a>
            </div>
            <div className={"flex flex-row items-center font-light"}>
                <div className={"hover:bg-gray-500 pt-1 pb-1 rounded-md w-24 text-center cursor-pointer"}>
                    <a href="/" className={"text-lg"}>
                        Home
                    </a>
                </div>
                <button onClick={toggleDropdown}
                        className={"pl-2 pr-2 pt-2 pb-2 m-2 rounded-full hover:bg-gray-500"}><CgProfile size={24}/>

                    {isDropdownVisible &&
                        (<div className={"absolute mt-3 bg-slate-800"}>
                            <div className={"table border-collapse"}>
                                <div className={"hover:bg-indigo-300 hover:text-gray-900 p-2 w-32"}>
                                    <a href="/"
                                       className={"lg:table-row"}>
                                        <IoMdSettings size={24} className={"inline-block"}/> Settings
                                    </a>
                                </div>
                                <div className={"hover:bg-indigo-300 hover:text-gray-900 p-2 w-32"}>
                                    <a href="/"
                                       className={"lg:table-row lg:text-left text-center"}>
                                        <PiVaultBold size={24} className={"inline"}/> Vault
                                    </a>
                                </div>
                                <div className={"hover:bg-indigo-300 hover:text-gray-900 p-2 w-32"}>
                                    <a href="/"
                                       className={"lg:table-row lg:text-left text-center"}>
                                        <TbLogout size={24} className={"inline"}/> Logout
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={"hidden mt-3 bg-slate-800"}>
                        <div className={"table border-collapse"}>
                            <div className={"hover:bg-indigo-300 hover:text-gray-900 p-2 w-32"}>
                                <a href="/"
                                   className={"lg:table-row lg:text-left text-center"}>
                                    <TbLogin2 size={24} className={"inline"}/> Login
                                </a>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </nav>
    );
}