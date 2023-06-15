class ArtGallery {
    constructor(creator) {
        this.creator = creator
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 }
        this.listOfArticles = []
        this.guests = []
    }
    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) throw new Error("This article model is not included in this gallery!");
        const findName = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel.toLowerCase())
        if (findName) {
            findName.quantity += quantity
        } else {
            this.listOfArticles.push({ articleModel: articleModel.toLowerCase(), articleName, quantity })
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest(guestName, personality) {
        let findGuest = this.guests.find(x => x.guestName === guestName);
        if (findGuest) throw new Error(`${guestName} has already been invited.`)


        if (!findGuest) {

            if (personality === 'Vip') {
                this.guests.push({ guestName, points: 500, purchaseArticle: 0 })
            } else if (personality === 'Middle') {
                this.guests.push({ guestName, points: 250, purchaseArticle: 0})
            } else  {
                this.guests.push({ guestName, points: 50, purchaseArticle: 0});
            }
            


            
        }
        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName, guestName) {
        let finds = this.listOfArticles.find(x =>x.articleModel === articleModel.toLowerCase() && x.articleName === articleName)
        
        let findGuest = this.guests.find(x => x.guestName === guestName)

        if (!finds) throw new Error("This article is not found.")

        if (finds.quantity === 0) return `The ${articleName} is not available.`

        if (!findGuest) return `This guest is not invited.`

        if (findGuest.points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article."
        } else {
            findGuest.points -= this.possibleArticles[articleModel]
            finds.quantity--
            findGuest.purchaseArticle++
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        }
    }

    showGalleryInfo (criteria){
        let result = ''
        if(criteria === 'article'){
            result = `Articles information:`
            this.listOfArticles.forEach(article => result+=`\n${article.articleModel} - ${article.articleName} - ${article.quantity}`)
            return result
        }
         if(criteria === 'guest'){
            result = `Guests information:`
            this.guests.forEach(article=>result+=`\n${article.guestName} - ${article.purchaseArticle}`)
            return result
        }
    
    }
}
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

