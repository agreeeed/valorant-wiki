const footer = document.getElementsByTagName('footer')[0];
const right = document.querySelector('.right');

//get version
fetch('https://valorant-api.com/v1/version')
.then(res => res.json())
.then(data => {
	const json = data.data;
	const riotClientVer = document.createElement('small');
	riotClientVer.innerHTML = 'Riot client version: ' + json.riotClientVersion;
	footer.appendChild(riotClientVer);
});

//get data
function getData(){
	right.innerHTML = '';
	const lang = document.getElementById('lang').value;
	fetch('https://valorant-api.com/v1/playercards?language=' + lang)
	.then(res => res.json())
	.then(data => {
		const json = data.data;
		console.log(json);

		for(let i = 0; i < json.length; i++){
			const card = document.createElement('div');
			card.classList.add('card');
			right.appendChild(card);

			const art = document.createElement('img');
			const name = document.createElement('h3');

			art.src = json[i].largeArt;
			name.innerHTML = json[i].displayName;

			card.append(art, name);
		}

	});
}

getData();