export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }
    const numbersArray: number[] = [];
    numbers.split(",").forEach((number) => numbersArray.push(parseInt(number)));

    const negatives = numbersArray.filter((num) => num < 0);

    if (negatives.length) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }
    return numbersArray.reduce((acc, num) => acc + num, 0);
  }
}
