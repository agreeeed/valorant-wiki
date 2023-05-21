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
	fetch('https://valorant-api.com/v1/gamemodes?language=' + lang)
	.then(res => res.json())
	.then(data => {
		const json = data.data;
		console.log(json);

		for(let i = 0; i < json.length; i++){
			const card = document.createElement('div');
			card.classList.add('card');
			right.appendChild(card);

			const icon = document.createElement('img');
			const name = document.createElement('h3');
			const duration = document.createElement('p');
			const minimap = document.createElement('p');
			const teamvoice = document.createElement('p');

			icon.src = json[i].displayIcon;
			name.innerHTML = json[i].displayName;
			duration.innerHTML = 'Duration: ' + json[i].duration;
			minimap.innerHTML = json[i].isMinimapHidden == true ? 'Minimap: No' : 'Minimap: Yes';
			teamvoice.innerHTML = json[i].isTeamVoiceAllowed == true ? 'Team Voice: Yes' : 'Team Voice: No';

			card.append(icon, name, duration, minimap, teamvoice);
		}

	});
}

getData();