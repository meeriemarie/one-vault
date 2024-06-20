"use client";

export default function AddNewCredentials({onClose}) {
    return (
        <main className={"fixed flex items-center justify-center top-0 left-0 w-full h-full z-50 bg-black/50"}>
            <dialog
                className="w-full lg:w-1/2 md:w-1/2 flex justify-center items-center bg-slate-200 flex-col rounded-md font-normal">
                <p
                    className="relative pt-4 pl-4 ml-0 mr-auto cursor-pointer text-gray-900 hover:text-gray-500 font-bold">
                    <button onClick={onClose}>X</button>
                </p>
                <p className={"flex justify-center"}>
                    <h2 className={"mt-2 text-2xl font-bold leading-9 tracking-tight text-gray-900"}>
                        Add New Credentials</h2>
                </p>
                <div className={"p-4 mt-8 sm:mx-auto sm:w-full sm:max-w-sm"}>
                    <form className={"space-y-6"} method={"POST"}>
                        <p>
                            <label className={"text-gray-900 p-0 m-0"}>Title</label>
                            <input type="text" value={""} readOnly={true}
                                   className={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}>
                            </input>
                        </p>
                        <p>
                            <label>Login</label>
                            <input type="text" value={""} readOnly={true}
                                   className={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}>
                            </input>
                        </p>
                        <p>
                            <label>Password</label>
                            <input type="password" value={""} readOnly={true}
                                   className={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}>
                            </input>
                        </p>
                        <p>
                            <label>Site Link</label>
                            <input type="url" value={""} readOnly={true}
                                   className={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}>
                            </input>
                        </p>
                    </form>
                </div>
                <button
                    className={"m-6 flex w-48 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}>
                    Save
                </button>
            </dialog>
        </main>
    );
}