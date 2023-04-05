function jansNotation(data) {
    let nums = []
for (const element of data) {
    let operation = {
        "+": (a, b) => b + a,
        "-": (a, b) => b - a,
        "/": (a, b) => b / a,
        "*": (a, b) => b * a
    }
    if (typeof element === "number") {
        nums.push(element)
    } else {
        if (nums.length < 2) { return ("Error: not enough operands!") }
        nums.push(operation[element](nums.pop(), nums.pop()))
    }
}
if (nums.length != 1) {
    return ("Error: too many operands!")
}
return (nums[0])
}