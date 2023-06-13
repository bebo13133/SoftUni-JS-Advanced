window.addEventListener("load", solve);

function solve() {
  const makeInput = document.getElementById('make');
  const modelInput = document.getElementById('model');
  const productionInput = document.getElementById('year');
  const fuelType = document.getElementById('fuel');
  const originPrice = document.getElementById('original-cost');
  const sellPrice = document.getElementById('selling-price');
  const ulCarsList = document.getElementById('cars-list');
  const profit = document.getElementById('profit');
  const publishBtn = document.getElementById('publish');
  const tbody = document.getElementById('table-body');

  publishBtn.addEventListener('click', onPublish)

  function onPublish(e) {
    e.preventDefault();

    let make = makeInput.value
    let model = modelInput.value
    let product = Number(productionInput.value)
    let fuel = fuelType.value
    let oPrice = Number(originPrice.value);
    let sPrice = Number(sellPrice.value)

    if (sPrice <= oPrice || !make || !model || !product || !fuel)  return;

    let publish = onCreate(make, model, product, fuel, oPrice, sPrice)
    tbody.appendChild(publish)

    makeInput.value = "";
    modelInput.value = "";
    productionInput.value = "";
    fuelType.value = "";
    originPrice.value = "";
    sellPrice.value = "";

  }
  function onCreate(make, model, product, fuel, oPrice, sPrice) {

    const trElement = document.createElement('tr');
    trElement.classList.add('row');
    const tdMake = document.createElement('td');
    tdMake.textContent = make;
    trElement.appendChild(tdMake);

    const tdModel = document.createElement('td')
    tdModel.textContent = model;
    trElement.appendChild(tdModel);

    const tdYear = document.createElement('td')
    tdYear.textContent = product;
    trElement.appendChild(tdYear);

    const tdFuel = document.createElement('td')
    tdFuel.textContent = fuel;
    trElement.appendChild(tdFuel);

    const tdOriginPricce = document.createElement('td');
    tdOriginPricce.textContent = oPrice
    trElement.appendChild(tdOriginPricce)

    const tdSell = document.createElement('td');
    tdSell.textContent = sPrice;
    trElement.appendChild(tdSell)

    const tdButtons = document.createElement('td')

    const editBtn = document.createElement('button')
    editBtn.classList.add("action-btn", 'edit')
    editBtn.textContent = "Edit"
    editBtn.addEventListener('click', onEdit)
    tdButtons.appendChild(editBtn);
    const sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn', "sell");
    sellBtn.textContent = "Sell";

    sellBtn.addEventListener('click', onSell)
    tdButtons.appendChild(sellBtn)

    trElement.appendChild(tdButtons)
    function onEdit(e) {

      trElement.remove()
     
      makeInput.value = make
      modelInput.value = model
      productionInput.value = product
      fuelType.value = fuel
      originPrice.value = oPrice
      sellPrice.value = sPrice

    }
    function onSell(e) {

      e.preventDefault()
      let li = document.createElement('li');
      li.classList.add('each-list')
      const modelSpan = document.createElement('span')
      modelSpan.textContent = `${make} ${model}`

      const yearSpan = document.createElement('span')
      yearSpan.textContent = `${product}`

      const differenceSpan = document.createElement('span')
      const difference = sPrice - oPrice;
      differenceSpan.textContent = difference;
      li.appendChild(modelSpan)
      li.appendChild(yearSpan)
      li.appendChild(differenceSpan)
      profit.textContent = (Number(profit.textContent) + difference).toFixed(2)
      ulCarsList.appendChild(li)
      trElement.remove()
    
    }
    return trElement
  }
}
