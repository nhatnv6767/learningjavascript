const getNewTodo = async() => {
    let data = fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log('>>>> Data: ',data);
}

console.log(getNewTodo())