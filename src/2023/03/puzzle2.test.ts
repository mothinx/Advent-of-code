import {describe, expect, test} from "vitest";
import {readFile} from "../../lib/file";
import { puzzle2 } from "./puzzle2";

describe("puzzle1", () => {
    test("acceptance", () => {
        const data = readFile("src/2023/03/example.txt");
        expect(puzzle2(data)).toBe(467835);
    })

    test("input", () => {
        const data = readFile("src/2023/03/input.txt");
        console.log(puzzle2(data))
    });
});