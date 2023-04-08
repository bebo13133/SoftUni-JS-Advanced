function extract(content) {
    let extratcElement = document.getElementById(content).textContent
    let path = /\((.+?)\)/g
    let matches = extratcElement.matchAll(path)
    let result = []
    for (let match of matches) {
        result.push(match[1])
    };
    return result.join("; ")
}

// function extract(content) {
//     const text = document.getElementById(content).textContent;
//     const pattern = new RegExp('\\((.+?)\\)', 'g');

//     let matches = pattern.exec(text);
//     let result = [];

//     while (matches !== null) {
//         result.push(matches[1]);
//         matches = pattern.exec(text);
//     }

//     return result.join('; ');
// }