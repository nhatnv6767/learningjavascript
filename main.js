const promiseExp = () => {
    return new Promise((resolve, reject) => {
        // resolve('get some data')
        reject('get something wrongs')
    })
}

promiseExp().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})