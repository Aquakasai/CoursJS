const anagrams = (stringA, stringB) => {
	
	if(stringA.lenngth == stringB.length){
		let var1 = stringA.split('').sort().join('');
		let var2 = stringB.split('').sort().join('');
	
		return (s1 === s2);
	}
	return false;
	
  /**
   * stringA est égale à stringB si et seulement s'ils partagent les mêmes
   * caractères alphabétiques dans la même quantité.
   * La case n'est pas pris en compte
   *
   * Exemples :
   *
   * anagrams('rail safety', 'fairy tales') === true
   * anagrams('RAIL! SAFETY!', 'fairy tales') === true
   * anagrams('Hi there', 'Bye there') === false
   */

};


class Stack {
	
	constructor() {
	this.out = -1;
	this.first = -1;
	this.tab = new Array();
  }
	
	push(n){

		this.tab.push(n);
	}
	
	peek() {
		return this.tab[this.first];
	}
	
	pop(){
		
		return this.tab.pop();
	}
	
	
/**
 * Créer une structure d'empilement. La structure doit être
 * une classe contenant les méthodes :
 *  - `push`: pour ajouter un élément au bout de l'empilement,
 *  - `pop` pour retirer le dernier élément et le retourner;
 *  - et `peek` pour récupérer le premeier élément.
 *
 * Exemples :
 *
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.push(3);
 * s.pop(); // returns 3
 * s.pop(); // returns 2
 * s.peek(); // returns 1
 */
};


const fizzBuzz = (n) => {
	
	for(cpt = 1; cpt <= n; cpt++){
		
		if( cpt%3 != 0 &&  cpt%5 != 0){
			console.log(cpt);
		}
		else {
			if(cpt%3 == 0 && cpt%5 == 0){
				console.log('fizzbuzz');
			} else {
				if(cpt%3 == 0){
					console.log('fizz');
				}
				if(cpt%5 == 0){
					console.log('buzz');
				}
			}
		}
	}		
/**
 * Affiche les nombres de 1 à n, en remplaçant les multiples de 3 par fizz et 
 * les multiples de 5 par buzz
 *
 * Exemple :
 *
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

};

const spirale = (n) => {
	
	let i = 1;
	
	let x = new Array(n);
	
	for (i=0; i < n; i++){
		  x[i] = new Array(n);
	}
	
	for( cpt = 0; cpt < n; cpt++){
		x[cpt][cpt2] = i;
		i++;	
	}
	
	for(cpt = 1;cpt < n; cpt++){
		x[cpt][n-1] = i;
		i++;
	}
	
	for(cpt = n-1;cpt > 0; cpt--){
		x[n-1][n-1] = i;
		i++;
	}
	
	
	return x;
	
/**}
 * Retourne une matrice spirale de taille n x n.
 *
 * Exemples :
 *
 * matrix(2) = [[1, 2],
 *              [4, 3]]
 *
 * matrix(3) = [[1, 2, 3],
 *              [8, 9, 4],
 *              [7, 6, 5]]
 *
 * matrix(4) = [[1,   2,  3, 4],
 *              [12, 13, 14, 5],
 *              [11, 16, 15, 6],
 *              [10,  9,  8, 7]]
 */

};


const puissance4 = (grid) => {
/**
 * Vérifie si un joueur a gagné au puissance 4,
 * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
 *
 * Exemples :
 *
 * puissance4(
 *  [[ 1, 0, 0, 0 ],
 *   [ 2, 1, 0, 0 ],
 *   [ 2, 1, 1, 2 ],
 *   [ 2, 1, 1, 2 ]]
 *   ) = 1
 * )
 *
 * puissance4(
 *  [[ 1, 1, 0, 0, 0 ],
 *   [ 2, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 *
 * puissance4(
 *  [[ 1, 2, 0, 0, 0 ],
 *   [ 1, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 */
}

module.exports = {
  fizzBuzz,
  puissance4,
  spirale,
  anagrams,
  Stack
}