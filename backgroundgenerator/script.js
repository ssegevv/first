
/*BACKGROUND COLOR*/
const colourBackground = () => {
	const color1 = document.querySelector('.color1');
	const color2 = document.querySelector('.color2');
	const gradientNum = document.querySelector('h3');
	
	const colorEvent = () => {
		const body = document.getElementById('gradient');
		body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
		gradientNum.textContent = `${body.style.background};`;
	}

	color1.addEventListener("input", colorEvent);
	color2.addEventListener("input", colorEvent);
}
colourBackground()


/*BUTTON RANDOM COLOR*/

const buttonHexColour = () => {

	const randomNumTxt = document.getElementById('Random');
	const button = document.querySelector('button');

	const randomHexArray = [ 
		1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'
	];	

	const getCharacter = (index) => {
	return randomHexArray[index];
	}

	const getRandomNumber = () => {
		return Math.floor(Math.random() * 15);
	}

	const genColorNumber = () => {
		let hexLadder = ('#');
		for(i=0; i<6; i++) {
			let character = getCharacter(getRandomNumber());
			hexLadder += character;
		}
		return hexLadder;
	}

	const buttonPress = () => {
		button.addEventListener('click', () => {
			randomNumTxt.textContent = genColorNumber();
		});
	}
	buttonPress()
}
buttonHexColour()