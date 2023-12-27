import { useTheme } from "../contexts/ThemeContext"

export default function Footer() {

    const { darkMode, toggleTheme } = useTheme()

    return (
        <footer className={`${darkMode ? 'bg-slate-900 border-gray-800' : 'bg-slate-50 border-gray-200'} w-full border-t-2`}>
            <div className="container mx-auto flex items-center justify-between px-5 md:px-0 py-5">
                <p className={`${darkMode ? 'text-purple-500' : 'text-purple-800'} font-medium text-base text-xl text-center`}>Coded by @iniadnan.dev</p>
                <div>
                    <button type="button" onClick={toggleTheme} className={`${darkMode ? 'text-gray-100' : 'text-gray-800'} font-medium text-base`}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
                </div>
            </div>
        </footer>
    )
}