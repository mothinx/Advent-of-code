interface Map {
    sourceCategory: string;
    destinationCategory: string;
    ranges: Range[];
}

interface Range {
    destinationRangeStart: number;
    sourceRangeEnd: number;
    rangeLength: number;
}
function generateSeedNumbers(seedRanges: number[]): number[] {
    const seedNumbers: number[] = [];

    for (let i = 0; i < seedRanges.length; i += 2) {
        const startSeed = seedRanges[i];
        const numSeeds = seedRanges[i + 1];
        const endSeed = startSeed + numSeeds;

        for (let seed = startSeed; seed < endSeed; seed++) {
            seedNumbers.push(seed);
        }
    }

    return seedNumbers;
}
export const puzzle2 = (input: string): number => {
    const almanac = input.split("\n\n");
    const seeds: number[] = almanac.shift()!.split(":")[1].trim().split(" ").map((seed) => parseInt(seed));
    const maps: Map[] = almanac.map((map) => {
        let [label, numbers] = map.split(":");
        const [sourceCategory, _, destinationCategory] = label.split(" ")[0].split("-");
        const ranges = numbers.trim().split("\n").map((range) => {
            const [start, end, length] = range.split(" ");
            return {
                destinationRangeStart: parseInt(start),
                sourceRangeEnd: parseInt(end),
                rangeLength: parseInt(length)
            }
        })
        {
            return {
                sourceCategory: sourceCategory,
                destinationCategory: destinationCategory,
                ranges: ranges
            }
        }

    });

    let lowestLocation: number = Number.MAX_VALUE;


    for (let i = 0; i < seeds.length; i += 2) {
        const startSeed = seeds[i];
        const numSeeds = seeds[i + 1];
        const endSeed = startSeed + numSeeds;

        for (let seed = startSeed; seed < endSeed; seed++) {
            let newlocation = seed;
            for (let map of maps) {
                let inARange = false;
                let nextLocation = 0;
                for (let range of map.ranges) {
                    if(newlocation >= range.sourceRangeEnd && newlocation <= (range.sourceRangeEnd + range.rangeLength)){
                        nextLocation = range.destinationRangeStart + (newlocation - range.sourceRangeEnd) ;
                        inARange = true;
                        break;
                    }
                }
                inARange ? newlocation = nextLocation : newlocation;
            }
            lowestLocation = Math.min(lowestLocation, newlocation);
        }
    }
    return lowestLocation;
}
// Example usage
