import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    // console.error(error)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-700 p-4">
            <h1 className="text-4xl font-bold mb-4">Oops!</h1>
            <p className="text-lg mb-4">Sorry, an unexpected error has occurred.</p>
            <p className="italic mb-6">
                <i>{error.statusText || error.message}</i>
            </p>
            <Link className="hover:text-gray-600 text-[#9538E2] font-semibold hover:font-bold text-lg" to="/">Go back to the Home Page</Link>
        </div>
    );
};

export default ErrorPage;