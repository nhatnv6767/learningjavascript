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
];

// every - Tất cả các phần tử của mảng phải thoả mãn 1 điều kiện gì đó
// -> Boolean  // chỉ cần 1 phần tử trong mảng ko thoả mãn điều kiện sẽ ngừng xét những 
// phần tử còn lại

var isFree = courses.every(function (course, index) {
    return course.coin === 0;
});

console.log(isFree);