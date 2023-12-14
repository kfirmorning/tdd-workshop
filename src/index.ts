const PI = 3.14;

export const calculate = (arithmeticStr: string) => {
    if (arithmeticStr) {
        const parsedArith = arithmeticStr.match(/.*:(.*)#/);
        if (!parsedArith || parsedArith.length < 2) {
            throw new Error('Parsing error');
        }
        const res = Number.parseFloat(parsedArith[1])**2 * PI;
        return res;
    } else {
        throw new Error('Invalid input');
    }
}
