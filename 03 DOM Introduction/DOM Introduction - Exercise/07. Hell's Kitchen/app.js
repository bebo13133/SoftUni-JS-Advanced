function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let bestList = {}
      let totalSalary = 0
      let avgSalarary = 0
      let currSalary = 0
      let bestWorker = ""

      let input = JSON.parse(document.querySelector("#inputs textarea").value)
      for (let line of input) {
         let [restourant, workerInfo] = line.split(" - ")

         for (let worker of workerInfo.split(', ')) {
            let [workerName, salaryWorker] = worker.split(' ').map(x => isNaN(x) ? x : Number(x))
            if (!bestList.hasOwnProperty(restourant)) bestList[restourant] = {};

            bestList[restourant][workerName] = salaryWorker
         }
      }
      let entries = Object.entries(bestList).map(element => {
         let name = element[0]
         let workersLine = Object.values(element[1]).map(y => {
            totalSalary += Number(y)
         });
         avgSalarary = totalSalary / workersLine.length
         if (avgSalarary > currSalary) {
            currSalary = avgSalarary
            bestWorker = name
            totalSalary = 0
         };
      });
      let bestRestourant = Object.entries(bestList[bestWorker]).sort((a, b) => b[1] - a[1]);

      let finalResult = bestRestourant.reduce((acc, x) => {
         return acc += `Name: ${x[0]} With Salary: ${x[1]} `
      }, "");

      document.querySelector("#bestRestaurant p").textContent = `Name: ${bestWorker} Average Salary: ${currSalary.toFixed(2)} Best Salary: ${(bestRestourant[0][1].toFixed(2))}`
      document.querySelector('#workers p').textContent = finalResult
   }
}
// ["PizzaHut - Peter 500, George 300, Mark 800",
// "TheLake - Bob 1300, Joe 780, Jane 660"]
