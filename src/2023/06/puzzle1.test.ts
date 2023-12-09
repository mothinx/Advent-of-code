import {describe, expect, test} from "vitest";
import {readFile} from "../../lib/file";
import {puzzle1} from "./puzzle1";

describe("puzzle1", () => {
    test("acceptance", () => {
        const data = readFile("src/2023/06/example.txt");
        expect(puzzle1(data)).toBe(288);
    })

    test("input", () => {
        const data = readFile("src/2023/06/input.txt");
        console.log(puzzle1(data))
    });
});