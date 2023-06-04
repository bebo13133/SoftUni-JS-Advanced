function solve() {
	let [generate, buy] = document.getElementsByTagName("button")
	generate.addEventListener("click", () => {
		let products = JSON.parse(document.querySelectorAll("textarea")[0].value)

		products.forEach(product => {
			let { name, img, price, decFactor } = product
			let tr = `<tr>\n
			<td><img src=${img}></td>\n
			<td><p>${name}</p></td>\n
			<td><p>${price}</p></td>\n
			<td><p>${decFactor}</p></td>\n
			<td><input type="checkbox"/></td>\n
			</tr>`
			document.querySelectorAll("tbody")[0].insertAdjacentHTML("beforeend", tr)
		})
		document.querySelectorAll("textarea")[0].textContent=""
	})
	document.querySelectorAll("textarea")[0].value = ""
	buy.addEventListener("click", () => {
		let [products, prices, factors] = [[], [], []]
		Array.from(document.getElementsByTagName("input")).forEach(x => {
			if (x.checked) {
				let parentElement = x.parentElement.parentElement
				let [name, price, factor] = parentElement.querySelectorAll("td p")
				name = name.textContent
				price = Number(price.textContent)
				factor = Number(factor.textContent)

				products.push(name)
				prices.push(price)
				factors.push(factor)
			}
		})
		let totalPrice = prices.reduce((a, b) => a + b, 0)
		let factorial = factors.reduce((a, b) => a + b, 0) / factors.length
		document.querySelectorAll("textarea")[1].textContent = `Bought furniture: ${products.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${factorial}`
	})
}