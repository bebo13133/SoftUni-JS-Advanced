class SummerCamp {
    constructor(organizer, location) {

        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
        this.listOfParticipants = []
    }


    registerParticipant(name, condition, money) {

        if (!this.priceForTheCamp[condition]) throw new Error('Unsuccessful registration at the camp.');


        const nameFind = this.listOfParticipants.find(x => x.name === name)


        if (nameFind) return `The ${name} is already registered at the camp.`

        if (money < this.priceForTheCamp[condition]) return `The money is not enough to pay the stay at the camp.`

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 })
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        const findName = this.listOfParticipants.find(x => x.name === name)
        if (!findName) throw new Error(`The ${name} is not registered in the camp.`)
        const findIndex = this.listOfParticipants.findIndex(x => x.name === name)
        this.listOfParticipants.splice(findIndex, 1)
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(x => x.name === participant1)
        if (!player1) throw new Error(`Invalid entered name/s.`)

        if (typeOfGame === 'Battleship') {
            player1.power += 20
            return `The ${player1.name} successfully completed the game ${typeOfGame}.`
        } else if (typeOfGame === 'WaterBalloonFights') {
            let winner = ""
            let player2 = this.listOfParticipants.find(x => x.name === participant2)
            if (!player2) throw new Error(`Invalid entered name/s.`)
            if (player1.condition !== player2.condition) throw new Error(`Choose players with equal condition.`)
            if (player1.power > player2.power) {
                player1.wins++
                winner = player1.name
            } else if (player2.power > player1.power) {
                player2.wins++
                winner = player2.name
            } else {
                return `There is no winner.`
            }
            return `The ${winner} is winner in the game ${typeOfGame}.`
        }
    }
    toString() {

        let printResult = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins)
        sorted.forEach(players => printResult += `\n${players.name} - ${players.condition} - ${players.power} - ${players.wins}`)
        return printResult
    }

}
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
