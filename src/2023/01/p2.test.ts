import {describe, expect, test} from "vitest";
import * as fs from "fs";
import {p2} from "./p2.ts";

describe("p1", () => {
    test("example", () => {
        let s = fs.readFileSync("src/2023/01/example2.txt", "utf8");
        expect(p2(s)).toBe(281);
    });
    test("input", () => {
        let s = fs.readFileSync("src/2023/01/input.txt", "utf8");
        console.log(p2(s))
    });
});