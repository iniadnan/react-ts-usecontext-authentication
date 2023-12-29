import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../contexts/ThemeContext";
import { AuthProvider } from "../contexts/AuthContext";

export default function PrimaryLayout() {

    return (
        <ThemeProvider
        >
            <AuthProvider>
                <Navbar />
                <Outlet />
                <Footer />
            </AuthProvider>
        </ThemeProvider>
    )
}