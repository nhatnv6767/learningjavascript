// Object constructor : Xay dung doi tuong

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}
// String, Number, Array, Date, ... chính là những Object constructor
var author = new User('None', 'Bi', 'Avatar');
var user = new User('David', 'Kally', 'Avatar');

console.log(author);
console.log(user);