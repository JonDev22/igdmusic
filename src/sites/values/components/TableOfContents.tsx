interface TableOfContentsProps {
    sections: { id: string; title: string }[];
}

function TableOfContents({ sections }: TableOfContentsProps) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="sticky top-4 bg-linear-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20 p-6 md:p-8 backdrop-blur-sm max-w-sm mx-auto md:mx-0">
            <h3 className="text-2xl font-bold text-blue-200 mb-6">
                Inhaltsverzeichnis
            </h3>
            <nav className="space-y-3">
                {sections.map((section, index) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="w-full text-left px-4 py-3 rounded-lg bg-blue-600/20 hover:bg-blue-500/30 text-blue-100 hover:text-white transition-all duration-200 flex items-center gap-3 group"
                    >
                        <span className="text-sm font-bold text-blue-300 group-hover:text-blue-100">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform">
                            {section.title}
                        </span>
                    </button>
                ))}
            </nav>
        </div>
    );
}

export default TableOfContents;
