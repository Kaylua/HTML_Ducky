function addition(nbr1, nbr2) // fonction addition
{
	let resultat = nbr1 + nbr2;
	return resultat;
}

function setUserName() 
{
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  mySoustitre.textContent = 'Je vais te démarrer ' + myName;
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


document.querySelector('h1').addEventListener('click', function()
{
    alert('Fais plus jamais ça batard');
});


/* 
document.querySelector('img').addEventListener('click', function()
est la meme chose que :
let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {});
*/

let myImage = document.querySelector('img'); // tout ça sert à switch d'image qd on clickd sur le canard

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/ducky2.gif') {
      myImage.setAttribute('src', 'images/ducky.gif');
    } else {
      myImage.setAttribute('src', 'images/ducky2.gif');
    }
});


let myButton = document.querySelector('button');
let mySoustitre = document.querySelector('h2');

if (!localStorage.getItem('nom')) 
{
  setUserName();
} 
else 
{
  let storedName = localStorage.getItem('nom');
  mySoustitre.textContent = 'Je vais te démarrer ' + storedName;
}

myButton.addEventListener('click', function() {
  setUserName();
});
