import {describe, expect, test} from "vitest";
import {p2} from "./p2.ts";
import {readFile} from "../../lib/file.ts";

describe("p1", () => {
    test("example", () => {
        const data = readFile("src/2023/01/example2.txt");
        expect(p2(data)).toBe(281);
    });
    test("input", () => {
        const data = readFile("src/2023/01/input.txt");
        console.log(p2(data))
    });
});