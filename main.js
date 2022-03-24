// Callback 

// Là hàm (function) được truyền qua đối số 
// khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)

Array.prototype.map2 = function () {
    console.log(this)
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

courses.map2();


// var htmls = courses.map(function (course) {
//     return `<h2>${course}</h2>`
// })

// console.log(htmls.join(''))
