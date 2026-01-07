import ValuesHero from "./components/ValuesHero";
import TableOfContents from "./components/TableOfContents";
import ValuesContent from "./components/ValuesContent";
import BackToTop from "./components/BackToTop";

function ValuesPage() {
    const sections = [
        { id: "mission", title: "Mission" },
        { id: "vision", title: "Vision" },
        { id: "denkweise", title: "Denkweise" },
        { id: "werte", title: "Werte" },
        { id: "voraussetzung", title: "Voraussetzung" },
        { id: "jungerschaft", title: "Jüngerschaft" },
        { id: "verantwortung", title: "Verantwortungen" },
    ];

    return (
        <div className="min-h-screen bg-linear-to-b from-slate-950 via-blue-950 to-slate-900 text-white">
            {/* Hero Section */}
            <ValuesHero />

            {/* Main Content with Table of Contents */}
            <div className="max-w-6xl mx-auto px-4 py-20 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Table of Contents Sidebar */}
                    <div className="lg:col-span-1">
                        <TableOfContents sections={sections} />
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-3">
                        <ValuesContent />
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <BackToTop />
        </div>
    );
}

export default ValuesPage;
