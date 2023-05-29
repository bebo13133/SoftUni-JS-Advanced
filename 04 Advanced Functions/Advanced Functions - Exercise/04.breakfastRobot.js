function solution() {
    const store = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };


    function commandOption() {
        return {
            restock: (option1, queantity) => {
                store[option1] = store[option1] + Number(queantity);
                return "Success"
            },

            prepare: (recipe, queantity) => {
                let quantityMeals = Number(queantity);
                let order = Object.entries(recipes[recipe]);
                order.forEach(ingredient => ingredient[1] *= quantityMeals);

                for (let [microElement, quantity] of order) {

                    if (store[microElement] < quantity) return `Error: not enough ${microElement} in stock`;
                }
                order.forEach(([microElement, quantity]) => {
                    store[microElement] -= quantity;
                });
                return 'Success';
            },
            report: () => {
                return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
            }
        }
    }
    
    return function inputData(data) {
        const [comm, option1, queantity] = data.split(" ")
        let cmdHandler = commandOption();
        return cmdHandler[comm](option1, queantity);
    }
}


let manager = solution();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));


