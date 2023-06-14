class Triathlon {

    constructor(competitionName) {
        this.competitionName = competitionName
        this.participants = {};
        this.listOfFinalists = [];

    }

    addParticipant(participantName, participantGender) {
        if (!this.participants[participantName]) {
            this.participants[participantName] = participantGender
            return `A new participant has been added - ${participantName}`
        } else {
            return `${participantName} has already been added to the list`
        }

    }
    completeness (participantName, condition){

        if(!this.participants.hasOwnProperty(participantName)) throw new Error (`${participantName} is not in the current participants list`);

        if(condition<30) throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
    const completedCount = Math.round(condition/30) 
    if(completedCount === 1 || completedCount ===2){
        return `${participantName} could only complete ${completedCount} of the disciplines`
    }else{
        
        const gender = this.participants[participantName]

        this.listOfFinalists.push( participantName, gender)
        return `Congratulations, ${participantName} finished the whole competition`
    }
    
    }   
    rewarding (participantName){
        if (!this.listOfFinalists.includes(participantName)) {
            return `${participantName} is not in the current finalists list`;
        } else {
            return `${participantName} was rewarded with a trophy for his performance`;
        }
    }
    


    showRecord(criteria) {

        let result = [`List of all ${this.competitionName} finalists:`];
        let names = []
        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;
        }
        for (let i = 0; i < this.listOfFinalists.length; i += 2) {
            names.push(this.listOfFinalists[i]);
            if (this.listOfFinalists[i + 1] === criteria) {
                return `${this.listOfFinalists[i]} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            } else if (criteria === 'all') {
                names.sort((a, b)=> a.localeCompare(b));
            } else {
                return `There are no ${this.listOfFinalists[i + 1]}'s that finished the competition`;
            }
        }
        names.forEach((name) => result.push(name));
        return result.join('\n');
    }

}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));

