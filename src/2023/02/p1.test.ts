import {describe, expect, test} from "vitest";
import {p1} from "./p1";
import { readFile } from "../../lib/file";

describe("p1", () => {
    test("acceptance", () => {
        const data = readFile("src/2023/02/example.txt");
        expect(p1(data)).toBe(8);
    })

    test("input", () => {
        const data = readFile("src/2023/02/input.txt");
        console.log(p1(data))
    });
});