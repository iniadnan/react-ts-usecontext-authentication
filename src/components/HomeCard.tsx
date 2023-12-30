import { ITodos } from "../types"

export default function HomeCard(props: ITodos) {

    const { title, description, date, important } = props

    return (
        <article className="relative w-full py-10 px-5 rounded bg-slate-100">
            <span className="h-[30px] inline-flex items-center px-5 rounded absolute -top-[15px] bg-purple-700 text-slate-200">{date}</span>
            {important === "true" && <span className="absolute top-5 right-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
            </span>}
            <h2 className="font-semibold text-xl text-gray-700">{title}</h2>
            <p className="w-8/12 text-base text-gray-600">{description}</p>
        </article>
    )
}