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


console.log(myInfo.getName);