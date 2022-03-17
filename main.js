// Object constructor : Xay dung doi tuong

// -> Object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}
// String, Number, Array, Date, ... chính là những Object constructor
var author = new User('None', 'Bi', 'Avatar');
var user = new User('David', 'Kally', 'Avatar');
// => author va user moi la đối tượng

console.log(author);
console.log(user);