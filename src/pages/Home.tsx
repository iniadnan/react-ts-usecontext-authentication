import { useTheme } from "../contexts/ThemeContext"
import useLocalStorage from "../hooks/useLocalStorage";
import { ITodos } from "../types";
import HomeCard from "../components/HomeCard";
export default function Home() {
    const { darkMode } = useTheme();
    const { value: todos } = useLocalStorage<ITodos[]>('todo', []);
    return (
        <main className={`${darkMode ? 'bg-slate-900' : 'bg-slate-50'} w-full`}>
            <div className="container mx-auto px-5 md:px-0 py-20">
                <div className="grid grid-cols-3 gap-5">
                    {todos.map((todo) => <HomeCard key={todo.id} description={todo.description} important={todo.important} title={todo.title} date={todo.date} />)}
                </div>
            </div>
        </main>
    )
}