

window.addEventListener("load", solve);

function solve() {
  let postInput = document.getElementById('post-title');
  let categoryInput = document.getElementById('post-category');
  let postContent = document.getElementById('post-content')
  let reviewElement = document.getElementById('review-list')
  let publishBtn = document.getElementById('publish-btn');
  let ulPublish = document.getElementById("published-list")
  let clearBtn = document.getElementById('clear-btn')

  clearBtn.addEventListener('click', clearPost )
  publishBtn.addEventListener('click', onPublish)


  function onPublish(e) {
    e.preventDefault();
    const title = postInput.value;
    const category = categoryInput.value;
    const pContent = postContent.value;
    if (title === "" || category === "" || pContent === "") {
      return;
    }

    let post = creatPost(title, category, pContent)
    reviewElement.appendChild(post)
    postInput.value = '';
    categoryInput.value = '';
    postContent.value = '';

  }

  function creatPost(title, category, pContent) {

    let liElement = document.createElement('li');
    liElement.classList.add('rpost');
    let article = document.createElement('article')
    let h4Element = document.createElement('h4');
    h4Element.textContent = title;

    let paragraphCategory = document.createElement('p');
    paragraphCategory.textContent = `Category: ${category}`;
    let paradraphContent = document.createElement("p")
    paradraphContent.textContent = `Content: ${pContent}`
    article.appendChild(h4Element)
    article.appendChild(paragraphCategory);
    article.appendChild(paradraphContent);
    liElement.appendChild(article);

    let editBtn = document.createElement('button');
    editBtn.classList.add("action-btn", "edit")
    editBtn.textContent = "Edit"
    editBtn.addEventListener('click', onEdit);

    let aprroveBtn = document.createElement("button");
    aprroveBtn.classList.add('action-btn', "approve");
    aprroveBtn.textContent = "Aprrove"

    aprroveBtn.addEventListener('click', onAprrove);


    liElement.appendChild(editBtn);
    liElement.appendChild(aprroveBtn);
   

    return liElement

  }

  function onEdit(event) {

    let liEdit = event.target.parentElement;
    liEdit.remove();
    let titleElement = liEdit.querySelector('h4')
    let titleValueElement = titleElement.textContent

    let paragraphsElements = liEdit.querySelectorAll('p')
    let categoryValue = paragraphsElements[0].textContent;
    let contentVal = paragraphsElements[1].textContent;
    postInput.value = titleValueElement;
    categoryInput.value = categoryValue.substring(10)
    postContent.value = contentVal.substring(9)

  }

  function onAprrove(event) {
    let liElement = event.target.parentElement;
    liElement.remove()
    let buttons = Array.from(liElement.querySelectorAll("button"))
    buttons.forEach(x => x.remove())

    ulPublish.appendChild(liElement)

  }

  function clearPost (){
    let clearPost = Array.from(ulPublish.children)
    clearPost.forEach(x => x.remove())
  }
}
