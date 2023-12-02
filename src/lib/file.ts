import * as fs from "fs";

export function readFile(fileName: string): string {
    return fs.readFileSync(fileName, "utf8");
}