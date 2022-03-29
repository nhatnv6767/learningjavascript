const getNewTodo = async() => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();
    return data;
}

getNewTodo().then(data => {
    console.log('>>>> check get data: ', data);
})