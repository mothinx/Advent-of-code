import {parseLine} from "./models/line";

export const p2 = (input: string): number => {
    const lines = input.split("\n");
    const lines1 = lines.map(line => parseLine(line));

    return lines1.reduce((accumulator, line) => {
        return accumulator + (line.maxRed * line.maxBlue * line.maxGreen);
    }, 0);
}