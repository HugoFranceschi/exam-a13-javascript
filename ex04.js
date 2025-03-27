function estNegatif(nombre) {
	if (0 >= nombre) {
		return true;
	} else {
		return false;
	}
}

console.log(estNegatif(-3)); // Résultat attendu : true
console.log(estNegatif(5)); // Résultat attendu : false
