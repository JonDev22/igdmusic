export type ValueContentItem =
    | { type: "paragraph"; text: string }
    | { type: "list"; items: { list: string[] }[] };

export interface IValuesContent {
    id: string;
    image: string;
    colorSettings: string;
    title: string;
    subtitle: string;
    order: number;
    content: ValueContentItem[];
}
