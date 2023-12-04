export const puzzle2 = (input: string): number => {
    const scratchcards: Scratchcard[] = [];
    const cards = input.split("\n")
        .forEach((card, cardNumber) => {
            const [winningNumbersString, myNumbersString]= card.split(": ")[1].split("|");
            const winningNumbers = winningNumbersString.trim().split(" ").filter(n => n !== "");
            const myNumbers = myNumbersString.trim().split(" ").filter(n => n !== "");
            const setWinningNumbers = new Set(winningNumbers.map(n => parseInt(n)));
            const setMyNumbers = new Set(myNumbers.map(n => parseInt(n)));
            scratchcards.push({ cardNumber: cardNumber + 1, winningNumbers: setWinningNumbers, yourNumbers: setMyNumbers });
        })
    ;
    return processScratchcards(scratchcards);
}
type Scratchcard = {
    cardNumber: number;
    winningNumbers: Set<number>;
    yourNumbers: Set<number>;
};

function processScratchcards(scratchcards: Scratchcard[]): number {

    function countMatchingNumbers(card: Scratchcard): number {
        return Array.from(card.yourNumbers).filter((num) => card.winningNumbers.has(num)).length;
    }


    let totalScratchcards: Map<number, number> = new Map();
    scratchcards.forEach((card) => {
        totalScratchcards.set(card.cardNumber, 1);
    });
    scratchcards.forEach((card) => {
        const matchingNumbers = countMatchingNumbers(card);
        for(let i = card.cardNumber + 1; i <= card.cardNumber + matchingNumbers; i++) {
            totalScratchcards.set(i, (totalScratchcards.get(i) || 0) + (1 * totalScratchcards.get(card.cardNumber)!));
        }
    });
    return Array.from(totalScratchcards.values()).reduce((a, b) => a + b, 0);
}
// Example usage
