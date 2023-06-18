//Вариант 1 
window.addEventListener('load', solve);

function solve() {
        const [carModelInput, carYearInput, partNameInput, partNumberInput, conditionInput, imgSrc, confirm, ulInfo, nextBtn] = 
        ['#car-model', '#car-year', '#part-name', '#part-number', '#condition',
        '#complete-img', '.confirm-list', '.info-list', '#next-btn'].map(selector => document.querySelector(selector));
        nextBtn.addEventListener('click', onNext)
        function onNext(e) {
                e.preventDefault()
                const [carModel, carYear, partName, partNumber, condition] = [
                carModelInput, carYearInput, partNameInput, partNumberInput, conditionInput].map(input => input.value);
                const isValidInput = [carModel, carYear, partName, partNumber, condition].filter(value => value === "").length === 0 && carYear >= 1980 && carYear <= 2023;
                if (!isValidInput) return;
                let partInfo = onCreat(carModel, carYear, partName, partNumber, condition)
                ulInfo.appendChild(partInfo)
                clear(carModelInput, carYearInput, partNameInput, partNumberInput, conditionInput);
        }
        function onCreat(carModel, carYear, partName, partNumber, condition) {
                const liInfo = document.createElement('li');
                liInfo.classList.add('part-content');
                const article = document.createElement('article');
                liInfo.appendChild(article);

                const createParagraph = (text) => {
                        const p = document.createElement('p');
                        p.textContent = text;
                        return p;
                };
                article.appendChild(createParagraph(`Car Model: ${carModel}`));
                article.appendChild(createParagraph(`Car Year: ${carYear}`));
                article.appendChild(createParagraph(`Part Name: ${partName}`));
                article.appendChild(createParagraph(`Part Number: ${partNumber}`));
                article.appendChild(createParagraph(`Condition: ${condition}`));
                const creatButtons = (text, className, eventListener) => {
                        const button = document.createElement('button');
                        button.textContent = text;
                        button.classList.add(className);
                        button.addEventListener('click', eventListener);
                        return button;
                };
                const editBtn = creatButtons('Edit', 'edit-btn', onEdit, 'edit-button');
                const continueBtn = creatButtons('Continue', 'continue-btn', onContinue, 'continue-button');
                liInfo.appendChild(editBtn);
                liInfo.appendChild(continueBtn);
                function onEdit(e) {
                        const [carModel, carYear, partName, partNumber, condition] = e.target.parentElement.querySelectorAll('article > p');

                        carModelInput.value = carModel.textContent.replace('Car Model: ', '');
                        carYearInput.value = carYear.textContent.replace('Car Year: ', '');
                        partNameInput.value = partName.textContent.replace('Part Name: ', '');
                        partNumberInput.value = partNumber.textContent.replace('Part Number: ', '');
                        conditionInput.value = condition.textContent.replace('Condition: ', '');
                        nextBtn.disabled = false;
                        liInfo.remove();
                }
                function onContinue(e) {
                        const currentLi = e.target.parentElement;
                        continueBtn.remove();
                        editBtn.remove();
                        confirm.appendChild(currentLi);

                        const confirmBtn = creatButtons('Confirm', 'confirm-btn', onConf);
                        const cancelBtn = creatButtons('Cancel', 'cancel-btn', onCancel);

                        currentLi.appendChild(confirmBtn);
                        currentLi.appendChild(cancelBtn);
                }
                function onConf(e) {
                        let currentLi = e.target.parentElement
                        imgSrc.style.visibility = "visible"
                        let completeTxt = document.getElementById("complete-text")
                        completeTxt.textContent = "Part is Ordered!"
                        currentLi.remove()
                        nextBtn.disabled = false
                }
                function onCancel(e) {
                        let currentLi = e.target.parentElement
                        currentLi.remove()
                        nextBtn.disabled = false
                }
                return liInfo
        }
        function clear(...inputs) {
                inputs.forEach(input => (input.value = ""));
                nextBtn.disabled = true;
        }
}

//2 Вариант
function solve() {
const carModelInput = document.getElementById('car-model')
const carYearInput = document.getElementById('car-year')
const partNameInput = document.getElementById('part-name')
const partNumberInput = document.getElementById('part-number')
const conditionInput = document.getElementById('condition');

let imgSrc = document.getElementById('complete-img')
const confirm = document.querySelector('.confirm-list')
const ulInfo = document.querySelector('.info-list')
const nextBtn = document.getElementById('next-btn')

nextBtn.addEventListener('click', onNext)

function onNext(e) {
        e.preventDefault()
        let carModel = carModelInput.value
        let carYear = carYearInput.value
        let partName = partNameInput.value
        let partNumber = partNumberInput.value
        let condition = conditionInput.value


        if (carModel === "" || carYear === "" || carYear > 2023 || carYear < 1980 || partName === '' || partNumber === '' || condition === "") {
                return;
        }

        let partInfo = onCreat(carModel, carYear, partName, partNumber, condition)
        ulInfo.appendChild(partInfo)


        carModelInput.value = ""
        carYearInput.value = ""
        partNameInput.value = ""
        partNumberInput.value = ""
        conditionInput.value = ""
        nextBtn.disabled = true

}

function onCreat(carModel, carYear, partName, partNumber, condition) {
        let liInfo = document.createElement('li')
        liInfo.classList.add('part-content')
        let article = document.createElement('article')
        liInfo.appendChild(article)

        let p1 = document.createElement('p')
        p1.textContent = `Car Model: ${carModel}`
        article.appendChild(p1)

        let p2 = document.createElement('p')
        p2.textContent = `Car Year: ${carYear}`
        article.appendChild(p2);

        let p3 = document.createElement('p')
        p3.textContent = `Part Name: ${partName}`
        article.appendChild(p3)

        let p4 = document.createElement('p')
        p4.textContent = `Part Number: ${partNumber}`
        article.appendChild(p4);

        let p5 = document.createElement('p')
        p5.textContent = `Condition: ${condition}`
        article.appendChild(p5)

        let editBtn = document.createElement('button')
        editBtn.textContent = "Edit"
        editBtn.classList.add("edit-btn")
        editBtn.addEventListener('click', onEdit)
        liInfo.appendChild(editBtn)

        let continueBtn = document.createElement('button')
        continueBtn.textContent = "Continue"
        continueBtn.classList.add('continue-btn')
        continueBtn.addEventListener('click', onContinue)
        liInfo.appendChild(continueBtn)
        function onEdit(e) {
                carModelInput.value = carModel
                carYearInput.value = carYear
                partNameInput.value = partName
                partNumberInput.value = partNumber
                conditionInput.value = condition
                nextBtn.disabled = false
                liInfo.remove()
        }

        function onContinue(e) {

                let currentLi = e.target.parentElement;
                continueBtn.remove()
                editBtn.remove()
                confirm.appendChild(currentLi)

                let confirmBtn = document.createElement('button')
                confirmBtn.classList.add('confirm-btn')
                confirmBtn.textContent = "Confirm"
                currentLi.appendChild(confirmBtn);
                confirmBtn.addEventListener('click', onConf)

                let cancelBtn = document.createElement('button')
                cancelBtn.textContent = "Cancel"
                cancelBtn.classList.add("cancel-btn")
                currentLi.appendChild(cancelBtn)
                cancelBtn.addEventListener('click', onCancel)

        }
        function onConf(e) {
                let currentLi = e.target.parentElement
                imgSrc.style.visibility = "visible"
                let completeTxt = document.getElementById("complete-text")
                completeTxt.textContent = "Part is Ordered!"
                currentLi.remove()
                nextBtn.disabled = false
        }
        function onCancel(e) {
                let currentLi = e.target.parentElement
                currentLi.remove()
                nextBtn.disabled = false
        }
        return liInfo
}
}


