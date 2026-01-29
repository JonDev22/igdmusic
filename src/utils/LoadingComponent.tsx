function LoadingComponent() {
    return (
        <div className="flex items-center justify-center h-screen bg-linear-to-b from-slate-950 via-blue-950 to-slate-900">
            <div className="flex flex-col items-center space-y-4">
                <p className="text-2xl font-bold text-white">
                    Herzlich willkommen!
                </p>

                {/* Text */}
                <div className="flex pb-6">
                    <p className="font-bold text-white text-7xl italic animate-pulse duration-100 delay-75">
                        I
                    </p>
                    <p className="font-bold text-white text-7xl italic animate-pulse duration-150 delay-100">
                        G
                    </p>
                    <p className="font-bold text-white text-7xl italic animate-pulse duration-200 delay-125">
                        Duisburg
                    </p>
                </div>

                {/* Spinner */}
                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-white animate-pulse text-2xl font-semibold italic">
                        Daten werden geladen...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoadingComponent;
