window.addEventListener('load', solve);

function solve() {

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const fromDate = document.getElementById('date-in');
    const toDate = document.getElementById('date-out');
    const peoplesCount = document.getElementById('people-count');
    let infoReservation = document.querySelector('.info-list')

    let nextButton =document.getElementById('next-btn');

   
    nextButton.addEventListener('click', nextBtn);

    function nextBtn(event) {
console.log("Helllooo" )
          e.preventFefault();

        // if (!firstName.value || !lastName.value || !fromDate.value || !toDate.value || !peoplesCount.value) {
        //     return;
        // }
        let fName = firstName.value
        let lName = lastName.value
        let inDate = fromDate.value
        let outDate = toDate.value
        let people = peoplesCount.value
        
        let li = document.createElement("li");
        li.className = 'reservation-content';

        let articleElement = document.createElement('article');
        li.appendChild(articleElement);
        let h3Element = document.createElement('h3')
        h3Element.textContent = `Name: ${fName} ${lName}`
        articleElement.appendChild(h3Element);
        let pFromDate = document.createElement('p')
        pFromDate.textContent = `From date: ${inDate}`
        articleElement.appendChild(pFromDate);

        let pToDate = document.creaeteElement('p');
        pToDate.textContent = `To date: ${outDate}`
        articleElement.appendChild(pToDate);

        let pPeople = document.createElement('p');
        pPeople.textContent = `For ${people}`
        articleElement.appendChild(pPeople);
        
        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = "Edit";

        let continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';

        editBtn.addEventListener('click',onEdit);
        continueBtn.addEventListener('click',onContinue);
      
        
        
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

   // let reservationList = listCreated(fName, lName, inDate, outDate, people);

   infoReservation.appendChild(li);

        // fName = '';
        // lName = '';
        // inDate = '';
        // outDate = '';
        // people = '';
        // nextBtn.disabled = true

    }

    
    // function listCreated(fName, lName, inDate, outDate, people) {


    //     return li;
    // }

}





