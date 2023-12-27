import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IThemes } from '../types/index'

const ThemeContext = createContext<IThemes | null>(null)

export default function PrimaryLayout() {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                toggleTheme: () => setDarkMode(!darkMode),
            }}
        >
            <Navbar />
            <Outlet />
            <Footer />
        </ThemeContext.Provider>
    )
}