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

// map() - sử dụng khi muốn thay đổi, chỉnh sửa element của array
// tạo ra 1 mảng mới có số lượng phần tử bằng với số lượng phần tử mảng cũ

function courseHandler(course) {
    console.log(course);
}

var newCourses = courses.map(courseHandler);

console.log(newCourses); // trên courseHandler function trả về cái gì thì cái map sẽ hứng những
// cái đó