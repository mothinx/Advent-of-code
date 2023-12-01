function extracted(input: string) {
    let numbers = input.split('').filter(value => !isNaN(Number(value))).map(Number);
    let numbers1 = [numbers[0], numbers[numbers.length - 1]];
    return Number(numbers1.join(''));
}

export const p1 = (input: string): number => {
    const lines = input.split('\n');
    let numbers = lines.map(line => extracted(line));
    return numbers.reduce((a, b) => a + b);
}