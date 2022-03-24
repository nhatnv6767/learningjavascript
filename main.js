// Callback 

// Là hàm (function) được truyền qua đối số 
// khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số

function myFunction(param) {
    param('Test callback')
}

function myCallback(value) {
    console.log('Value: ', value);
}

myFunction(myCallback)