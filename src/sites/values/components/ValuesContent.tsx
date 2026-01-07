import {
    EyeIcon,
    LightBulbIcon,
    ArrowTrendingUpIcon,
    GiftIcon,
    NumberedListIcon,
    UserGroupIcon,
    RectangleGroupIcon,
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
                            Im Neuen Testament sind wir dazu angehalten, uns mit
                            Liedern gegenseitig zu ermutigen und uns zuzusingen.
                            Als Musikdienst haben wir die Aufgabe, die Gemeinde
                            zum Lob und zur Anbetung Gottes durch Lieder
                            einzustimmen.
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
                    <ul className="list-outside list-disc space-y-4 text-left max-w-3xl mx-auto">
                        <li>
                            <p className="text-gray-300 leading-relaxed">
                                Wie in jedem Dienst, verfolgen wir ebenfalls das
                                Ziel, in unserer Jüngerschaft zu wachsen. Dabei
                                dienen wir Gott und suchen ihn besser
                                kennenzulernen, ihm zu folgen und in seiner
                                Mission und seinem Plan mitteilzunehmen.
                            </p>
                        </li>
                        <li>
                            <p className="text-gray-300">
                                Die Ältesten, die dem treuen Ruf eines Aufsehers
                                über die Gemeinde Gottes folgen, nehmen zudem
                                eine übersehende Rolle im Musikdienst ein. Wie
                                in jedem Dienst ordnen sich die Mitglieder in
                                der Gemeinde den Ältesten unter. Dazu gehört,
                                dass sie sich in Liebe unterordnen, wenn ein
                                Dienstleiter gewählt wird.
                            </p>
                        </li>
                        <li>
                            <p className="text-gray-300">
                                Älteste und Dienstleiter suchen demnach, die
                                Mitglieder stets in ihrer Jüngerschaft
                                auszurüsten und nehmen sich das Wachsen jedes
                                einzelnen zu Herzen in ihrem Lauf mit dem Herrn
                                Jesus Christus.
                            </p>
                        </li>
                        <li>
                            <div>
                                <p className="text-gray-300">
                                    Um im Alten Testament den Dienst am Tempel
                                    treu erfüllen zu können, wurden spezielle
                                    Musiker aus dem Volk ausgewählt, die die
                                    Instrumente beherrschten und das Volk im
                                    Gesang anleiten konnten. Gottes Wort nutzt
                                    dazu das Wort „talentiert“.
                                </p>
                                <div className="py-2" />
                                <p className="text-gray-300">
                                    Da im Neuen Testament keine spezifische
                                    Angabe zum Dienst eines Musikers in der
                                    Gemeinde vorgebracht wird, können wir nichts
                                    mehr erwarten. Demnach setzt der Dienst
                                    keine Perfektion voraus, weder beim Spielen
                                    eines Instruments noch beim Singen.
                                    Allerdings wollen wir auch eine treue und
                                    Gottgefällige Gemeinde sein, die ehrlich
                                    miteinander umgehen kann. Während jeder
                                    angehalten ist zu singen, ist nicht jeder
                                    dazu angehalten, dem Musikdienst
                                    beizutreten. Um eine ehrliche und liebende
                                    Atmosphäre zu schaffen, geben wir liebende
                                    und ehrliche Rückmeldungen. Sollte demnach
                                    jemand nicht im Musikdienst aufgenommen
                                    werden, weil zu diesem Zeitpunkt die
                                    notwendige Qualifikation einer hinreichenden
                                    Fähigkeit des Spielens eines Instruments
                                    oder des Singens nicht vorhanden ist, so ist
                                    dies niemals aus eigenem Interesse, sondern
                                    aus Liebe zu dieser Person, aber auch mit
                                    Blick auf das Wohl der Gemeinde zu sehen.
                                </p>
                            </div>
                        </li>
                    </ul>
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

                    <ul className="list-outside list-disc space-y-4 text-left max-w-3xl mx-auto">
                        <li>
                            <p className="text-gray-300 leading-relaxed">
                                Die erste und wichtigste Voraussetzung für jeden
                                Dienst sollte es sein, in die lokale Gemeinde zu
                                investieren und sich Christus und den erwählten
                                Ältesten treu unterzuordnen.
                            </p>
                            <div className="py-2" />
                            <p className="text-gray-300 leading-relaxed">
                                Dies ist für den Musikdienst nicht anders. Aus
                                diesem Grund ist die erste Voraussetzung die
                                Mitgliedschaft. Da der Musikdienst vor der
                                Gemeinde ausgeübt wird und wir augenscheinlich
                                wahrgenommen werden, können nur Mitglieder der
                                lokalen Gemeinde diese repräsentieren.
                            </p>
                        </li>
                        <li>
                            <p className="text-gray-300 leading-relaxed">
                                Zudem sollten die Mitglieder ein Ohr für Musik
                                haben. Stimme und Instrument müssen nicht
                                perfekt beherrscht werden. Diese sollte
                                nichtsdestotrotz nicht lediglich dem Lied
                                folgen, sondern sich mit den anderen Musikern
                                integrieren lassen.
                            </p>
                        </li>
                        <li>
                            <p className="text-gray-300 leading-relaxed">
                                Die Teilnahme am Musikdienst stellt keine
                                Kompensation für die aktive Beteiligung am
                                Gemeindeleben dar. Das Gemeindeleben erstreckt
                                sich über den Sonntagsgottesdienst hinaus und
                                findet beispielsweise in Hausgruppen statt.
                                Ausnahmen sind unter bestimmten Umständen
                                zulässig. Jedoch ist es für Mitglieder des
                                Musikdiensts verpflichtend, sich sowohl in den
                                Hausgruppen als auch an Sonntagen, an denen sie
                                nicht im Dienst eingeteilt sind, aktiv am
                                Gemeindeleben zu beteiligen. Bei Mitgliedern,
                                die sich regelmäßig nicht am Gemeindeleben
                                beteiligen, wird ein Gespräch geführt und
                                gegebenenfalls eine Entfernung aus dem Dienst
                                erwogen.
                            </p>
                        </li>
                        <li>
                            <p className="text-gray-300 leading-relaxed">
                                Die Ältesten beauftragen den Musikleiter mit der
                                treuen Leitung des Musikdiensts. Hierzu wird dem
                                Leiter die erforderliche Autorität übertragen.
                                Dies impliziert, dass die Mitglieder sich den
                                Ältesten, und damit dem gewählten Musikleiter,
                                unterordnen. Folglich obliegt dem Musikleiter
                                die Entscheidung über die Auswahl der Lieder,
                                deren Einführung oder Entfernung, sowie über die
                                Aufnahme oder den Ausschluss von Mitgliedern.
                            </p>
                        </li>
                    </ul>
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
                        Der Musikdienst möchte die Gläubigen durch Musik zum Lob
                        Gottes einladen und jeden Einzelnen auf seinem Weg mit
                        Jesus Christus unterstützen.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Indem wir uns mehr Zeit nehmen, die Texte der Lieder,
                        die wir singen, vorzubereiten, können wir tiefer in sie
                        eintauchen und uns mit ihnen auseinandersetzen. So
                        können wir Christus besser kennenlernen und unser
                        Verständnis von ihm vertiefen. Die Texte regen außerdem
                        dazu an, sich auszutauschen und ins Gespräch zu kommen.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Die Vorbereitung der Lieder, sowohl in Text als auch in
                        Musik, soll uns helfen, uns auf die Beziehung anderer zu
                        Gott durch die Musik zu konzentrieren. Es geht uns nicht
                        darum, die Emotionen von uns und den Gläubigen künstlich
                        anzuregen, sondern vielmehr darum, das Herz eines
                        Gläubigen zum Ausdruck der Anbetung zu verhelfen.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Indem wir uns als Musikdienst gegenseitig unterstützen
                        und dienen, sowie der Gemeinde dienen, stärken wir die
                        Gemeinschaft, zu der uns Gott berufen hat.
                    </p>
                </div>
            </section>

            <section
                id="verantwortung"
                className="group scroll-mt-20 bg-linear-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20 p-8 md:p-12 backdrop-blur-sm hover:border-blue-400/40 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-linear-to-br from-fuchsia-700 to-fuchsia-800 group-hover:from-fuchsia-400 group-hover:to-fuchsia-500 transition-all transform group-hover:scale-110">
                        <RectangleGroupIcon className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-100">
                        Verantwortungen
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
                        Was sind unsere Verantwortungen?
                    </h2>

                    <ul className="list-outside list-disc space-y-4 text-left max-w-3xl mx-auto">
                        <li>
                            <p className="text-gray-300 leading-relaxed">
                                Jeder Musiker, ob Gesang oder Instrument, muss
                                sich mit den Liedern vertraut machen, die für
                                die jeweiligen Sonntage ausgewählt sind, an
                                denen er musikalisch teilnehmen wird. Wenn die
                                Musiker die Lieder nicht kennen oder umsetzen
                                können, dann können sie auch nicht die Gemeinde
                                dahingehend anleiten.
                            </p>
                        </li>
                        <li>
                            <p className="text-gray-300 leading-relaxed">
                                Neben der musikalischen Gestaltung nehmen sich
                                unsere Musiker auch die Zeit, sich mit den
                                Texten der Lieder auseinanderzusetzen. So können
                                wir alle gemeinsam verstehen, was wir und die
                                Gemeinde mit unseren Stimmen Gott zum Lob
                                singen. Diese Auseinandersetzung kann zu Fragen
                                und tieferen Erkenntnissen führen. Falls Fragen
                                aufkommen, könnt ihr euch gerne an den Leiter
                                wenden.
                            </p>
                        </li>
                        <li>
                            <p className="text-gray-300 leading-relaxed">
                                Die ausgewählten Lieder dienen in der Regel der
                                Ergänzung oder der Auseinandersetzung mit der
                                Predigt oder dem Predigttext. Obwohl es
                                wünschenswert ist, dass die Lieder auch den
                                individuellen Präferenzen entsprechen, steht die
                                Förderung des Gemeinwohls und der Anbetung im
                                Vordergrund. Auch wenn ein Lied möglicherweise
                                nicht allen Musikern unmittelbar zusagt, kann es
                                dennoch zum Gemeinwohl beitragen und gesungen
                                werden. Auf diese Weise gestalten wir gemeinsam
                                ein harmonisches und bereicherndes
                                Gottesdiensterlebnis.
                            </p>
                        </li>
                        <li>
                            <p className="text-gray-300 leading-relaxed">
                                Wie bereits in anderen Punkten erwähnt, ist eine
                                Verantwortung das Bild der Gemeinde, mit
                                Christus als Haupt, im Dienst widerzuspiegeln.
                                Dazu ordnen wir uns in Liebe dem Dienstleiter
                                unter, und gemeinsam als Dienst stellen sich
                                alle den Ältesten unter, welche das Aufsehen der
                                Gemeinde zur Aufgabe haben.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default ValuesContent;
