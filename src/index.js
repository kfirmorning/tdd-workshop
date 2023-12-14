const calculate = (arithmeticStr) => {
    if (arithmeticStr) {
        throw new Error('Parsing error');
    } else {
        throw new Error('Invalid input');
    }
}

module.exports = {
    calculate,
}
