import {describe, expect, test} from "vitest";
import {readFile} from "../../lib/file";
import { puzzle2 } from "./puzzle2";

describe("puzzle2", () => {
    test("acceptance", () => {
        const data = readFile("src/2023/06/example.txt");
        expect(puzzle2(data)).toBe(71503);
    })

    test("input", () => {
        const data = readFile("src/2023/06/input.txt");
        console.log(puzzle2(data))
    });
});