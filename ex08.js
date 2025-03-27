function multiplierParDeux(tab) {
	let resultat = [];
	for (let i = 0; i < tab.length; i++) {
		resultat[i] = tab[i] * 2;
	}
	return resultat;
}
console.log(multiplierParDeux([1, 2, 3])); // Résultat attendu : [2, 4, 6]
