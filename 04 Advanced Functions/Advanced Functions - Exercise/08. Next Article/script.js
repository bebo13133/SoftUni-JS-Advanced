function getArticleGenerator(articles) {
    const output = document.getElementById("content")
    const copyArt = articles.slice()
    return function showNext() {
        if (copyArt[0] !== undefined) { // copyArt.length != 0 -също върши работа 
            const article = document.createElement('article')
            article.textContent = copyArt.shift()
            output.appendChild(article);
        }
        // return showNext;
    }
}
