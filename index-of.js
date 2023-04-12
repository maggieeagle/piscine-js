function indexOf(arr, value, index) {
    for(let i = (index == null ? 0 : index); i < arr.length; i++) {
        if (arr[i] == value) return i 
    }
    return -1
}

function lastIndexOf(arr, value, index) {
    let res = indexOf(arr.reverse(), value, index)
    return res === -1 ? -1 : arr.length - res - 1
}

function includes(arr, value) {
    return indexOf(arr, value) === -1 ? false : true
}