function extracted(input: string) {
    let numbers = input.split('')
        .map((c,i) => {
            const nxt = input.slice(i)
            if (nxt.startsWith('one')) return 1
            if (nxt.startsWith('two')) return 2
            if (nxt.startsWith('three')) return 3
            if (nxt.startsWith('four')) return 4
            if (nxt.startsWith('five')) return 5
            if (nxt.startsWith('six')) return 6
            if (nxt.startsWith('seven')) return 7
            if (nxt.startsWith('eight')) return 8
            if (nxt.startsWith('nine')) return 9
            return parseInt(c)
        })
        .filter(value => !isNaN(Number(value))).map(Number);
    let numbers1 = [numbers[0], numbers[numbers.length - 1]];
    return Number(numbers1.join(''));
}

export const p2= (input: string): number => {
    const lines = input.split('\n');
    let numbers = lines.map(line => extracted(line));
    return numbers.reduce((a, b) => a + b);
}