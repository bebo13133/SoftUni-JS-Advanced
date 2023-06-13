window.addEventListener("load", solve);

function solve() {

  const firstName = document.querySelector('#first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const genre = document.getElementById('genre');
  const storiInput = document.getElementById('story-title');
  const storyText = document.getElementById('story')
  const preview = document.getElementById('preview-list')
  const publishBtn = document.getElementById("form-btn");
  publishBtn.addEventListener('click', onPublish);

  function onPublish(e) {
    e.preventDefault();
    if (firstName.value === "" || lastName.value === "" || age.value === ""
      || genre.value === "" || storiInput.value === "" || storyText.value === "") {
      return;
    }
    let fName = firstName.value
    let lName = lastName.value
    let ageValue = age.value
    let genreValue = genre.value
    let StoriInputValue = storiInput.value
    let textStory = storyText.value

    let publish = onCreate(fName, lName, ageValue, genreValue, StoriInputValue, textStory)
    preview.appendChild(publish)

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    genre.value = ''
    storiInput.value = ''
    storyText.value = ''
    publishBtn.disabled = true
  }

  function onCreate(fName, lName, ageValue, genreValue, StoriInputValue, textStory) {

    let liElement = document.createElement('li')
    liElement.classList.add('story-info');

    const article = document.createElement('article')
    liElement.appendChild(article);

    let h4Text = document.createElement('h4')
    h4Text.textContent = `Name: ${fName} ${lName}`;
    article.appendChild(h4Text);
    let p1 = document.createElement('p')
    p1.textContent = `Age: ${ageValue}`;
    article.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = `Title: ${StoriInputValue}`;
    article.appendChild(p2);

    let p3 = document.createElement('p');
    p3.textContent = `Genre: ${genreValue}`;
    article.appendChild(p3)
    let p4 = document.createElement('p');
    p4.textContent = `${textStory}`;
    article.appendChild(p4);

    const saveBtn = document.createElement('button')
    saveBtn.classList.add("save-btn")
    saveBtn.textContent = 'Save Story';
    saveBtn.addEventListener('click', onSave);

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn');
    editBtn.textContent = "Edit Story"
    editBtn.addEventListener('click', onEdit);
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = "Delete Story";
    deleteBtn.addEventListener('click', onDelete);

    function onEdit(e) {
      let currentLi = e.target.parentElement;
      let buttons = Array.from(currentLi.querySelectorAll('button'));
      buttons.forEach(element => { element.remove() });
      firstName.value = fName
      lastName.value = lName
      age.value = ageValue
      genre.value = genreValue
      storiInput.value = StoriInputValue
      storyText.value = textStory
      publishBtn.disabled = false
      currentLi.remove()
    }

    liElement.appendChild(saveBtn)
    liElement.appendChild(editBtn)
    liElement.appendChild(deleteBtn);

    return liElement
  }

  function onSave(e) {
    let mainEl = document.getElementById('main')
    let formWrap = document.getElementById('form-wrapper')
    let sideWraper = document.getElementById('side-wrapper')
    let h1Text = document.createElement('h1');
    h1Text.textContent = 'Your scary story is saved!';
    formWrap.remove();
    sideWraper.remove();

    mainEl.appendChild(h1Text);
  }


  function onDelete(e) {
    currentLi = e.target.parentElement;
    currentLi.remove()
    publishBtn.disabled = false

  }







}
