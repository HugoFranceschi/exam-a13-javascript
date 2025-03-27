function longueursMots(mots) {
	let resultat = [];
	for (let i = 0; i < mots.length; i++) {
		resultat[i] = mots[i].length;
	}
	return resultat;
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]
