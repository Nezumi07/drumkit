// sounds

let openHat = new Audio("sounds/openhat.wav")
let hihat = new Audio("sounds/hihat.wav")
let tom = new Audio("sounds/tom.wav")
let floortom = new Audio("sounds/floortom.wav")
let crash = new Audio("sounds/crash.wav")
let ride = new Audio("sounds/ride.wav")
let tink = new Audio("sounds/tink.wav")
let snare = new Audio("sounds/snare.wav")
let bass = new Audio("sounds/bass.wav")

//triggers

const audio = document.getElementById("audio");
// let trigger = document.createElement("audio");



document.addEventListener("keydown", (event) =>{

	let keyDown = event.key;
	console.log("pressing key")
	console.log(keyDown)
	if (keyDown == "e"){
	openHat.play();
	openHat.currentTime = 0;
	openHat.style.background = "orange";
	h1.style.color = "purple";
	h1.style.fontSize = "60px";



	}

	else if (keyDown == "r"){
	hihat.play();
	hihat.currentTime = 0;
	// hihat.style.color = "red";
	h1.style.color = "red";
	h1.style.fontSize = "60px";
	}

	else if (keyDown == "t"){
		tom.play();
		tom.currentTime = 0;
		h1.style.color = "red";
		h1.style.fontSize = "60px";
	}

	else if (keyDown == "y"){
		floortom.play();
		floortom.currentTime = 0;
		h1.style.color = "red";
		h1.style.fontSize = "60px";
	}

	else if (keyDown == "u"){
		crash.play();
		crash.currentTime = 0;
		h1.style.color = "red";
		h1.style.fontSize = "60px";
	}

	else if (keyDown == "i"){
		ride.play();
		ride.currentTime = 0;
		h1.style.color = "red";
		h1.style.fontSize = "60px";
	}

	else if (keyDown == "c"){
		tink.play();
		tink.currentTime = 0;
		h1.style.color = "red";
		h1.style.fontSize = "60px";
	}

	else if (keyDown == "v"){
		snare.play();
		snare.currentTime = 0;
		h1.style.color = "red";
		h1.style.fontSize = "60px";
	}	

	else if (keyDown == "b"){
		bass.play();
		bass.currentTime = 0;
			h1.style.color = "red";
		h1.style.fontSize = "60px";	
	}

})

//key not pressed

document.addEventListener("keyup", () => {
	openHat.style.backgroundColor = "#2b2f4b";
	h1.style.color = "white";
	h1.style.fontSize = "40px";

});

//button variable
// const btnOpenhat = document.getElementById("openhat");



// document.addEventListener("keypress", (event) => {
// 	if (event.key == "e") {
// 		audioClap.src = "sounds/openhat.wav";
// 		openHat.style.backgroundColor = "red";
		// h1.style.color = "#3B62B1";
		// h1.style.fontSize = "90px";
// 	}
// });




const button = document.querySelector("button");
const h1 = document.querySelector("h1");