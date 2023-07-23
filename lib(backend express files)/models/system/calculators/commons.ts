export function stripMinus (num: number): number {
    if (num < 0) {
        return num * -1;
    }
    return num;
};
