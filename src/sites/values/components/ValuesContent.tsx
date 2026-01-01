import {
    EyeIcon,
    LightBulbIcon,
    ArrowTrendingUpIcon,
    GiftIcon,
    NumberedListIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";

function ValuesContent() {
    return (
        <div className="flex flex-col gap-20">
            {/* Mission */}
            <section
                id="mission"
                className="group scroll-mt-20 bg-linear-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20 p-8 md:p-12 backdrop-blur-sm hover:border-blue-400/40 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-linear-to-br from-blue-500 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-500 transition-all transform group-hover:scale-110">
                        <ArrowTrendingUpIcon className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-100">
                        Mission
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
                        Warum gibt es das Musikteam überhaupt?
                    </h2>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            Schon im Alten Testament wurden Musiker zum Dienst
                            im Tempel angestellt. Sie begleiteten die Anbetung
                            Gottes durch die Priester musikalisch und stimmten
                            Israel in Lob Gottes ein.
                        </p>
                        <p>
                            Im Neuen Testament sind wir dazu angehalten, uns
                            mit Liedern gegenseitig zu ermutigen und uns
                            zuzusingen. Als Musikdienst haben wir die Aufgabe,
                            die Gemeinde zum Lob und zur Anbetung Gottes durch
                            Lieder einzustimmen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section
                id="vision"
                className="group scroll-mt-20 bg-linear-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20 p-8 md:p-12 backdrop-blur-sm hover:border-blue-400/40 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-linear-to-br from-purple-500 to-purple-600 group-hover:from-purple-400 group-hover:to-purple-500 transition-all transform group-hover:scale-110">
                        <EyeIcon className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-100">
                        Vision
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
                        Wohin wollen wir uns als Musikteam entwickeln?
                    </h2>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            Jedes Mitglied im Musikdienst wächst in der
                            Jüngerschaft und wird ermutigt und geleitet auf dem
                            Weg, Jesus kennenzulernen, wie er zu werden und in
                            seiner Mission teilzunehmen.
                        </p>
                        <p>
                            Wir treffen uns regelmäßig und lernen so einander
                            kennen. Dadurch ermöglichen wir eine Atmosphäre, in
                            der wir miteinander offen reden können, Vorschläge
                            unterbreiten, uns gegenseitig ermutigen und Sorgen,
                            Zweifel und Ängste teilen.
                        </p>
                        <p>
                            Durch eine offene und ehrliche Atmosphäre wachsen
                            wir in unserem Dienst Gottes und ermöglichen ein
                            einheitliches Anleiten der Gemeinde.
                        </p>
                    </div>
                </div>
            </section>

            {/* Denkweise */}
            <section
                id="denkweise"
                className="group scroll-mt-20 bg-linear-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20 p-8 md:p-12 backdrop-blur-sm hover:border-blue-400/40 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
                <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-linear-to-br from-amber-500 to-amber-600 group-hover:from-amber-400 group-hover:to-amber-500 transition-all transform group-hover:scale-110">
                        <LightBulbIcon className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-100 text-center">
                        Denkweise
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-300 text-center">
                        Wie denken wir über das Musikteam?
                    </h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed mt-6">
                    <p>
                        Das Wort „Worship", bzw. „Worship-Team" ist in vielerlei
                        Hinsicht fehlleitend. Weder ist Musik der einzige, bzw.
                        ein Hauptteil der Anbetung, des Lobpreises oder
                        „Worship", noch ist das Musikteam das „Worship-Team".
                    </p>

                    <p>
                        Neben der Predigt, Gebeten und Lesungen sind Singen und
                        Musik nur ein Teil der Anbetung und des Gottesdienstes.
                    </p>

                    <p>
                        Die Lieder bringen durch ihre Texte Lob, Preis,
                        Anbetung, Danksagung und vieles mehr zum Ausdruck, zur
                        Ehre Gottes. Dabei ist es primär relevant, was gesungen
                        wird, statt wie es gesungen wird. Der Fokus der Lieder
                        liegt demnach auf den Texten und nicht auf den
                        Instrumenten.
                    </p>
                    <p>
                        Gott hat uns erschaffen, mit unserer Stimme, welche
                        ebenfalls als ein Teil unseres Körpers durch Jesus
                        Christus erlöst wurde. Alle Gläubigen sind dazu
                        angehalten, diese Stimme dazu zu nutzen, die Gnade
                        Gottes zum Ausdruck zu bringen und seine Herrlichkeit
                        durch Gesang zu verkünden.
                    </p>
                    <p>
                        Während jedoch jeder Gläubige zum Lobgesang aufgerufen
                        ist, bildet das Musikteam einen kleineren Teil an
                        Musikern, die es sich zum Dienst nehmen, die Gemeinde in
                        Zeit des Gesangs einzustimmen und anzuleiten.
                    </p>
                </div>
            </section>

            {/* Werte */}
            <section
                id="werte"
                className="group scroll-mt-20 bg-linear-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20 p-8 md:p-12 backdrop-blur-sm hover:border-blue-400/40 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-linear-to-br from-rose-500 to-rose-600 group-hover:from-rose-400 group-hover:to-rose-500 transition-all transform group-hover:scale-110">
                        <GiftIcon className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-100">
                        Werte
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
                        Welche Werte vertreten wir?
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Hi wir sind wie Würste, die nicht wissen, dass sie
                        Würste sind. Wir machen Musik, weil wir es lieben und
                        weil wir glauben, dass Musik Menschen verbindet und
                        inspiriert. Unser Ziel ist es, eine Gemeinschaft von
                        Musikliebhabern zu schaffen, die sich gegenseitig
                        unterstützen und gemeinsam wachsen.
                    </p>
                </div>
            </section>

            {/* Voraussetzung */}
            <section
                id="voraussetzung"
                className="group scroll-mt-20 bg-linear-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20 p-8 md:p-12 backdrop-blur-sm hover:border-blue-400/40 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-linear-to-br from-cyan-500 to-cyan-600 group-hover:from-cyan-400 group-hover:to-cyan-500 transition-all transform group-hover:scale-110">
                        <NumberedListIcon className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-100">
                        Voraussetzung
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
                        Was sind die Voraussetzungen, um dem Musikteam
                        beizutreten?
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Hi wir sind wie Würste, die nicht wissen, dass sie
                        Würste sind. Wir machen Musik, weil wir es lieben und
                        weil wir glauben, dass Musik Menschen verbindet und
                        inspiriert. Unser Ziel ist es, eine Gemeinschaft von
                        Musikliebhabern zu schaffen, die sich gegenseitig
                        unterstützen und gemeinsam wachsen.
                    </p>
                </div>
            </section>

            {/* Jüngerschaft */}
            <section
                id="jungerschaft"
                className="group scroll-mt-20 bg-linear-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20 p-8 md:p-12 backdrop-blur-sm hover:border-blue-400/40 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 group-hover:from-emerald-400 group-hover:to-emerald-500 transition-all transform group-hover:scale-110">
                        <UserGroupIcon className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-100">
                        Jüngerschaft
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
                        Wie sieht die Jüngerschaft im Musikteam aus?
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Hi wir sind wie Würste, die nicht wissen, dass sie
                        Würste sind. Wir machen Musik, weil wir es lieben und
                        weil wir glauben, dass Musik Menschen verbindet und
                        inspiriert. Unser Ziel ist es, eine Gemeinschaft von
                        Musikliebhabern zu schaffen, die sich gegenseitig
                        unterstützen und gemeinsam wachsen.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default ValuesContent;
