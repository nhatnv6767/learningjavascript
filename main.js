// Callback 

// Là hàm (function) được truyền qua đối số 
// khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)

Array.prototype.map2 = function (callback) {
    var arrayLength = this.length
    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i], i)
        console.log('result: ', result)
    }
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

courses.map2(function (course, index) {
    return `<h2>${course}</h2>`;
});


// var htmls = courses.map(function (course) {
//     return `<h2>${course}</h2>`
// })

// console.log(htmls.join(''))
