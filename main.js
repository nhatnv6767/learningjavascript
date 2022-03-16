// Object

var emailKey = 'email';

var myInfo = {
    name: 'Bi None',
    age: 18,
    address: 'Ha Noi, Viet Nam',
    [emailKey]: 'abc@gmail.com',
    getName: function() {
        return this.name; // this - > myInfo
    }
};

// key của object trong trường hợp là 1 function thì đc gọi là phương thức (method)
// Other -> gọi là thuộc tính - property

console.log(myInfo.getName());