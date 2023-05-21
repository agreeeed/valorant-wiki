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
	fetch('https://valorant-api.com/v1/buddies?language=' + lang)
	.then(res => res.json())
	.then(data => {
		const json = data.data;
		console.log(data);

		for(let i = 0; i < json.length; i++){
			const card = document.createElement('div');
			const a = document.createElement('a');
			card.classList.add('card');
			right.appendChild(card);
			card.appendChild(a);

			const icon = document.createElement('img');
			const name = document.createElement('h3');

			icon.src = json[i].displayIcon;
			name.innerHTML = json[i].displayName;

			card.append(icon, name);
		}

	});
}

getData();