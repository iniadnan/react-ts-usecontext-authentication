import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext"

export default function Navbar() {

    const { darkMode } = useTheme();

    return (
        <nav className={`${darkMode ? 'bg-slate-900 border-gray-800' : 'bg-slate-50 border-gray-200'} w-full border-b-2`}>
            <div className="container mx-auto px-5 md:px-0 flex items-center justify-between py-5">
                <div className="w-4/12 flex items-center gap-x-5">
                    <Link className={`${darkMode ? 'text-gray-100' : 'text-gray-500'} font-medium text-base`} to="/">Home</Link>
                    <Link className={`${darkMode ? 'text-gray-100' : 'text-gray-500'} font-medium text-base`} to="about">About</Link>
                </div>
                <div className="w-4/12 text-center">
                    <h3 className={`${darkMode ? 'text-purple-500' : 'text-purple-800'} font-medium text-xl`}>AuthenticationToggleTheme</h3>
                </div>
                <div className="w-4/12 flex justify-end items-center gap-x-5">
                    <Link className={`${darkMode ? 'text-gray-100' : 'text-gray-500'} font-medium text-base`} to="login">Login</Link>
                </div>
            </div>
        </nav>
    )
}