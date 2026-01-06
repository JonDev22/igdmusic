import { Button } from "@headlessui/react";
import {
    LightBulbIcon,
    SparklesIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";

function Home({ onChange }: { onChange: (index: number) => void }) {
    return (
        <section className="min-h-screen bg-linear-to-b from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
            {/* Hero Section */}
            <div className="relative z-10 pt-20 pb-32 px-6 flex flex-col items-center justify-center min-h-screen">
                <div className="text-center space-y-6 max-w-3xl">
                    <div className="space-y-2">
                        <h1 className="text-7xl md:text-8xl font-black bg-clip-text text-transparent bg-linear-to-r from-blue-300 via-blue-400 to-blue-500">
                            IGDuisburg
                        </h1>
                        <h2 className="text-5xl md:text-6xl font-bold italic text-blue-200">
                            Musik
                        </h2>
                    </div>

                    <div className="h-1 w-24 bg-linear-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>

                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                        Herzlich willkommen zu IGDuisburg-Musik.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 py-20 px-6">
                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Description */}
                    <div className="text-center space-y-8">
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            Alle Informationen zu den Liedern, die wir in
                            IGDuisburg singen, sowie die Werte, die Mission,
                            Vision und alle Voraussetzungen findest du ebenfalls
                            hier.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                            <Button
                                onClick={() => onChange(1)}
                                className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 transform hover:scale-105"
                            >
                                <LightBulbIcon className="h-6 w-6 mr-3 text-white" />
                                <span className="text-white">
                                    Sieh dir unsere Lieder an
                                </span>
                            </Button>
                            <Button
                                onClick={() => onChange(3)}
                                className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-xl transition-all duration-300 border-2 border-blue-400 hover:bg-blue-400/10 text-blue-300 hover:text-blue-200 transform hover:scale-105"
                            >
                                <SparklesIcon className="h-6 w-6 mr-3 group-hover:animate-pulse text-white" />
                                <span className="text-white">Unsere Werte</span>
                            </Button>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent to-blue-500/50"></div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest">
                            Oder
                        </p>
                        <div className="flex-1 h-px bg-linear-to-l from-transparent to-blue-500/50"></div>
                    </div>

                    {/* Join Section */}
                    <div className="bg-linear-to-br from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/20 p-8 md:p-12 backdrop-blur-sm hover:border-blue-400/40 transition-colors">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="shrink-0">
                                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-linear-to-br from-blue-500 to-purple-500">
                                    <UserGroupIcon className="h-8 w-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold mb-3 text-blue-100">
                                    Werde Teil unseres Teams
                                </h3>
                                <p className="text-lg text-gray-300">
                                    Interessiert dem Musikteam beizutreten? Dann
                                    sprich einfach das Musikteam oder die
                                    Ältesten an! Wir freuen uns auf dich!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
