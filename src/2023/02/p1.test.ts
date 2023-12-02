import {describe, expect, test} from "vitest";
import * as fs from "fs";
import {p1} from "./p1";

describe("p1", () => {
    test("acceptance", () => {
        let readFileSync = fs.readFileSync("src/2023/02/example.txt", "utf8");
        expect(p1(readFileSync)).toBe(8);
    })

    test("input", () => {
        let readFileSync = fs.readFileSync("src/2023/02/input.txt", "utf8");
        console.log(p1(readFileSync))
    });
});