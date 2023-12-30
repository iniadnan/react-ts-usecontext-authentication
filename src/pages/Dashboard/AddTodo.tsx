import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext"

export default function DashboardIndex() {
    const { darkMode } = useTheme();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <main className={`${darkMode ? 'bg-slate-900' : 'bg-slate-50'} w-full`}>
            <div className="container mx-auto px-5 md:px-0 py-20">
                <form className="w-2/3 gap-y-5 mx-auto flex flex-wrap items-center" onClick={onSubmit}>
                    <div className="w-full">
                        <label htmlFor="title" className="font-medium text-lg text-gray-700 mb-2 inline-block">Title</label>
                        <input type="text" id="title" name="title" className="w-full py-2 px-4 text-base bg-slate-100" placeholder="Title" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="description" className="font-medium text-lg text-gray-700 mb-2 inline-block">Description</label>
                        <input type="text" id="description" name="description" className="w-full py-2 px-4 text-base bg-slate-100" placeholder="Description" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="important" className="font-medium text-lg text-gray-700 mb-2 inline-block">Important</label>
                        <select id="important" name="important" className="w-full py-2 px-4 text-base bg-slate-100">
                            <option value="true">Important</option>
                            <option value="false">Not Important</option>
                        </select>
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="date" className="font-medium text-lg text-gray-700 mb-2 inline-block">Date</label>
                        <input type="date" id="date" name="date" className="w-full py-2 px-4 text-base bg-slate-100" placeholder="Description" />
                    </div>
                    <div className="w-full flex items-center justify-end gap-x-8">
                        <Link to="/dashboard">Cancel</Link>
                        <button className="font-medium text-base text-gray-100 bg-purple-800 py-2 px-6 rounded">Save</button>
                    </div>
                </form>
            </div>
        </main>
    )
}