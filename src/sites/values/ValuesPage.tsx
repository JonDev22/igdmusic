import {
    EyeIcon,
    LightBulbIcon,
    ArrowTrendingUpIcon,
    GiftIcon,
    NumberedListIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";

function ValuesPage() {
    return (
        <div className="flex flex-col gap-20 text-black">
            <div className="flex flex-col gap-8 py-32 bg-linear-180 from-blue-900 to-ebebeb">
                <h1 className="text-center text-3xl font-bold px-4">
                    IGDuisburg - Musikdienst
                </h1>

                <section className="text-center flex gap-4 flex-col px-4">
                    <p className="italic text-2xl font-bold">
                        "Werdet voller Geist, indem ihr zueinander in Psalmen
                        und Lobliedern und geistlichen Liedern redet und dem
                        Herrn mit eurem Herzen singt und spielt!"
                    </p>
                    <p className="text-lg font-bold">Epheser 5: 18b-19</p>
                </section>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col gap-20 px-4 pb-12">
                <section className="text-center items-center flex flex-col gap-4">
                    <h1 className="font-bold">Mission</h1>
                    <ArrowTrendingUpIcon className="w-12 h-12 rounded-full border p-2" />
                    <h2 className="text-2xl font-bold">
                        Warum gibt es das Musikteam überhaupt?
                    </h2>
                    <p className="text-justify">
                        Schon im Alten Testament wurden Musiker zum Dienst im
                        Tempel angestellt. Sie begleiteten die Anbetung Gottes
                        durch die Priester musikalisch und stimmten Israel in
                        Lob Gottes ein.
                    </p>
                    <p className="text-justify">
                        Im Neuen Testament sind wir dazu angehalten, uns mit
                        Liedern gegenseitig zu ermutigen und uns zuzusingen. Als
                        Musikdienst haben wir die Aufgabe, die Gemeinde zum Lob
                        und zur Anbetung Gottes durch Lieder einzustimmen.
                    </p>
                </section>

                <section className="text-center items-center flex flex-col gap-4">
                    <h1 className="font-bold">Vision</h1>
                    <EyeIcon className="w-12 h-12 rounded-full border p-2" />
                    <h2 className="text-2xl font-bold">
                        Wohin wollen wir uns als Musikteam entwickeln?
                    </h2>
                    <p className="text-justify">
                        Jedes Mitglied im Musikdienst wächst in der Jüngerschaft
                        und wird ermutigt und geleitet auf dem Weg, Jesus
                        kennenzulernen, wie er zu werden und in seiner Mission
                        teilzunehmen.
                    </p>
                    <p className="text-justify">
                        Wir treffen uns regelmäßig und lernen so einander
                        kennen. Dadurch ermöglichen wir eine Atmosphäre, in der
                        wir miteinander offen reden können, Vorschläge
                        unterbreiten, uns gegenseitig ermutigen und Sorgen,
                        Zweifel und Ängste teilen.
                    </p>
                    <p className="text-justify">
                        Durch eine offene und ehrliche Atmosphäre wachsen wir in
                        unserem Dienst Gottes und ermöglichen ein einheitliches
                        Anleiten der Gemeinde.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 items-center">
                        <h1 className="font-bold">Denkweise</h1>
                        <LightBulbIcon className="w-12 h-12 rounded-full border p-2" />
                        <h2 className="text-2xl font-bold">
                            Wie denken wir über das Musikteam?
                        </h2>
                    </div>
                    <p className="text-justify">
                        Das Wort „Worship“, bzw. „Worship-Team“ ist in vielerlei
                        Hinsicht fehlleitend. Weder ist Musik der einzige, bzw.
                        ein Hauptteil der Anbetung, des Lobpreises oder
                        „Worship“, noch ist das Musikteam das „Worship-Team“.
                    </p>

                    <p className="text-justify">
                        Neben der Predigt, Gebeten und Lesungen sind Singen und
                        Musik nur ein Teil der Anbetung und des Gottesdienstes.
                    </p>

                    <p className="text-justify">
                        Die Lieder bringen durch ihre Texte Lob, Preis,
                        Anbetung, Danksagung und vieles mehr zum Ausdruck, zur
                        Ehre Gottes. Dabei ist es primär relevant, was gesungen
                        wird, statt wie es gesungen wird. Der Fokus der Lieder
                        liegt demnach auf den Texten und nicht auf den
                        Instrumenten.
                    </p>
                    <p className="text-justify">
                        Gott hat uns erschaffen, mit unserer Stimme, welche
                        ebenfalls als ein Teil unseres Körpers durch Jesus
                        Christus erlöst wurde. Alle Gläubigen sind dazu
                        angehalten, diese Stimme dazu zu nutzen, die Gnade
                        Gottes zum Ausdruck zu bringen und seine Herrlichkeit
                        durch Gesang zu verkünden.
                    </p>
                    <p className="text-justify">
                        Während jedoch jeder Gläubige zum Lobgesang aufgerufen
                        ist, bildet das Musikteam einen kleineren Teil an
                        Musikern, die es sich zum Dienst nehmen, die Gemeinde in
                        Zeit des Gesangs einzustimmen und anzuleiten.
                    </p>
                </section>

                <section className="text-center items-center flex flex-col gap-4">
                    <h1 className="font-bold">Werte</h1>
                    <GiftIcon className="w-12 h-12 rounded-full border p-2" />
                    <h2 className="text-2xl font-bold">
                        Welche Werte vertreten wir?
                    </h2>
                    <p className="text-justify">
                        Hi wir sind wie Würste, die nicht wissen, dass sie
                        Würste sind. Wir machen Musik, weil wir es lieben und
                        weil wir glauben, dass Musik Menschen verbindet und
                        inspiriert. Unser Ziel ist es, eine Gemeinschaft von
                        Musikliebhabern zu schaffen, die sich gegenseitig
                        unterstützen und gemeinsam wachsen.
                    </p>
                </section>

                <section className="text-center items-center flex flex-col gap-4">
                    <h1 className="font-bold">Voraussetzung</h1>
                    <NumberedListIcon className="w-12 h-12 rounded-full border p-2" />
                    <h2 className="text-2xl font-bold">
                        Was sind die Voraussetzungen, um dem Musikteam
                        beizutreten?
                    </h2>
                    <p className="text-justify">
                        Hi wir sind wie Würste, die nicht wissen, dass sie
                        Würste sind. Wir machen Musik, weil wir es lieben und
                        weil wir glauben, dass Musik Menschen verbindet und
                        inspiriert. Unser Ziel ist es, eine Gemeinschaft von
                        Musikliebhabern zu schaffen, die sich gegenseitig
                        unterstützen und gemeinsam wachsen.
                    </p>
                </section>

                <section className="text-center items-center flex flex-col gap-4">
                    <h1 className="font-bold">Jüngerschaft</h1>
                    <UserGroupIcon className="w-12 h-12 rounded-full border p-2" />
                    <h2 className="text-2xl font-bold">
                        Wie sieht die Jüngerschaft im Musikteam aus?
                    </h2>
                    <p className="text-justify">
                        Hi wir sind wie Würste, die nicht wissen, dass sie
                        Würste sind. Wir machen Musik, weil wir es lieben und
                        weil wir glauben, dass Musik Menschen verbindet und
                        inspiriert. Unser Ziel ist es, eine Gemeinschaft von
                        Musikliebhabern zu schaffen, die sich gegenseitig
                        unterstützen und gemeinsam wachsen.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default ValuesPage;
