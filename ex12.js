function filtrerLongsMots(mots) {
	let resultat = [];
	for (let i = 0; i < mots.length; i++) {
		if (mots[i].length > 5) {
			resultat[resultat.length] = mots[i];
		}
	}
	return resultat;
}

console.log(filtrerLongsMots(["chat", "éléphant", "chien", "lion"])); // Résultat attendu : ["éléphant"]
console.log(
	filtrerLongsMots(["counter-strike", "valorant", "overwatch", "diablo"])
); // Résultat attendu : ["counter-strike", "valorant", "overwatch", "diablo"]
