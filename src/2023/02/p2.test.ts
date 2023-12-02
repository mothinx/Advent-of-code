import {describe, expect, test} from "vitest";
import {p2} from "./p2";
import {readFile} from "../../lib/file";

describe("p2", () => {
    test("acceptance", () => {
        const data = readFile("src/2023/02/example.txt");
        expect(p2(data)).toBe(2286);
    })

    test("input", () => {
        const data = readFile("src/2023/02/input.txt");
        console.log(p2(data))
    });
});