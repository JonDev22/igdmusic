import { Timestamp } from "firebase/firestore";
import type { ISong } from "../../interfaces/ISong";

function PlanningPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            <h1 className="text-center">Gottesdienst Planung</h1>
            {sundays.map((sunday) => (
                <div key={sunday.id}>
                    {sunday.items.map((item) => (
                        <div key={item.id}>{item.title}</div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default PlanningPage;

const sundays: {
    id: string;
    date: Timestamp;
    items: ({ order: number } & (ISong | { id: string; title: string }))[];
}[] = [
    {
        id: "asdkajsdkljaljs",
        date: Timestamp.fromDate(new Date("2024-07-07")),
        items: [
            {
                id: "song1",
                title: "Lied 1",
                order: 1,
            },
            {
                id: "song2",
                title: "Lied 2",
                order: 2,
            },
        ],
    },
];
