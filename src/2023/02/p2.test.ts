import {describe, expect, test} from "vitest";
import * as fs from "fs";
import {p2} from "./p2";

describe("p2", () => {
    test("acceptance", () => {
        let readFileSync = fs.readFileSync("src/2023/02/example.txt", "utf8");
        expect(p2(readFileSync)).toBe(2286);
    })

    test("input", () => {
        let readFileSync = fs.readFileSync("src/2023/02/input.txt", "utf8");
        console.log(p2(readFileSync))
    });

});