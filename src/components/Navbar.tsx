import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full border-b-2">
            <div className="container mx-auto px-5 md:px-0 flex items-center justify-between py-5">
                <div className="w-4/12 flex items-center gap-x-5">
                    <Link className="font-medium text-base text-gray-500" to="/">Home</Link>
                    <Link className="font-medium text-base text-gray-500" to="about">About</Link>
                </div>
                <h3 className="w-4/12 font-medium text-xl text-purple-800">AuthenticationToggleTheme</h3>
                <div className="w-4/12 flex justify-end items-center gap-x-5">
                    <Link className="font-medium text-base text-gray-500" to="login">Login</Link>
                </div>
            </div>
        </nav>
    )
}