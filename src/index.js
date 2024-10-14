module.exports = function toReadable(number) {
    const numX = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const numXX = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const numX0 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) return numX[0];
    let text = "";
    if (Math.floor(number / 100) > 0) {
        text += numX[Math.floor(number / 100)] + " hundred";
        number %= 100;
        if (number > 0) text += " ";
    }

    if (number >= 10 && number <= 19) {
        text += numXX[number - 10];
    } else if (number >= 20) {
        text += numX0[Math.floor(number / 10)];
        if (number % 10 > 0) text += " " + numX[number % 10];
    } else if (number > 0) {
        text += numX[number];
    }

    return text;
};
