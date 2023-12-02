export interface Line {
    id: number;
    maxBlue: number;
    maxGreen: number;
    maxRed: number;
}

export const isPossible = (line: Line): boolean => {
    const maxRed = 12;
    const maxGreen = 13;
    const maxBlue = 14;
    return line.maxRed <= maxRed && line.maxGreen <= maxGreen && line.maxBlue <= maxBlue;
}
export const parseLine = (line: string): Line => {
    const id = line.split(":")[0].split(" ")[1];
    let maxRed = 0;
    let maxGreen = 0;
    let maxBlue = 0;
    line.split(":")[1].split(";")
        .forEach(subSets => {
            const s = subSets.trim();
            s.split(",").forEach(a => {
                const s1 = a.trim();
                const color = s1.split(" ")[1];
                const count = s1.split(" ")[0];
                if (color === "red" && Number(count) > maxRed) {
                    maxRed = Number(count);
                }
                if (color === "blue" && Number(count) > maxBlue) {
                    maxBlue = Number(count);
                }
                if (color === "green" && Number(count) > maxGreen) {
                    maxGreen = Number(count);
                }
            });
        })
    return {
        id: Number(id),
        maxRed,
        maxGreen,
        maxBlue
    }
}