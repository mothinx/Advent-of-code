import {describe, expect, test} from "vitest";
import {readFile} from "../../lib/file";
import {puzzle1} from "./puzzle1";

describe("puzzle1", () => {
    test("acceptance", () => {
        const data = readFile("src/2023/04/example.txt");
        expect(puzzle1(data)).toBe(13);
    })

    test("input", () => {
        const data = readFile("src/2023/04/input.txt");
        console.log(puzzle1(data))
    });
});