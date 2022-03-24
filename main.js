// Callback 

// Là hàm (function) được truyền qua đối số 
// khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)


var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

courses.map(function(course){
    console.log(course);
})
