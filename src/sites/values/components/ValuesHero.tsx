function ValuesHero() {
    return (
        <div className="relative overflow-hidden py-20 md:py-32">
            {/* Background blur effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
            </div>

            <div className="relative z-10 flex flex-col gap-8">
                <h1 className="text-center text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-linear-to-r from-blue-300 via-blue-400 to-blue-500 px-4">
                    IGDuisburg - Musikdienst
                </h1>

                <section className="text-center flex gap-6 flex-col px-4 max-w-3xl mx-auto">
                    <div className="h-1 w-16 bg-linear-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
                    <p className="italic text-xl md:text-2xl font-semibold text-blue-100 leading-relaxed">
                        "Werdet voller Geist, indem ihr zueinander in
                        Psalmen und Lobliedern und geistlichen Liedern redet
                        und dem Herrn mit eurem Herzen singt und spielt!"
                    </p>
                    <p className="text-lg font-semibold text-blue-300">
                        Epheser 5: 18b-19
                    </p>
                </section>
            </div>
        </div>
    );
}

export default ValuesHero;
