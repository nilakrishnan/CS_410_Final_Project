const query = document.getElementById('query');
const search = document.getElementById('search')
const clear = document.getElementById('clear')

clear.addEventListener('click', () => {
	chrome.storage.local.clear()
	query.value = ''
	chrome.runtime.sendMessage({
		type: "clear"
	})
})

search.addEventListener('click', () => {
	chrome.runtime.sendMessage({
		type: "query",
		query: query.value
	})
})

chrome.runtime.onMessage.addListener((data) => {
	let result = document.getElementById("result")

	if (data.type === "result") {
		result.className = "form__result--visible"

		for (i in data.sentences) {
			let sentence = document.createElement('p')
			sentence.innerHTML = data.sentences[i]
			sentence.className = "form__results"
			result.appendChild(sentence)
		}

	} else if (data.type === "reset") {
		result.className = "form__result--hidden"
		result.innerHTML = ''
	}
})