import type { IValuesContent } from "../../../interfaces/IValuesContent";

export const valueData: IValuesContent[] = [
    {
        id: "mission",
        name: "mission",
        title: "Mission",
        subtitle: "Warum gibt es das Musikteam überhaupt?",
        image: "mission",
        colorSettings: "blue",
        order: 1,
        content: [
            {
                type: "paragraph",
                text: "Schon im Alten Testament wurden Musiker zum Dienst im Tempel angestellt. Sie begleiteten die Anbetung Gottes durch die Priester musikalisch und stimmten Israel in Lob Gottes ein.",
            },
            {
                type: "paragraph",
                text: "Im Neuen Testament sind wir dazu angehalten, uns mit Liedern gegenseitig zu ermutigen und uns zuzusingen. Als Musikdienst haben wir die Aufgabe, die Gemeinde zum Lob und zur Anbetung Gottes durch Lieder einzustimmen.",
            },
        ],
    },
    {
        id: "values",
        name: "values",
        title: "Werte",
        subtitle: "Welche Werte vertreten wir?",
        image: "values",
        colorSettings: "rose",
        order: 2,
        content: [
            {
                type: "list",
                items: [
                    {
                        list: [
                            "Wie in jedem Dienst, verfolgen wir ebenfalls das Ziel, in unserer Jüngerschaft zu wachsen. Dabei dienen wir Gott und suchen ihn besser kennenzulernen, ihm zu folgen und in seiner Mission und seinem Plan mitteilzunehmen.",
                        ],
                    },
                    {
                        list: [
                            "Die Ältesten, die dem treuen Ruf eines Aufsehers über die Gemeinde Gottes folgen, nehmen zudem eine übersehende Rolle im Musikdienst ein. Wie in jedem Dienst ordnen sich die Mitglieder in der Gemeinde den Ältesten unter. Dazu gehört, dass sie sich in Liebe unterordnen, wenn ein Dienstleiter gewählt wird.",
                        ],
                    },
                    {
                        list: [
                            "Wir wollen eine ehrliche und liebevolle Atmosphäre schaffen, in der jeder sich wohlfühlt und sich entfalten kann. Dazu gehört, dass wir uns gegenseitig ermutigen, konstruktives Feedback geben und annehmen sowie offen",
                        ],
                    },
                    {
                        list: [
                            "Älteste und Dienstleiter suchen demnach, die Mitglieder stets in ihrer Jüngerschaft auszurüsten und nehmen sich das Wachsen jedes einzelnen zu Herzen in ihrem Lauf mit dem Herrn Jesus Christus.",
                        ],
                    },
                    {
                        list: [
                            "Um im Alten Testament den Dienst am Tempel treu erfüllen zu können, wurden spezielle Musiker aus dem Volk ausgewählt, die die Instrumente beherrschten und das Volk im Gesang anleiten konnten. Gottes Wort nutzt dazu das Wort „talentiert“.",
                            "Da im Neuen Testament keine spezifische Angabe zum Dienst eines Musikers in der Gemeinde vorgebracht wird, können wir nichts mehr erwarten. Demnach setzt der Dienst keine Perfektion voraus, weder beim Spielen eines Instruments noch beim Singen. Allerdings wollen wir auch eine treue und Gottgefällige Gemeinde sein, die ehrlich miteinander umgehen kann. Während jeder angehalten ist zu singen, ist nicht jeder dazu angehalten, dem Musikdienst beizutreten. Um eine ehrliche und liebende Atmosphäre zu schaffen, geben wir liebende und ehrliche Rückmeldungen. Sollte demnach jemand nicht im Musikdienst aufgenommen werden, weil zu diesem Zeitpunkt die notwendige Qualifikation einer hinreichenden Fähigkeit des Spielens eines Instruments oder des Singens nicht vorhanden ist, so ist dies niemals aus eigenem Interesse, sondern aus Liebe zu dieser Person, aber auch mit Blick auf das Wohl der Gemeinde zu sehen.",
                        ],
                    },
                ],
            },
        ],
    },
] as const;
