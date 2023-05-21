//MAGABEE © 2022 ALL RIGHTS RESERVED
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
	fetch('https://valorant-api.com/v1/agents?language=' + lang)
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
			a.href = 'agents/' + json[i].displayName.toLowerCase().replace('/', '-');

			const icon = document.createElement('img');
			const name = document.createElement('h3');
			const description = document.createElement('p');
			const roles = document.createElement('div');
			const roleicon = document.createElement('img');
			const role = document.createElement('p');
			roles.classList.add('roles');

			icon.src = json[i].displayIcon;
			name.innerHTML = json[i].displayName;
			description.innerHTML = json[i].description.substring(0, 44) + '...';
			a.appendChild(icon);
			card.append(name, roles, description);

			roles.append(roleicon, role);

			if(json[i].role != null) roleicon.src = json[i].role.displayIcon;
			if(json[i].role != null) role.innerHTML = json[i].role.displayName;
		}

	});
}

getData();