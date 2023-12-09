
export const puzzle2 = (input: string): number => {
   const yo = input.split("\n");

   let [timesAllowed, bestDistances]= yo.map((line) => {
      const matches = line.match(/\d+/g);

      if (matches) {
         return matches.map((match) => parseInt(match));
      }
   });

   console.log(timesAllowed!.join(""))
   console.log(bestDistances!.join(""))
      return  calculateForARace(parseInt(timesAllowed!.join("")), parseInt(bestDistances!.join("")));

   function calculateForARace(timesAllowed: number, bestDistance: number): number {
      let numberOfWaysPossibleToBeatRecord = 0;

      for(let i = 0; i <= timesAllowed; i++) {
         if(isBeatRecord(i, bestDistance, timesAllowed)) {
            numberOfWaysPossibleToBeatRecord++;
         }
      }
      return numberOfWaysPossibleToBeatRecord;
   }

   function isBeatRecord(timeHolding: number, bestDistance: number, timesAllowed: number): boolean {
      const distance = calculateDistance(timeHolding, timesAllowed);
      return distance > bestDistance;
   }

   function calculateDistance(timeHolding: number, timesAllowed: number): number {

      // Speed increase per millisecond
      const speedIncrease = 1;

      // speed
      const speed = timeHolding * speedIncrease;

      const distance = speed * (timesAllowed - timeHolding);


      return distance;
   }
}
// Example usage
