import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext"
import { useAuth } from "../contexts/AuthContext";

export default function Login() {

    const { darkMode } = useTheme();
    const { login } = useAuth()
    const navigate = useNavigate();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        login()
        return navigate("/dashboard");
    }

    return (
        <main className={`${darkMode ? 'bg-slate-900' : 'bg-slate-50'} w-full`}>
            <div className="container mx-auto px-5 md:px-0 pt-40 pb-40">
                <form className="w-[750px] flex items-start mx-auto bg-slate-100 p-5 rounded" onSubmit={onSubmit}>
                    <div className="w-5/12">
                        <img className="w-full h-[300px] object-cover" src="/images/login-image.jpg" alt="Login" height="100" width="100" />
                    </div>
                    <div className="w-7/12 pl-8">
                        <div>
                            <h1 className="font-semibold text-2xl text-gray-800 mb-5">Login</h1>
                        </div>
                        <div className="w-full mb-5">
                            <label htmlFor="username" className="w-full block font-medium text-base text-gray-800 mb-1">Username</label>
                            <input id="username" type="text" placeholder="Username" className="w-full py-2 px-3 bg-slate-200" />
                        </div>
                        <div className="w-full mb-8">
                            <label htmlFor="password" className="w-full block font-medium text-base text-gray-800 mb-1">Password</label>
                            <input id="password" type="password" placeholder="Password" className="w-full py-2 px-3 bg-slate-200" />
                        </div>
                        <div>
                            <button className="w-full py-3 bg-purple-800 text-gray-50 font-medium text-base" type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}