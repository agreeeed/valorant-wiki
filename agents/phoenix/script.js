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
	fetch('https://valorant-api.com/v1/agents/eb93336a-449b-9c1b-0a54-a891f7921d69?language=' + lang)
	.then(res => res.json())
	.then(data => {
		const json = data.data;
		console.log(data);

		const previewdv = document.createElement('div');
		previewdv.classList.add('prvwdv');
		right.appendChild(previewdv);
		const leftd = document.createElement('div');
		const rightd = document.createElement('div');
		previewdv.append(leftd, rightd);
		const icon = document.createElement('img');
		icon.style.width = '120px';
		const name = document.createElement('h3');
		name.style.textAlign = 'center';
		const description = document.createElement('p');
		const role = document.createElement('p');
		role.classList.add('hgobr');
		const roledescription = document.createElement('p');
		icon.src = json.displayIcon;
		name.innerHTML = json.displayName;
		description.innerHTML = json.description;
		role.innerHTML = json.role.displayName;
		roledescription.innerHTML = json.role.description;
		leftd.append(icon, name);
		rightd.append(description, role, roledescription);

		const abilitiesdv = document.createElement('div');
		right.appendChild(abilitiesdv);
		const abilitiestext = document.createElement('h2');
		const ab1 = document.createElement('p');
		const ab2 = document.createElement('p');
		const ab3 = document.createElement('p');
		const ab4 = document.createElement('p');
		abilitiestext.innerHTML = 'Abilities';
		ab1.innerHTML = '<span>Q: &nbsp&nbsp</span>' + json.abilities[0].displayName + ': ' + json.abilities[0].description;
		ab2.innerHTML = '<span>E: &nbsp&nbsp</span>' + json.abilities[1].displayName + ': ' + json.abilities[1].description;
		ab3.innerHTML = '<span>C: &nbsp&nbsp</span>' + json.abilities[2].displayName + ': ' + json.abilities[2].description;
		ab4.innerHTML = '<span>X (Ulti): &nbsp&nbsp</span>' + json.abilities[3].displayName + ': ' + json.abilities[3].description;
		abilitiesdv.append(abilitiestext, ab1, ab2, ab3, ab4);

		const imagesdv = document.createElement('div');
		right.appendChild(imagesdv);
		const imagestext = document.createElement('h2');
		const fullportrait = document.createElement('img');
		const fullportraitv2 = document.createElement('img');
		imagestext.innerHTML = 'Images';
		fullportrait.src = json.fullPortrait;
		fullportraitv2.src = json.fullPortraitV2;
		imagesdv.append(imagestext, fullportrait, fullportraitv2);
	});
}

getData();