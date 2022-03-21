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

// some() chỉ cần 1 ông trong mảng thoả mãn điều kiện thì trả về
// dừng việc kiểm tra lại khi gặp kết quả đúng

var isFree = courses.some(function (course, index) {
    return course.coin === 0;
});

console.log(isFree);