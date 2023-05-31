function printDeckOfCards(cards) {
    
    const result = []

    for (let card of cards) {

        const face = card.slice(0, -1);
        const suits = card.slice(-1);

        try {
            result.push(createCard(face, suits))
        } catch (err) {
            console.log(`Invalid card: ${card}`)
            return
        }

    };

    console.log(result.join(' '));

    function createCard(face, suits) {
        const faceCard = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
        const suitsCard = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" }

        if (!faceCard.includes(face)) throw new Error('Invalid face ' + face);

        if (suitsCard[suits] === undefined) {
            throw new Error('Invalid suit ' + suits);
        };

        return {
            face,
            suits: suitsCard[suits],
            toString() {
                return this.face + this.suits
            }
        };

    }
}
console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));
console.log(printDeckOfCards(['5S', '3D', 'QD', '5X']));   