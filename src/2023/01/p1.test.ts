import {describe, test, expect} from "vitest";
import * as fs from "fs";
import {p1} from "./p1.ts";

describe("p1", () => {
    test("example", () => {
        let s = fs.readFileSync("src/2023/01/example.txt", "utf8");
        expect(p1(s)).toBe(142);
    });
    test("One line with two digits", () => {
        expect(p1("1abc2")).toBe(12);
        expect(p1("1abc4")).toBe(14);
    })
    test("input", () => {
        let s = fs.readFileSync("src/2023/01/input.txt", "utf8");
        console.log(p1(s))
    });
});