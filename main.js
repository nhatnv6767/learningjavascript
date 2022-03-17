// Object prototype: nguyên mẫu để tạo lên đối tượng


// -> Object constructor: Bản thiết kế ngôi nhà
// => Object prototype: nguyên liệu để tạo nên ngôi nhà

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar; 

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`// => this ở đây là this của getName
    }
}

User.prototype.className = 'FF'
User.prototype.getClassName = function() {
    return this.className;
}

var user = new User('Bi', 'None', 'Avatar 1')
var user2 = new User('Nguyen', 'Vu', 'Avatar 2')

console.log(user.className) // => undefined
console.log(user2.getClassName())
