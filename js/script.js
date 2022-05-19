const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 'b0f8ad1fa7msh77bf62184c7c0f8p177435jsn4aa90d59ecbb'
	}
};

fetch('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=asia2&lang=en&currentpage=0&pagesize=30&categories=men_all&sortBy=jackets&concepts=H%26M%20MAN', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));