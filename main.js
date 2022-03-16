// Array


var languages = [
    'Not',
    'To',
    'Be',
    'Javascript',
    'PHP'
]

languages.splice(1, 1, 'Xoa di va chen vao', 'Chen pt thu 2')// tham số thứ nhất là vị trí con trỏ
// tham số thứ 2 là từ vị trí con trỏ xoá đi mấy phần tử
// trường hợp xoá 0 phần tử nghĩa là chèn, thì có thêm 1 đối số mới 
// là giá trị muốn chèn vào

console.log(languages)