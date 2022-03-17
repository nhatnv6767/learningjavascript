// Object constructor : Xay dung doi tuong

// -> Object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar; // => this ở đây để mô tả thuộc tính và phương thức sẽ có 
    // cho đối tượng khi khởi tạo từ Object Constructor (User)

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`// => this ở đây là this của getName
    }
}
// String, Number, Array, Date, ... chính là những Object constructor
var author = new User('None', 'Bi', 'Avatar');
var user = new User('David', 'Kally', 'Avatar');
// => author va user moi la đối tượng

author.title = 'Chia sẻ dạo tại FF'
user.comment = 'Cho vay 5 chiệu'

console.log(author.getName());
console.log(user.getName());