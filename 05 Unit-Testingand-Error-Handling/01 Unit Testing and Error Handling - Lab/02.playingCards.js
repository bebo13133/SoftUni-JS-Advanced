function playingCard(face, suits) {
    const faceCard = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    const suitsCard = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" }

    if (!faceCard.includes(face)) throw new Error('Invalid face ' + face)
    //може още една проверка да има !! 
    //  if(suits[suit] === undefined){
    //     throw new Error('Invalid suit ' + suit);
    // }

    const cards = {
        face,
        suits,
        toString() {
            return face + suitsCard[suits]
        }
    };
    return cards
}
