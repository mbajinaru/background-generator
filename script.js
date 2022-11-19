//seteaza un background bazat pe gradient folosind doua selectoare de culoare pe care utilizatorul le poate modifica

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//afiseaza pe pagina gradientul initial
function initGradient() {
	var init = body.style.background = 
	"linear-gradient(to right," 
	+ color1.value + 
	", " 
	+ color2.value 
	+")";
	console.log(init);
	css.textContent = body.style.background + ";";
}

initGradient()

// console.log(css);;
// console.log(color1);
// console.log(color2);

//functia ce seteaza gradientul folosind doua culori alese de utilizator
function setGradient() {
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value + 
	", " 
	+ color2.value 
	+")";

	css.textContent = body.style.background + ";"; //iti arata pe pagina un text cu valorile RGB folosite pt gradient
}

//triggerele pentru selectia culorilor de catre utilizator
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);