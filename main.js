const getNewTodo = async(id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    let data = await response.json();
    return data;
}

getNewTodo(4).then(data => {
    console.log('>>>> check get data: ', data);
})