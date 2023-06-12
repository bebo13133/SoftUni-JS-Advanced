class Footballteam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country
        this.invitedPlayers = []
    }

    newAdditions(footballPlayers) {

        let players = {}
        let result = []

        for (let player of footballPlayers) {

            let [name, age, value] = player.split('/')
            age = Number(age)
            value = Number(value)
            if (!players.hasOwnProperty(name)) {
                players[name] = { age, value }
            } else {
                if (value > players[name].value) {
                    players[name].value = value
                }
            }
        }
        this.invitedPlayers.push(players)
        for (let players of this.invitedPlayers) {
            for (let player in players) {
                result.push(player)
            }
        }
        return `You successfully invite ${result.join(', ')}.`
    }
    signContract(selectedPlayer) {

        let [name, playerOffer] = selectedPlayer.split('/')
        playerOffer = Number(playerOffer)

        for (let player of this.invitedPlayers) {
            if (!player.hasOwnProperty(name)) {
                throw new Error(`${name} is not invited to the selection list!`)
            } else {
                if (playerOffer < player[name].value) {
                    throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player[name].value - playerOffer} million more are needed to sign the contract!`)
                } else {
                    player[name].value = "Bought"
                }

            }
        }
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }
    ageLimit(name, age) {
        for (let player of this.invitedPlayers) {
            if (!player.hasOwnProperty(name)) {
                throw new Error(`${name} is not invited to the selection list!`)
            } else {
                if (Number(player[name].age) < Number(age)) {
                    let difference = Number(age) - Number(player[name].age)
                    if (difference < 5) {
                        return (`${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`)
                    } else if (difference > 5) {
                        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                    }
                }else{
                    return `${name} is above age limit!`
                }
            }
        }
    }
    transferWindowResult(){
        let printresult = "Players list:"
        for(let player of this.invitedPlayers){
            let sortedPLayers = Object.keys(player).sort((a,b)=>a.localeCompare(b))
            for (let name of sortedPLayers){
                printresult+=`\nPlayer ${name}-${player[name].value}`
            }
        }

     
     return printresult
    }


}
let fTeam = new Footballteam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Lionel Messi is above age limit!
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Pau Torres will sign a contract for 1 years with Barcelona in Spain!
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars
