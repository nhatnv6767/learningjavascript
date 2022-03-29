const callback = (error, data) => {
    if (error) {
        console.log('>>> calling callback with error: ', error)
    }
    if (data) {
        console.log('>>> calling callback with data: ', data)
    }
}

function getTodos(callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            const dataString = JSON.stringify(data);
            callback(undefined, dataString);
        }

        if (this.readyState === 4 && request.status !== 200) {
            callback('Something wrongs', undefined);
        }
    }

    request.open('GET','https://jsonplaceholder.typicode.com/todos', true);
    request.send();
}

getTodos(callback)