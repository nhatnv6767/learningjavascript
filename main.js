const promiseExp = () => {
    return new Promise((resolve, reject) => {
        resolve('get some data')
    })
}

promiseExp().then(data => {
    console.log(data)
})