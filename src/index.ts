const PI = 3.14;

interface ArithmeticConfig {
    type: string;
    params: number[];
}

interface Shape {
    area(): number;
}

class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return this.radius ** 2 * PI;
    }
}

class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

const shapeFactory = (arithmeticStr: string): Shape => {
    const parsedResult = parseArithmetics(arithmeticStr);
    switch (parsedResult.type) {
        case 'C':
            return new Circle(parsedResult.params[0]);
        case 'R':
            return new Rectangle(parsedResult.params[0], parsedResult.params[1]);
        default:
            throw new Error(`Shape ${parsedResult.type} is unknown`);
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

export const calculate = (arithmeticStr: string) => {
    if (arithmeticStr) {
        const shape: Shape = shapeFactory(arithmeticStr);
        return shape.area();
    } else {
        throw new Error('Invalid input');
    }
}
