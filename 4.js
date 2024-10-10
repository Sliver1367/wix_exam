function findWordsInMatrix(matrix, dictionary) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let foundWords = {};  // Здесь будем хранить количество нахождений каждого слова

    // Возможные направления движения: вверх, вниз, влево, вправо
    let directions = [
        [-1, 0], // вверх
        [1, 0],  // вниз
        [0, -1], // влево
        [0, 1]   // вправо
    ];

    // Функция для поиска слова, начиная с координат (x, y)
    function searchWord(x, y, word, index, visited) {
        // Если нашли все буквы слова
        if (index === word.length) return true;
        // Если вышли за границы или уже были в этой клетке, или буква не совпадает
        if (x < 0 || x >= rows || y < 0 || y >= cols || visited[x][y] || matrix[x][y] !== word[index]) return false;

        // Помечаем текущую клетку как использованную
        visited[x][y] = true;

        let found = false;
        // Ищем дальше во всех возможных направлениях
        for (let [dx, dy] of directions) {
            if (searchWord(x + dx, y + dy, word, index + 1, visited)) {
                found = true;
            }
        }

        // Снимаем пометку после завершения поиска
        visited[x][y] = false;

        return found;
    }

    // Для каждого слова из словаря ищем его в матрице
    for (let word of dictionary) {
        let localFoundCount = 0;  // Для каждого слова отслеживаем количество вхождений
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                // Создаем новую матрицу посещенных клеток для каждого поиска слова
                let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
                if (searchWord(i, j, word, 0, visited)) {
                    localFoundCount++;  // Увеличиваем счетчик для каждого найденного вхождения слова
                }
            }
        }
        // Сохраняем количество вхождений для каждого слова
        foundWords[word] = localFoundCount;
    }

    // Выводим список найденных слов и их количество
    console.log("Found words:", foundWords);

    // Считаем произведение всех найденных слов, а затем их сумму
    let product = Object.values(foundWords).reduce((acc, count) => acc * count, 1);
    let sum = Object.values(foundWords).reduce((acc, count) => acc + count, 0);

    console.log("Product of counts:", product);
    console.log("Sum of counts:", sum);

    return foundWords;
}

// Пример использования
let matrix = [
    ['A', 'N', 'T'],
    ['N', 'D', 'T'],
    ['Y', 'G', 'A']
];
let dictionary = ["ANT", "ANY", "AND"];
let found = findWordsInMatrix(matrix, dictionary);

// Выведет все найденные слова и их количество


//P.S код работает не корректо
// Found words: { ANT: 1, ANY: 1, AND: 1 }
// Product of counts: 1
// Sum of counts: 3
// вот результат 
// но слово and должно найтись дважды
