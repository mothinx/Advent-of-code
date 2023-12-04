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


    let totalScratchcards = scratchcards.length;
    const cardsToProceed = [...scratchcards];
    do {
        const scratchcardToProceed = cardsToProceed.shift();
        const number = countMatchingNumbers(scratchcardToProceed);
        if(number > 0) {
            console.log(scratchcardToProceed)
            for(let i = scratchcardToProceed.cardNumber + 1; i < scratchcardToProceed.cardNumber! + number + 1; i ++) {
                const cardWin = scratchcards.find(c => c.cardNumber === i);
                if(cardWin) {
                    totalScratchcards++;
                    cardsToProceed.push(cardWin);
                }
            }
        }

    }
    while (cardsToProceed.length > 0);

    return totalScratchcards;
}
// Example usage
