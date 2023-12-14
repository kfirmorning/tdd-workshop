const PI = 3.14;

interface ArithmeticConfig {
    type: string;
    params: number[];
}

export const calculate = (arithmeticStr: string) => {
    if (arithmeticStr) {
        const parsedResult = parseArithmetics(arithmeticStr);
        switch (parsedResult.type) {
            case 'C':
                return parsedResult.params[0] ** 2 * PI;
                break;
            case 'R':
                return parsedResult.params[0] * parsedResult.params[1];
                break;
            // default:
            //     Do not include here the next requirement yet since you don't have test for it!!!
        }
        const res = parsedResult.params[0] ** 2 * PI;
        return res;
    } else {
        throw new Error('Invalid input');
    }
}

const parseArithmetics = (arithmeticStr: string): ArithmeticConfig => {
    const parseResult: RegExpMatchArray | null = arithmeticStr.match(/(.*):(.*)#/);
    if (!parseResult || parseResult.length < 3) {
        throw new Error('Parsing error');
    }

    const params = parseResult[2].split(',').map((p) => Number.parseFloat(p));
    return {
        type: parseResult[1],
        params,
    }
}