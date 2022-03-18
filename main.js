// do/while loop


var i = 0;
var isSuccess = false;

do {
    i++;

    console.log('Nạp thẻ lần ' + i)

    // Thất bại
    if (false) {
        isSuccess = true;
    }
} while (!isSuccess && i <= 3) ;