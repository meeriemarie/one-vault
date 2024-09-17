import {useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";

export default function PasswordInput({value, onChange}) {
    const [displayPW, setDisplayPW] = useState(false);

    const handleDisplayPW = () => {
        setDisplayPW(!displayPW);
    };

    return (
        <div className={'relative'}>
            <div onClick={handleDisplayPW} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                {displayPW ? (
                    <FaEyeSlash />
                ) : (
                    <FaEye />
                )}
            </div>
            <input
                type={!displayPW ? "password" : "text"}
                required={true}
                placeholder='Password'
                value={value}
                onChange={onChange}
                className={
                    'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                }
            ></input>

        </div>
    );
}