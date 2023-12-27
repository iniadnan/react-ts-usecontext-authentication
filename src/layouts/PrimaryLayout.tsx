import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function PrimaryLayout() {

    return (
        <ThemeProvider
        >
            <Navbar />
            <Outlet />
            <Footer />
        </ThemeProvider>
    )
}