function lastKNumbersSequence2(n, k) {
    let newArrr = [1]
    for (let i = 0; i < n - 1; i++) {
        let sum = newArrr.length < k ? newArrr : newArrr.slice(newArrr.length - k)
        newArrr.push(sum.reduce((a, b) => a + b));
    }
    return (newArrr)
}
lastKNumbersSequence2(6, 3)

