const { text } = require("stream/consumers");

function solve() {
    const hallInput = document.querySelector('input[placeholder="Hall"]');
    const nameInput = document.querySelector('input[placeholder="Name"]');
    const priceInput = document.querySelector('input[placeholder="Ticket Price"]');

    const movieUl = document.querySelector('#movies>ul');
    const movieBtn = document.querySelector('#container button');
    const archiveUl = document.querySelector('#archive ul');
    const clearBtn = document.querySelector("#archive>button")

    movieBtn.addEventListener('click', onMovie);

    clearBtn.addEventListener('click', (event) => {
        event.preventDefault()

        archiveUl.innerHTML="";
    })
    function onMovie(event) {
        event.preventDefault();


        if (!nameInput.value || !hallInput.value || !Number(priceInput.value) ) {
            return;
        }
      
        const li = document.createElement('li')

        const span = document.createElement('span')
        span.textContent = nameInput.value
        li.appendChild(span);

        const strong = document.createElement('strong')
        strong.textContent = `Hall: ${hallInput.value}`
        li.appendChild(strong);




        const div = document.createElement('div')

        const divStrong = document.createElement('strong');
        divStrong.textContent = Number(priceInput.value).toFixed(2);
        div.appendChild(divStrong);

        const divInput = document.createElement('input')
        divInput.type = 'text'
        divInput.placeholder = "Tickets Sold"
        div.appendChild(divInput);

        const archiveBtn = document.createElement('button');
        archiveBtn.textContent = "Archive"
        div.appendChild(archiveBtn)

        li.appendChild(div);
        movieUl.appendChild(li);

        hallInput.value = "";
        priceInput.value = "";
        nameInput.value = "";

        archiveBtn.addEventListener('click', (event) => {
            event.preventDefault()


            if (isNaN(divInput.value) || !divInput.value) {
                return;
            }
           
            let totalPrice = Number(divInput.value) * Number(divStrong.textContent)

            const archiveLi = document.createElement('li')

            const archiveSpan = document.createElement('span')
            archiveSpan.textContent = span.textContent;
            archiveLi.appendChild(archiveSpan);

            const archiveStrong = document.createElement('strong');
            archiveStrong.textContent = `Total amount: ${totalPrice.toFixed(2)}`

            archiveLi.appendChild(archiveStrong)

            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = "Delete"
            archiveLi.appendChild(deleteBtn)

            archiveUl.appendChild(archiveLi)
            movieUl.removeChild(li)

            deleteBtn.addEventListener('click', (event) => {
                event.preventDefault()

                event.target.parentElement.remove();
            })

      
        });

    }


}