import {Josefin_Sans} from "next/font/google";
import "./styles/globals.css";

const josefinsans = Josefin_Sans({subsets: ["latin"]});

export const metadata = {
    title: "OneVault",
    description: "Securely store your credentials.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={josefinsans.className}>
        <header>Header</header>
        {children}
        <footer className={"text-xs"}>Semester Project by Marie Rohler</footer>
        </body>
        </html>
    );
}
