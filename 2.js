function intToRoman(num) {
    const romanNumerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    let result = '';

    for (const [roman, value] of romanNumerals) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }
    return result;
}

console.log(intToRoman(3749));  // "MMMDCCXLIX"
console.log(intToRoman(58));
///Основные правила:
// Символы могут добавляться друг за другом для представления числа: например, 3 = "III" (три раза "I").
// Символы могут использоваться для вычитания: если меньший символ стоит перед большим, то он вычитается: например, 4 = "IV" (5 - 1), 9 = "IX" (10 - 1).
// Можно добавлять не более трех одинаковых символов подряд для римских чисел, например, 30 = "XXX", но 40 = "XL", а не "XXXX". 