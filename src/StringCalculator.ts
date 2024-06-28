export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }
    const numbersArray: number[] = [];
    numbers.split(",").forEach((number) => numbersArray.push(parseInt(number)));

    return numbersArray.reduce((acc, num) => acc + num, 0);
  }
}
