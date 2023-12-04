export const puzzle1 = (input: string): number => {
    let points = 0;
    const cards = input.split("\n")
        .forEach((card, cardNumber) => {
            const [winningNumbersString, myNumbersString]= card.split(": ")[1].split("|");
            const winningNumbers = winningNumbersString.trim().split(" ").filter(n => n !== "");
            const myNumbers = myNumbersString.trim().split(" ").filter(n => n !== "");
            const setWinningNumbers = new Set(winningNumbers);
            const setMyNumbers = new Set(myNumbers);
            const winningNumbersMatched = winningNumbers.filter(n => setMyNumbers.has(n));
            const points1 = winningNumbersMatched.length === 1 ? 1 : Math.pow(2, winningNumbersMatched.length - 1);
            points += points1 >= 1 ? points1 : 0;
        })
    ;

    return points;
}