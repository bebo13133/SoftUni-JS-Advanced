function negativePositiveNumbers(data) {
    data.reduce((arr,x) => {arr[x < 0 ? "unshift" : "push"](x)
    return arr},[]).join('\n')
}

negativePositiveNumbers([7, -2, 8, 9])