function constructionCrew(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrated += worker.weight * 0.1 * worker.experience;
        worker.dizziness = false;
    }

    return worker;
}

// Друг вариант

// function constructionCrew (obj){
//     if(obj.dizziness) return {...obj, levelOfHydrated: obj.weight * obj.experience*0.1, dizziness:false}
//    return{...obj}
//    }