function rotateArray(arr, num) {
    for (let index = 0; index < num; index++) {
        arr.unshift(arr.pop())
    }
    console.log(arr.join(" "))
}