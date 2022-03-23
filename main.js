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

// reduce 

// ví dụ khi ko dùng initialValue

// Lấy ra các khoá học đưa vào 1 mảng mới

var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1, 
                title: "HTML, CSS"
            },
            {
                id: 2, 
                title: "Javascript"
            },
        ]
    },

    {
        topic: "Back-end",
        courses: [
            {
                id: 1, 
                title: "PHP"
            },
            {
                id: 2, 
                title: "NodeJS"
            },
        ]
    }
]


var newCourses = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses)
}, [])

// console.log(newCourses)

var htmls = newCourses.map(function (course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `
})

console.log(htmls.join(''))