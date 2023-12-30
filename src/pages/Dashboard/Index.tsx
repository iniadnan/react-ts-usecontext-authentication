import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext"
import useLocalStorage from "../../hooks/useLocalStorage";
import { ITodos } from "../../types";
import DashboardCard from "../../components/DashboardCard";

export default function DashboardAddTodo() {
    const { value: todos, updateValue: updateTodos } = useLocalStorage<ITodos[]>('todo', []);
    const { darkMode } = useTheme();

    const onDeleteTodo = (id: string) => {
        updateTodos(todos.filter(todo => id !== todo.id))
    }

    return (
        <main className={`${darkMode ? 'bg-slate-900' : 'bg-slate-50'} w-full`}>
            <div className="container mx-auto px-5 md:px-0 py-20">
                <div className="w-2/3 mx-auto flex items-center mb-10">
                    <Link to="/dashboard/add-todo" className={`${darkMode ? 'text-gray-200' : 'text-gray-200'} bg-purple-800 text-base py-2 px-4 rounded`}>Add Todo</Link>
                </div>
                <div className="w-2/3 mx-auto flex flex-wrap gap-y-4">
                    {
                        todos.map((todo) => <DashboardCard key={todo.id} deleteTodo={() => onDeleteTodo(todo.id)} description={todo.description} title={todo.title} date={todo.date} />)
                    }
                </div>
            </div>
        </main>
    )
}