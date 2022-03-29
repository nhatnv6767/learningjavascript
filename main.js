const getNewTodo = async (id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (response && response.status !== 200) {
        throw new Error('Something wrongs with status code: ' + response.status);
    }
    let data = await response.json();
    return data;
}

getNewTodo(4555)
    .then(data => {
        console.log('>>>> check get data: ', data);
    })
    .catch(error => {
        console.log('>>>> error: ', error);
    })