// Array

/**
 * Array methods
 * forEach()
 * every()
 * some()
 * find()
 * filter()
 * map()
 * reduce()
 * 
 */

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 10
    },
];

// reduce -- khi muốn nhận về 1 giá trị duy nhất sau khi tính toán xử lý trên các phần tử 
// của array

// Biến lưu trữ
// Thực hiện việc lưu trữ
// accumulator: Biến lưu trữ

var i = 0; // kiểm tra xem reduce có gọi lại coinHandler ko
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;
    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumulator
    })
}

// có 2 đối số
var totalCoin = courses.reduce(coinHandler, 0);