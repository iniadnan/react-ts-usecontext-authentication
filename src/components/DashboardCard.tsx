import { ITodos } from "../types"

export default function DashboardCard(props: ITodos) {

    const { title, description, date } = props

    return (
        <article className="relative w-full py-10 px-5 rounded bg-slate-100">
            <span className="h-[30px] inline-flex items-center px-5 rounded absolute -top-[15px] bg-purple-700 text-slate-200">{ date }</span>
            <h2 className="font-semibold text-xl text-gray-700">{ title }</h2>
            <p className="w-8/12 text-base text-gray-600">{ description }</p>
        </article>
    )
}