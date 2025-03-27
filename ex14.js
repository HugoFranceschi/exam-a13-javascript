function filtrerAdultes(utilisateurs) {
	let resultat = [];

	for (let i = 0; i < utilisateurs.length; i++) {
		let utilisateur = utilisateurs[i];

		if (utilisateur.age >= 18) {
			resultat.push({ nom: utilisateur.nom, age: utilisateur.age });
		}
	}

	return resultat;
}

console.log(
	filtrerAdultes([
		{ nom: "Alice", age: 17 },
		{ nom: "Bob", age: 20 },
		{ nom: "Charlie", age: 18 },
	])
);
// Résultat attendu : [{nom: "Bob", age: 20}, {nom: "Charlie", age: 18}]
console.log(
	filtrerAdultes([
		{ nom: "Luis", age: 27 },
		{ nom: "Diego", age: 20 },
		{ nom: "Maxime", age: 8 },
	])
);
// Résultat attendu : [{nom: "Luis", age: 27}, {nom: "Diego", age: 20}]
