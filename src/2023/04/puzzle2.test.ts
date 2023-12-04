import {describe, expect, test} from "vitest";
import {readFile} from "../../lib/file";
import { puzzle2 } from "./puzzle2";

describe("puzzle2", () => {
    test("acceptance", () => {
        const data = readFile("src/2023/04/example.txt");
        expect(puzzle2(data)).toBe(30);
    })

    test("input", () => {
        const data = readFile("src/2023/04/input.txt");
        console.log(puzzle2(data))
    });
});