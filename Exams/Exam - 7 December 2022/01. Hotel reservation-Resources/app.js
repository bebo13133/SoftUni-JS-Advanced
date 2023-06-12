window.addEventListener('load', solve);

function solve() {
    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let dateInInput = document.getElementById('date-in');
    let dateOutInput = document.getElementById('date-out');
    let peopleCountInput = document.getElementById('people-count');
    let nextButton = document.getElementById('next-btn');
    let infoReservation = document.querySelector('.info-list');
    let confirmList = document.querySelector('.confirm-list');
    let verification = document.getElementById('verification');

    nextButton.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault();
      
        let date1 = new Date(dateInInput.value);
        let date2 = new Date(dateOutInput.value);
        let firstName = firstNameInput.value
        let lastName = lastNameInput.value
        let dataIn = dateInInput.value
        let dataOut = dateOutInput.value
        let people = peopleCountInput.value

        if (firstNameInput.value === '' || lastNameInput.value === '' || dateInInput.value === '' ||
            dateOutInput.value === '' || peopleCountInput.value === '' ||date1>=date2 ) {
            return;
        }
        let reservationInfo = reservation(firstName, lastName, dataIn, dataOut, people)
        infoReservation.appendChild(reservationInfo)
      
        firstNameInput.value = '';
        lastNameInput.value = '';
        dateInInput.value = '';
        dateOutInput.value = '';
        peopleCountInput.value = '';
        nextButton.disabled = true
    }
    function reservation(firstName, lastName, dataIn, dataOut, people) {
        let liElement = document.createElement('li');
        liElement.className = 'reservation-content';


        let article = document.createElement('article')
        liElement.appendChild(article);

        let h3Element = document.createElement('h3')
        h3Element.textContent = `Name: ${firstName} ${lastName}`
        article.appendChild(h3Element);

        let pDataIn = document.createElement('p');
        pDataIn.textContent = `From date: ${dataIn}`;
        article.appendChild(pDataIn);

        let pDateOut = document.createElement('p');
        pDateOut.textContent = `To date: ${dataOut}`;
        article.appendChild(pDateOut);

        let pPeople = document.createElement('p');
        pPeople.textContent = `For ${people} people`;
        article.appendChild(pPeople);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = "Edit"
        editBtn.addEventListener('click', onEdit);

        function onEdit(e) {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            dateInInput.value = dataIn;
            dateOutInput.value = dataOut;
            peopleCountInput.value = people;
            let li = e.target.parentElement
            nextButton.disabled = false
            li.remove()
        }
        let contBtn = document.createElement('button');
        contBtn.classList.add('continue-btn');
        contBtn.textContent = 'Continue'
        contBtn.addEventListener('click', onContinue)

        liElement.appendChild(editBtn);
        liElement.appendChild(contBtn);

        function onContinue(e) {
            let currentLi = e.target.parentElement
            let buttons = Array.from(currentLi.querySelectorAll('button'))
            buttons.forEach(x => x.remove())
            let liContinueElement = document.createElement('li');
            liContinueElement.className = 'reservation-content';
    
            let articleContinieElement = document.createElement('article');
            articleContinieElement = article;
            liContinueElement.appendChild(articleContinieElement);
    
            let confirmtBtn = document.createElement('button');
            confirmtBtn.className = 'confirm-btn';
            confirmtBtn.textContent = 'Confirm';
            liContinueElement.appendChild(confirmtBtn);
    
            let cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-btn';
            cancelBtn.textContent = 'Cancel';
            liContinueElement.appendChild(cancelBtn);
            cancelBtn.addEventListener('click', onCancel);
            liElement.remove();
    
            confirmList.appendChild(liContinueElement);
    
            confirmtBtn.addEventListener('click', onConfirm);
        }
        function onConfirm(e) {
            let currentLi = e.target.parentElement
            currentLi.remove()
            verification.className = "reservation-confirmed"
            verification.textContent = "Confirmed."
            nextButton.disabled = false
        }
        function onCancel(e) {
            let li = e.target.parentElement
            li.remove()
            verification.className = 'reservation-cancelled';
            verification.textContent = 'Cancelled.';
            nextButton.disabled = false
        }
        return liElement;
    }
}





