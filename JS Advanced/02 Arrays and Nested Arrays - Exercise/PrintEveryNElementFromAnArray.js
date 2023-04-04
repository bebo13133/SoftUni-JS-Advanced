function printEveryNElement(arr, index) {
    return arr.filter((x, i) => i % index == 0)
}