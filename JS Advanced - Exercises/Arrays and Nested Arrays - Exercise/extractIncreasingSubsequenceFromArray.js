function extractIncreasingSubset(input) {
    return input.reduce((acc, el, i,arr) => { if (arr[i-1] <= el|| i==0)  acc.push(el)
        return acc
    }, [])
}