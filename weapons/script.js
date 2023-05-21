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
	fetch('https://valorant-api.com/v1/weapons?language=' + lang)
	.then(res => res.json())
	.then(data => {
		const json = data.data;
		console.log(json);

		for(let i = 0; i < json.length - 1; i++){
			const card = document.createElement('div');
			card.classList.add('card');
			right.appendChild(card);

			const icon = document.createElement('img');
			const name = document.createElement('h3');
			const category = document.createElement('p');
			category.classList.add('category');
			const cost = document.createElement('p');
			const stats = document.createElement('p');
			const damage = document.createElement('p');

			icon.src = json[i].displayIcon;
			name.innerHTML = json[i].displayName;
			category.innerHTML = json[i].shopData.categoryText;
			cost.innerHTML = 'Cost: ' + json[i].shopData.cost;
			stats.innerHTML = json[i].weaponStats.adsStats != null ? 'Stats: <br>' + 'Magazine: ' + json[i].weaponStats.magazineSize + '<br>' + 'Reload time: ' + json[i].weaponStats.reloadTimeSeconds + 's' + '<br>' + 'Fire rate: ' + json[i].weaponStats.fireRate + '<br>' + 'Equip time: ' + json[i].weaponStats.equipTimeSeconds + 's' + '<br>' + 'Zoom: ' + json[i].weaponStats.adsStats.zoomMultiplier + 'x' : 'Stats: <br>' + 'Magazine: ' + json[i].weaponStats.magazineSize + '<br>' + 'Reload time: ' + json[i].weaponStats.reloadTimeSeconds + 's' + '<br>' + 'Fire rate: ' + json[i].weaponStats.fireRate + '<br>' + 'Equip time: ' + json[i].weaponStats.equipTimeSeconds + 's';

			damage.innerHTML = 'Damage: <br>' + 'Body: ' + json[i].weaponStats.damageRanges[0].bodyDamage + '<br>' + 'Head: ' + json[i].weaponStats.damageRanges[0].headDamage + '<br>' + 'Leg: ' + json[i].weaponStats.damageRanges[0].legDamage + '<br>' + 'Range: ' + json[i].weaponStats.damageRanges[0].rangeStartMeters + '-' + json[i].weaponStats.damageRanges[0].rangeEndMeters + 'm';

			card.append(icon, name, category, stats, damage);
		}

	});
}

getData();