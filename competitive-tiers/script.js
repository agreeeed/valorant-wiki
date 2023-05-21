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
	fetch('https://valorant-api.com/v1/competitivetiers?language=' + lang)
	.then(res => res.json())
	.then(data => {
		const jsonold = data.data;
		const json = jsonold[ Object.keys(jsonold).sort().pop() ];
		console.log(json);

		for(let i = 0; i < json.tiers.length; i++){
			const card = document.createElement('div');
			card.classList.add('card');
			right.appendChild(card);
			card.style.backgroundColor = '#' + json.tiers[i].backgroundColor;

		
			const icon = document.createElement('img');
			const name = document.createElement('h3');

			if(json.tiers[i].largeIcon != null){
				icon.src = json.tiers[i].largeIcon;
				name.innerHTML = json.tiers[i].tierName;
			}

			card.append(icon, name);
		}

	});
}

getData();