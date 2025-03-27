function estDivisible(a, b) {
	if (a % b == 0) {
		return true;
	} else {
		return false;
	}
}

console.log(estDivisible(10, 2)); // Résultat attendu : true
console.log(estDivisible(10, 3)); // Résultat attendu : false
