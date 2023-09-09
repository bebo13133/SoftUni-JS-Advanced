function lastKNumbersSequence2(n, k) {
    let newArr = [1]
    for (let i = 0; i < n - 1; i++) {
        let sum = newArr.length < k ? newArr : newArr.slice(newArr.length - k)
        newArr.push(sum.reduce((a, b) => a + b));
    }
    return (newArr)
}
lastKNumbersSequence2(6, 3)

