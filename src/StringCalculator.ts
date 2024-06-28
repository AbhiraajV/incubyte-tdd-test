export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    let delimiters = [",","\n"];
    if (numbers.startsWith("//")) {
      const newlineIndex = numbers.indexOf("\n");
      delimiters.push(numbers.substring(2, newlineIndex));
      numbers = numbers.substring(newlineIndex + 1);
    }
    const invalidNumbers:string[] = [];
    const negatives:string[] = [];

    const numbersArray: number[] = this.splitNumbers(numbers, delimiters).map(number =>{ 
        const retNum = parseInt(number)
        if (isNaN(retNum)) invalidNumbers.push(number);
        else if(retNum < 0) negatives.push(number);
        return retNum;
    });


    if (negatives.length) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }
    
    if (invalidNumbers.length) {
      throw new Error(`invalid numbers not allowed: ${invalidNumbers.join(", ")}`);
    }
    return numbersArray.reduce((acc, num) => acc + num, 0);
  }

  private splitNumbers(numbers: string, delimiters: string[]): string[] {
    let result = [numbers];
    for (const delimiter of delimiters) {
      result = result.flatMap((part) => part.split(delimiter));
    }
    return result;
  }
}
