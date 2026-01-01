import { LightBulbIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Home() {
    return (
        <section className="text-black">
            <div className="bg-linear-180 from-blue-900 to-ebebeb">
                <div className="text-center py-54 px-6">
                    <h1 className="text-4xl font-bold">IGDuisburg</h1>
                    <h2 className="text-4xl font-bold italic">Musik</h2>
                </div>
            </div>

            <div className="py-12 px-6 flex gap-6 flex-col max-w-5xl mx-auto">
                <p className="text-lg text-center">
                    Herzlich willkommen zu IGDuisburg-Musik.
                </p>
                <p className="text-lg text-center">
                    Alle Informationen zu den Liedern, die wir in IGDuisburg
                    singen, sowie die Werte, die Mission, Vision und alle
                    Voraussetzungen findest du ebenfalls hier.
                </p>

                <div className="flex justify-center-safe md:flex-row flex-col pt-6 gap-6">
                    <Link
                        to="/music"
                        className="inline-flex items-center px-6 py-3 bg-blue-500 font-semibold rounded-md shadow"
                    >
                        <LightBulbIcon className="h-5 w-5 mr-2 text-white" />
                        <p className="text-white">Sieh dir unsere Lieder an</p>
                    </Link>
                    <Link
                        to="/values"
                        className="inline-flex items-center px-6 py-3 border border-black rounded-md font-semibold"
                    >
                        <p className="text-black">Unsere Werte</p>
                    </Link>
                </div>

                <p className="text-center text-lg pt-6 italic">
                    Interessiert dem Musikteam beizutreten? Dann sprich einfach
                    das Musikteam oder die Ältesten an! Wir freuen uns auf dich!
                </p>
            </div>
        </section>
    );
}

export default Home;
