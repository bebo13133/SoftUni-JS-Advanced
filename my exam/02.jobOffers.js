class JobOffers {
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
    this.jobCandidates = [];
  }
  jobApplication(candidates) {
    let names = candidates.reduce((acc, line) => {
      let [name, education, yearsExperience] = line.split('-'); yearsExperience = Number(yearsExperience);
      let findName = this.jobCandidates.find(x => x.name === name);
      if (findName) if (findName.yearsExperience < yearsExperience) findName.yearsExperience = yearsExperience;
      if (!findName) acc.push(name), this.jobCandidates.push({ name, education, yearsExperience })
      return acc;
    }, []); return `You successfully added candidates: ${names.join(", ")}.`
  }
  jobOffer(chosenPerson) {
    const [name, minimalExperience] = chosenPerson.split("-");
    const minExperience = Number(minimalExperience);
    for (let jobCandidate of this.jobCandidates) {
      if (jobCandidate.name === name) {
        if (jobCandidate.yearsExperience < minExperience) {
          throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minExperience} years.`);
        }
        jobCandidate.yearsExperience = "hired"; return `Welcome aboard, our newest employee is ${name}.`;
      }
    }
    throw new Error(`${name} is not in the candidates list!`);
  }
  salaryBonus(name) {
    const findName = this.jobCandidates.find(x => x.name === name);
    if (!findName) throw new Error(`${name} is not in the candidates list!`);
    const salary = findName.education === "Bachelor" ? "$50,000 per year" : findName.education === "Master" ? "$60,000 per year"
      : "$40,000 per year";
    return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of ${salary}!`
  }
  candidatesDatabase(){
          if(this.jobCandidates.length === 0 ) throw new Error("Candidate Database is empty!")
          let p = `Candidates list:`
          let sorted = this.jobCandidates.sort((a,b)=>a.name.localeCompare(b.name)).forEach(c => p+=`\n${c.name}-${c.yearsExperience}`)
          return p
        }
    }

// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.jobOffer("John Jones-8"));
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());

// 2 Вариант : 100/100 на изпита

// class JobOffers {
//   constructor(employer, position) {
//     this.employer = employer;
//     this.position = position;
//     this.jobCandidates = [];
//   }
//   jobApplication(candidates){
//       let names = []// Може би с reduce .... щеше да е по-добре
//       candidates.forEach(line => {
//           let [name, education,yearsExperience] = line.split('-')
//           yearsExperience=Number(yearsExperience)

//           let findName = this.jobCandidates.find(x => x.name === name)
//           if(findName){
//               if(findName.yearsExperience < yearsExperience){
//                   findName.yearsExperience = yearsExperience
//               }
//           }
//           if(!findName){
//               names.push(name)
//               this.jobCandidates.push({name, education, yearsExperience})
//           }
//       });
//       return `You successfully added candidates: ${names.join(", ")}.`
//   }
//   jobOffer(chosenPerson) {
//       const [name, minimalExperience] = chosenPerson.split("-");
//       const minExperience = Number(minimalExperience);
//       for (let jobCandidate of this.jobCandidates) {
//         if (jobCandidate.name === name) {
//           if (jobCandidate.yearsExperience < minExperience) {
//             throw new Error(
//               `${name} does not have enough experience as ${this.position}, minimum requirement is ${minExperience} years.`
//             );
//           }
//           jobCandidate.yearsExperience = "hired";
//           return `Welcome aboard, our newest employee is ${name}.`;
//         }
//       }
//       throw new Error(`${name} is not in the candidates list!`);
//     }
//     salaryBonus(name){
//       const findName = this.jobCandidates.find(x=>x.name === name)

//       if(!findName) throw new Error(`${name} is not in the candidates list!`)

//       if(findName.education === 'Bachelor'){
//           return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
//       }else if(findName.education === 'Master'){
//           return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
//       }else{
//           return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
//       }
//     }
//     candidatesDatabase(){
//       if(this.jobCandidates.length === 0 ) throw new Error("Candidate Database is empty!")

//       let p = `Candidates list:`
//       let sorted = this.jobCandidates.sort((a,b)=>a.name.localeCompare(b.name))
//       .forEach(c => p+=`\n${c.name}-${c.yearsExperience}`)
//       return p
//     }
// }
// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.jobOffer("John Jones-8"));
// let Jobs = new JobOffers ("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("Jordan Cole-4"));
// console.log(Jobs.salaryBonus("Jordan Cole"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.candidatesDatabase());