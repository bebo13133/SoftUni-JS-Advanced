//SOLUTION 94/100

window.addEventListener('load', solve);
function solve() {

    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById("last-name");
    const countInput = document.getElementById('people-count');
    const dateInput = document.getElementById("from-date");
    const daysInput = document.getElementById("days-count")

    const ticketPreview = document.querySelector('.ticket-info-list')
    const confirmTicket = document.querySelector('.confirm-ticket')

    let nextBtn = document.getElementById('next-btn')

    nextBtn.addEventListener('click', onNext)
    function onNext(e) {
        e.preventDefault();
        let firstnameValue = firstName.value;
        let lastNameValue = lastName.value;
        let countInputValue = countInput.value;
        let dateInputValue = dateInput.value;
        let daysInputValue = daysInput.value;
        if (!firstName.value || !lastName.value || !countInput.value || !dateInput.value || !daysInput.value) {
            return
        }

        let reviewTickets = creatElement(firstnameValue, lastNameValue, countInputValue, dateInputValue, daysInputValue)
        ticketPreview.appendChild(reviewTickets);
        firstName.value = "";
        lastName.value = "";
        countInput.value = "";
        dateInput.value = "";
        daysInput.value = "";
        nextBtn.disabled = true
    
    }
    function creatElement(firstnameValue, lastNameValue, countInputValue, dateInputValue, daysInputValue) {
        let ticketLi = document.createElement("li");
        ticketLi.className='ticket';
        let articleEl = document.createElement('article')

        let h3Element = document.createElement('h3')
        h3Element.textContent = `Name: ${firstnameValue} ${lastNameValue}`;
        articleEl.appendChild(h3Element)

        let pDate = document.createElement('p')
        pDate.textContent = `From date: ${dateInputValue}`
        articleEl.appendChild(pDate);

        let pDays = document.createElement('p')
        pDays.textContent = `For ${daysInputValue} days`;
        articleEl.appendChild(pDays);

        let pPeople = document.createElement('p');
        pPeople.textContent = `For ${countInputValue} people`;
        articleEl.appendChild(pPeople)

        let editBtn = document.createElement('button')
        editBtn.className='edit-btn'
        editBtn.textContent = "Edit"
        
        let contBtn = document.createElement('button');
        contBtn.className='continue-btn'
        contBtn.textContent = "Continue";
        

  
        ticketLi.appendChild(articleEl)
        ticketLi.appendChild(editBtn);
        ticketLi.appendChild(contBtn);

        editBtn.addEventListener('click', (e)=>{
     
            let liThis = e.target.parentElement;

            firstName.value = firstnameValue;
            lastName.value = lastNameValue;
            countInput.value = countInputValue;
            dateInput.value = dateInputValue;
            daysInput.value = daysInputValue;
            nextBtn.disabled = false;
            liThis.remove();
        })
        contBtn.addEventListener('click', onContinue);
        nextBtn.disabled = true
        return ticketLi;
    }

    function onContinue(e) {
        let liElement = e.target.parentElement;
        liElement.classList.add('ticket-content')
        let buttons = Array.from(liElement.querySelectorAll('button'));
        buttons.forEach(x => x.remove());

       

        let confirmBtn = document.createElement('button')
        confirmBtn.className= 'confirm-btn'
        confirmBtn.textContent = "Confirm"
        confirmBtn.addEventListener('click', onConfirm)

      

        let cancelBtn = document.createElement('button')
        cancelBtn.className='cancel-btn'
        cancelBtn.textContent = "Cancel"

        cancelBtn.addEventListener('click', onCancel)
        liElement.appendChild(confirmBtn);
        liElement.appendChild(cancelBtn);
        confirmTicket.appendChild(liElement);
        
    }



function onCancel(e){   
    let li = e.target.parentElement
      li.remove();
    nextBtn.disabled = false
}


    function onConfirm(e) {
        const body = document.getElementById('body')
        const h1Text = document.createElement('h1')
        h1Text.setAttribute('id', "thank-you")
        h1Text.textContent = "Thank you, have a nice day!"
       
        const backBth = document.createElement('button')
        backBth.setAttribute('id', 'back-btn')
        backBth.textContent = "Back"
     
        document.getElementById('main').remove();
        body.appendChild(h1Text)
        body.appendChild(backBth)
        backBth.addEventListener('click', (e) => {
            location.reload();
        })
    }

    
}


//!SOLUTION 100/100



function solve() {

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const peopleCountInput = document.getElementById('people-count');
    const fromDateInput = document.getElementById('from-date');
    const daysInput = document.getElementById('days-count');
    const nextStepBtn = document.getElementById('next-btn');

    const ticketListInfo = document.querySelector('.ticket-info-list');
    const confirmTicket = document.querySelector('.confirm-ticket');
    const mainDiv = document.getElementById('main');
    const body = document.getElementById('body');

    nextStepBtn.addEventListener('click', onNextStep);

    function onNextStep(event) {
        event.preventDefault();

        if (firstNameInput.value === '' ||
            lastNameInput.value === '' ||
            peopleCountInput.value === '' ||
            fromDateInput.value === '' ||
            daysInput.value === '') {
            return;
        }

        const liElement = document.createElement('li');
        liElement.className = 'ticket';

        const article = document.createElement('article');

        const h3Name = document.createElement('h3');
        h3Name.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

        const pDate = document.createElement('p');
        pDate.textContent = `From date: ${fromDateInput.value}`;

        const pDays = document.createElement('p');
        pDays.textContent = `For ${daysInput.value} days`;

        const pPeople = document.createElement('p');
        pPeople.textContent = `For ${peopleCountInput.value} people`;

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';

        const continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';

        article.appendChild(h3Name);
        article.appendChild(pDate);
        article.appendChild(pDays);
        article.appendChild(pPeople);
        liElement.appendChild(article);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);
        ticketListInfo.appendChild(liElement);

        nextStepBtn.disabled = true;

        const editFirstName = firstNameInput.value;
        const editLastName = lastNameInput.value;
        const editPeopleCount = peopleCountInput.value;
        const editFromDate = fromDateInput.value;
        const editDays = daysInput.value;

        firstNameInput.value = '';
        lastNameInput.value = '';
        peopleCountInput.value = '';
        fromDateInput.value = '';
        daysInput.value = '';

        editBtn.addEventListener('click', onEdit);

        function onEdit() {
            liElement.remove();

            firstNameInput.value = editFirstName;
            lastNameInput.value = editLastName;
            peopleCountInput.value = editPeopleCount;
            fromDateInput.value = editFromDate;
            daysInput.value = editDays;
            nextStepBtn.disabled = false;
        }

        continueBtn.addEventListener('click', onContinue);

        function onContinue() {

            liElement.remove();

            const liConfirmElement = document.createElement('li');
            liConfirmElement.className = 'ticket';

            const articleConfirm = document.createElement('article');

            const h3NameConfirm = document.createElement('h3');
            h3NameConfirm.textContent = `Name: ${editFirstName} ${editLastName}`;

            const pDateConfirm = document.createElement('p');
            pDateConfirm.textContent = `From date: ${editFromDate}`;

            const pDaysConfirm = document.createElement('p');
            pDaysConfirm.textContent = `For ${editDays} days`;

            const pPeopleConfirm = document.createElement('p');
            pPeopleConfirm.textContent = `For ${editPeopleCount} people`;

            const confirmBtn = document.createElement('button');
            confirmBtn.className = 'confirm-btn';
            confirmBtn.textContent = 'Confirm';

            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-btn';
            cancelBtn.textContent = 'Cancel';

            articleConfirm.appendChild(h3NameConfirm);
            articleConfirm.appendChild(pDateConfirm);
            articleConfirm.appendChild(pDaysConfirm);
            articleConfirm.appendChild(pPeopleConfirm);
            liConfirmElement.appendChild(articleConfirm);
            liConfirmElement.appendChild(confirmBtn);
            liConfirmElement.appendChild(cancelBtn);
            confirmTicket.appendChild(liConfirmElement);

            cancelBtn.addEventListener('click', onCancel);

            function onCancel() {
                liConfirmElement.remove();
                nextStepBtn.disabled = false;
            }

            confirmBtn.addEventListener('click', onConfirm);

            function onConfirm() {
                mainDiv.remove();

                const h1 = document.createElement('h1');
                h1.id = 'thank-you';
                h1.textContent = 'Thank you, have a nice day!';

                const backBtn = document.createElement('button');
                backBtn.id = 'back-btn';
                backBtn.textContent = 'Back';

                body.appendChild(h1);
                body.appendChild(backBtn);

                backBtn.addEventListener('click', onBack);

                function onBack() {
                    h1.remove();
                    backBtn.remove();
                    liConfirmElement.remove();
                    body.appendChild(mainDiv);
                    nextStepBtn.disabled = false;
                }
            }
        }
    }
}