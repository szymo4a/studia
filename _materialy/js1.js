let interval = setInterval(function(){colorBoxFunc();}, 2000);
const Colors = ['red', 'lightgreen', 'lightblue', 'yellow', 'pink', 'white', 'darkorange', 'aqua'];
let colorBox = document.getElementById('epilepsy');
const colorBoxFunc = () => {
	let randomColor = Math.floor(Math.random()*7);
	if (colorBox.style.backgroundColor == Colors[randomColor]) {
		colorBox.style.backgroundColor = Colors[randomColor-1];
	} else {
	colorBox.style.backgroundColor = Colors[randomColor];
	}
}