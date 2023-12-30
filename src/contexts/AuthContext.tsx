import { createContext, useContext, useState, useEffect } from "react";

import { AuthContextType } from "../types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const storedCredentialsString = localStorage.getItem('userData');
        if (storedCredentialsString) {
            setIsAuthenticated(true)
        }
    }, [])

    const login = (username: string, password: string) => {
        const userData = {
            username: username,
            password: password
        }
        localStorage.setItem('userData', JSON.stringify(userData));
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('userData');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};