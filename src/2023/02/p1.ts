import {isPossible, parseLine} from "./models/line";

export const p1 = (input: string): number => {
    const rawGamesInputs = input.split("\n");
    const lines = rawGamesInputs.map(line => parseLine(line));

    return lines.reduce((accumulator, line) => {
        return isPossible(line) ? accumulator + line.id : accumulator;
    }, 0)
}