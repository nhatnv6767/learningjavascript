const getNewTodo = async() => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = response.json();
    console.log('>>>> Data: ',data);
}

console.log(getNewTodo())