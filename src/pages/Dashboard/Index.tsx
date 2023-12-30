import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext"

export default function DashboardAddTodo() {
    const { darkMode } = useTheme();
    return (
        <main className={`${darkMode ? 'bg-slate-900' : 'bg-slate-50'} w-full`}>
            <div className="container mx-auto px-5 md:px-0 py-20">
                <div className="w-2/3 mx-auto flex items-center">
                    <Link to="/dashboard/add-todo" className={`${darkMode ? 'text-gray-200' : 'text-gray-200'} bg-purple-800 text-base py-2 px-4 rounded`}>Add Todo</Link>
                </div>
                <div className="flex flex-wrap gap-y-4">
                    <article></article>
                </div>
            </div>
        </main>
    )
}