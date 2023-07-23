// Calculates Greatest Common Factor aka Greatest Common Divisor
export function gcf (numbers: number[]): number {
    const gcd2 = (a: number, b: number): number => (b === 0 ? a : gcd2(b, a % b));
    const gcdN = (arr: number[]): number => arr.reduce((a, b) => gcd2(a, b));
    return gcdN(numbers);
}
