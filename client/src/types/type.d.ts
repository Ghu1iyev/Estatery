declare module '*.svg';
declare module '*.jpg';


export type HomeProps = {
    name: "string",
    image: "string",
    price: "string",
    bed: "number",
    bathroom: "number",
    dimenson: "string",
    address: "string",
    status: "ACTIVE" | "ARCHIVE" | "MAINTENANCE",
    categories: string[];
}