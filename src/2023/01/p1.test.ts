import {describe, expect, test} from "vitest";
import {p1} from "./p1.ts";
import {readFile} from "../../lib/file.ts";

describe("p1", () => {
    test("example", () => {
        const data = readFile("src/2023/01/example.txt");
        expect(p1(data)).toBe(142);
    });
    test("One line with two digits", () => {
        expect(p1("1abc2")).toBe(12);
        expect(p1("1abc4")).toBe(14);
    })
    test("input", () => {
        const data = readFile("src/2023/01/input.txt");
        console.log(p1(data))
    });
});