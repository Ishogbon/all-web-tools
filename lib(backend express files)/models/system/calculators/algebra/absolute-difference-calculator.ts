import { stripMinus } from '../commons';

export function absoluteDifferenceCalculator (x: number, y: number): number {
    return stripMinus(x - y);
};
