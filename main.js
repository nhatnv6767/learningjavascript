/// ... Destructuring assignment ...
let arr1 = [1, 2, 3, 4, 5]
let state = {
    name: 'None',
    address: 'Nhat Ban',
    channel: 'JapanJAV'
}

console.log('>>> Check data arr1: ', arr1)

let { name, address, channel } = state;

console.log('>>> Check key: ', name, address, channel)