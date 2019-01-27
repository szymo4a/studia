window.onload = function(){
	document.getElementById('reSize').onclick = changeSize;
	document.getElementById('reColour').onchange = changeColour;
	document.getElementById('vanish').onmouseover = vanish;
	document.getElementById('vanish').onmouseout = unvanish;
}

const changeSize = () => {
	let newVal = document.getElementById('boxSize').value;
	let box1 = document.getElementById('box1');
	box1.style.width = `${newVal}px`;
	box1.style.height = `${newVal}px`;
}

const changeColour = () => {
	let newColour = document.getElementById('reColour').value;
	let box1 = document.getElementById('box1');
	box1.style.backgroundColor = newColour;
}

const vanish = () => {
	let box1 = document.getElementById('box1');
	box1.style.visibility = 'hidden';
}

const unvanish = () => {
	let box1 = document.getElementById('box1');
	box1.style.visibility = 'visible';
}