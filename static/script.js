function displayluke() {
	fetch('api/character')           //api for the get request
    .then(res => res.json())
    .then(function(data) {
		console.log(data)

		const unorderList = document.getElementById('luke-list');
		const properties = Object.keys(data);
		properties.forEach(function(key) {
			const listItems = document.createElement('Li');
			const textNode = document.createTextNode(key + ': ' + data[key]);
			listItems.appendChild(textNode);
			unorderList.appendChild(listItems);
		})
	});

}