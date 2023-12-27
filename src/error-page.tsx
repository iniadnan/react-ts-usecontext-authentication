import { useRouteError } from "react-router-dom";
import { IRouterError } from "./types";

export default function ErrorPage() {
    const error = useRouteError() as IRouterError;
    console.log(error)

    return (
        <div className="h-screen w-scrren flex items-center justify-center" id="error-page">
            <div>
                <h1 className="font-semibold text-3xl text-gray-800 mb-3">Oops!</h1>
                <p className="text-xl text-gray-700">Sorry, an unexpected error has occured.</p>
                <p className="text-xl text-gray-700">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}