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

export const puzzle1 = (input: string): number => {
    const almanac = input.split("\n\n");
    const seeds: number[] = almanac.shift()!.split(":")[1].trim().split(" ");
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

    const locations: number[] = [];

    for (let seed of seeds) {
        let newlocation = seed;
        for (let map of maps) {
            let inARange = false;
            let nextLocation = 0;
            for (let range of map.ranges) {
                if(newlocation >= range.sourceRangeEnd && newlocation <= (range.sourceRangeEnd + range.rangeLength)){
                   nextLocation = range.destinationRangeStart + (newlocation - range.sourceRangeEnd) ;
                    inARange = true;
                }
            }
            inARange ? newlocation = nextLocation : newlocation;
        }
        locations.push(newlocation);
    }
    return Math.min(...locations);
}