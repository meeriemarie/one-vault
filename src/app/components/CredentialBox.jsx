"use client";

export default function CredentialBox({credentials}) {
    return (
        <div className="w-full lg:w-1/2 md:w-1/2 rounded-md font-normal bg-slate-200">
            <h2>{credentials.title}</h2>
            <p>{credentials.username}</p>
            <p>{credentials.password}</p>
            <p>{credentials.site}</p>
        </div>
    );
}