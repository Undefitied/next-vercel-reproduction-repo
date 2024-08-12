import fs from "fs";
import path from "path";

/** Add your relevant code here for the issue to reproduce */
export default async function Page({ params: { slug } }) {
    async function getData() {
        return fs.readFileSync(path.join(process.cwd(), 'public', `./${slug}.txt`), 'utf-8')
    }

    const greeting = await getData()
    return greeting;
}
