window.addEventListener("load", solve);

function solve() {
  let postInput = document.getElementById('post-title');
  let categoryInput = document.getElementById('post-category');
  let postContent = document.getElementById('post-content')

  let publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', onPublish)

  function onPublish(e) {
    const title = postInput.value;
    const category = categoryInput.value;
    const pContent = postContent.value;
    if (title === "" || category === "" || pContent === "") { // samo probno
      return;
    }
  }
}
