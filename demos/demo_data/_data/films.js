const fetch = require('node-fetch');

module.exports = async function() {

	let resp = await fetch('https://swapi.dev/api/films');
	let data = await resp.json();
	return data.results;

}