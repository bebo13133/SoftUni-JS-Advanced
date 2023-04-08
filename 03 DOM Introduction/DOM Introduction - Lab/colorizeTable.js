function colorize() {
    let listElement = document.getElementsByTagName("tr")
Array.from(listElement).forEach((x,i) => {
        if (i % 2 !== 0) {
            x.style.backgroundColor = "teal"
        }
    })
}