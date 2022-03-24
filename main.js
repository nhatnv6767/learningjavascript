// Callback 

// Là hàm (function) được truyền qua đối số 
// khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số

function myFunction(param) {
    console.log(typeof param)
}

function myCallback() {

}

myFunction(myCallback)