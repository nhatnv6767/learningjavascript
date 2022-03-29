const getNewTodo = async (id) => {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (response && response.status !== 200) {
            throw new Error('Something wrongs with status code: ' + response.status);
        }
        let data = await response.json();
        return data;
    } catch (e) {
        console.log(">>> Check catch error: " + e.message)
    }
}

getNewTodo(4555)
    .then(data => {
        console.log('>>>> check get data: ', data);
    })
    .catch(error => {
        console.log('>>>> error: ', error.message);
    })