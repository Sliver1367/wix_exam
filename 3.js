function decodeString(s) {
    let stack = [];
    let currentString = '';
    let currentNum = 0;

    for(let char of s) {
        if (!isNaN(char)) {
            currentNum = currentNum * 10 + Number(char);
        } else if (char === '[') {
            // Сохраняем текущее состояние и сбрасываем переменные
            stack.push([currentString, currentNum]);
            currentString = '';
            currentNum = 0;
        } else if (char === ']') {
            // Извлекаем предыдущее состояние из стека
            let [prevString, repeatNum] = stack.pop();
            currentString = prevString + currentString.repeat(repeatNum);
            

        } else {
            // Если это буква, добавляем к текущей строке
            currentString += char;
        }
    }

    return currentString;
}

// Пример использования:
console.log(decodeString("2[ab]"));    // "abab"
console.log(decodeString("2[a2[b]]")); // "abbabb"
console.log(decodeString("23[b]"));    // "abab"
console.log(decodeString("2[3[ab]]"));    // "abab"
