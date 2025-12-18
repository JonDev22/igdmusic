import { LightBulbIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Hero */}
            <section className="flex-1 bg-linear-to-r from-indigo-600 to-purple-600 text-white flex flex-col justify-center items-center text-center px-6 py-24">
                <h1 className="text-5xl font-extrabold">
                    Wilkommen zu IGDuisburg Music
                </h1>
                <p className="mt-6 text-lg max-w-xl">
                    Launch faster with React, Tailwind, and Headless UI.
                </p>
                <div className="mt-8 flex space-x-4">
                    <Link
                        to="/music"
                        className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow hover:bg-gray-100"
                    >
                        <LightBulbIcon className="h-5 w-5 mr-2" />
                        Sieh dir unsere Songs an
                    </Link>
                    <Link
                        to="/values"
                        className="inline-flex items-center px-6 py-3 border border-white rounded-md font-semibold hover:bg-white hover:text-indigo-600"
                    >
                        Erfahre mehr
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
