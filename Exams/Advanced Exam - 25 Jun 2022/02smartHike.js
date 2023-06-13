class SmartHike {
    constructor(username) {
        this.username = username
        this.goals = {}
        this.listOfHikes = []
        this.resources = 100
    }


    addGoal(peak, altitude) {
        if (this.goals[peak] !== undefined) return `${peak} has already been added to your goals`
        this.goals[peak] = altitude
        return `You have successfully added a new goal - ${peak}`
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) throw new Error(`${peak} is not in your current goals`)
        if (this.goals[peak] && this.resources <= 0) throw new Error("You don't have enough resources to start the hike")

        let difference = time * 10

        if (this.resources - difference < 0) {
            return "You don't have enough resources to complete the hike"
        } else {
            this.resources -= difference
            this.listOfHikes.push({ peak, time, difficultyLevel })
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }
    }
    rest(time) {
        let restTime = time * 10
        this.resources += restTime
        if (this.resources > 100) {
            this.resources = 100
            return `Your resources are fully recharged. Time for hiking!`
        } else {
            return `You have rested for ${time} hours and gained ${restTime}% resources`
        }
    }
    showRecord (criteria){

        if(this.listOfHikes.length===0) return `${this.username} has not done any hiking yet`

        if(criteria ==="all"){
            let allHikes = ["All hiking records:"]
            this.listOfHikes.forEach(hike=>
                allHikes.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`))
            return allHikes.join('\n')
        }

        this.listOfHikes.sort((a,b)=> a.time - b.time)
       let bestHikes = this.listOfHikes.find(a=>a.difficultyLevel === criteria)

       if(bestHikes === undefined){
       return `${this.username} has not done any ${criteria} hiking yet`
       }else{
         return `${this.username}'s best ${criteria} hike is ${bestHikes.peak} peak, for ${bestHikes.time} hours`
       }
    }
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));


