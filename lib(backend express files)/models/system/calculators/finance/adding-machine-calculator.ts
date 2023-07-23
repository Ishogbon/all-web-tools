interface Entry {
    key: number
    description?: string
    operand: string
    entryValue: number
    subTotal?: number
}
export function addingMachine (entries: Entry[]): number {
    let total = 0;

    entries.forEach(entry => {
        let subTotal;

        switch (entry.operand) {
            case 'default':
            case 'addition(+)':
            case '+':
                subTotal = total + entry.entryValue;
                break;
            case 'subtraction(-)':
            case '-':
                subTotal = total - entry.entryValue;
                break;
            case 'multiplication(x)':
            case 'x':
                subTotal = total * entry.entryValue;
                break;
            case 'division(÷)':
            case '÷':
                subTotal = total / entry.entryValue;
                break;
            default:
                subTotal = total + entry.entryValue;
        }
        entry.subTotal = subTotal;
        total = subTotal;
    });
    return total;
};
