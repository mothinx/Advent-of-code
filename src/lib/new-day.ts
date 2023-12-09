import { existsSync, mkdirSync, writeFileSync } from 'fs';

/**
 * Creates the boilerplate code for a new puzzle
 * Usage: npm run init-day {dayNumber} i.e npm run 1
 * It will create a new folder under src/days/{dayNumber}
 * with the boilerplate code to build the solution, and an empty input .txt file.
 */

const formatDay = (day: number | string) =>
    day.toString().padStart(2, '0');

const year = 2023;
const args = process.argv.slice(2);
const day = formatDay(args[0]);
if (!day) {
    console.log('Please run with the day to bootstrap, i.e. npm run init-day 1');
}
console.log(`creating template for day ${day}`);
const basePath = `src/${year}`;

if (existsSync(`src/${year}/${day}`)) {
    console.log(`day ${day} already exists`);
    process.exit(0);
}
const newDayPath = `${basePath}/${day}`;
mkdirSync(newDayPath);
writeFileSync(`${newDayPath}/puzzle1.ts`, `export const puzzle1 = (input: string): number => {
    return 0;
}`);
writeFileSync(`${newDayPath}/puzzle2.ts`, `export const puzzle2 = (input: string): number => {
    return 0;
}`);
writeFileSync(`${newDayPath}/puzzle1.test.ts`, `import {describe, expect, test} from "vitest";
import {readFile} from "../../lib/file";
import {puzzle1} from "./puzzle1";
    
    describe("puzzle1", () => {
    test("acceptance", () => {
        const data = readFile("src/2023/${day}/example.txt");
        expect(puzzle1(data)).toBe(0);
    })

    test("input", () => {
        const data = readFile("src/2023/${day}/input.txt");
        console.log(puzzle1(data))
    });
});`);
writeFileSync(`${newDayPath}/puzzle2.test.ts`, `import {describe, expect, test} from "vitest";
import {readFile} from "../../lib/file";
import {puzzle2} from "./puzzle2";
    
    describe("puzzle2", () => {
    test("acceptance", () => {
        const data = readFile("src/2023/${day}/example.txt");
        expect(puzzle2(data)).toBe(0);
    })

    test("input", () => {
        const data = readFile("src/2023/${day}/input.txt");
        console.log(puzzle2(data))
    });
});`);
writeFileSync(`${newDayPath}/input.txt`, ``);
writeFileSync(`${newDayPath}/example.txt`, ``);
