function addition(nbr1, nbr2) // fonction addition
{
	let resultat = nbr1 + nbr2;
	return resultat;
}

let myHeading = document.querySelector('h1'); // myHeading prend la fonction querySelector

let variable;
variable = [1, 'Dancing Dukcy on fire, prêt à ravager le game', 3];
myHeading.textContent = variable[1]; // affiche le txt contenu dans variable[1] avec myHeading

let calcul = addition(1, 2);

if(calcul === 3)
{
	//alert("POULEEEET"); // affiche une popup avc la fonction alert
}

document.querySelector('img').addEventListener('click', function() 
{
    alert('Fais plus jamais ça batard');
});
