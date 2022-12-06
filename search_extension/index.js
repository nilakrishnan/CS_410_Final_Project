const query = document.getElementById('query');
const search = document.getElementById('search');
const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
	chrome.storage.local.clear();
	query.value = '';
});

search.addEventListener('click', () => {
	chrome.runtime.sendMessage('', {
		type: 'notification',
		message: query.value
	});
});