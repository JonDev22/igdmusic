import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 flex items-center justify-center h-12 w-12 rounded-full bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-110 animate-fade-in-up z-40"
                    aria-label="Back to top"
                    title="Zurück nach oben"
                >
                    <ChevronUpIcon className="h-6 w-6" />
                </button>
            )}
        </>
    );
}

export default BackToTop;
