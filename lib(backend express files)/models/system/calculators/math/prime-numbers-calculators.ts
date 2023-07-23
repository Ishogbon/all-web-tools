export function isPrime (n: number): boolean {
    if (n <= 1) {
        return false;
    }

    if (n <= 3) {
        return true;
    }

    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

// You might want to rewrite this function into a C program for better speed. I advise you do it in the future for optimization
export function generatePrimeNumbers (start: number, end: number): number[] {
    // Create an array to track prime numbers
    const primes: number[] = [];

    // Create a boolean array "isPrime[0..end]" and initialize all entries as true
    const isPrime: boolean[] = new Array<boolean>(end + 1).fill(true);

    // Mark numbers 0 and 1 as non-prime
    isPrime[0] = false;
    isPrime[1] = false;

    // Use Sieve of Eratosthenes algorithm to find primes
    for (let p = 2; p * p <= end; p++) {
        // If isPrime[p] is not changed, then it is a prime
        if (isPrime[p]) {
        // Update all multiples of p as non-prime
            for (let i = p * p; i <= end; i += p) {
                isPrime[i] = false;
            }
        }
    }

    // Collect prime numbers within the specified range
    for (let i = start; i <= end; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

export function findPreviousPrimeNumber (num: number): number | string {
    if (num <= 1) {
        return 'no prime'; // There is no prime number less than or equal to 1
    }

    for (let i = num - 1; i >= 2; i--) {
        if (isPrime(i)) {
            return i;
        }
    }

    return 'no prime'; // No prime number found
}

export function findNextPrimeNumber (num: number): number {
    let nextNum = num + 1;

    while (!isPrime(nextNum)) {
        nextNum++;
    }

    return nextNum;
}
