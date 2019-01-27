const addNode = () => {
    let inText = document.getElementById('input_1').value;
    let newText = document.createTextNode(inText);

    let newGraf = document.createElement('p');
    newGraf.classList ? newGraf.classList.add('normalLine') : newGraf.className = 'normalLine';
    newGraf.appendChild(newText);

    let divbody = document.getElementById('napisy');
    divbody.appendChild(newGraf);

    for (let i = 0; i < divbody.getElementsByTagName('p').length; i++) {
        document.getElementById('wybor').options[i + 1] = new Option('Linia ' + (i + 1));
    }

    return false;
}

const beforeNode = () => {
    let inText = document.getElementById('input_1').value;
    let newText = document.createTextNode(inText);

    let newGraf = document.createElement('p');
    newGraf.classList ? newGraf.classList.add('normalLine') : newGraf.className = 'normalLine';
    newGraf.appendChild(newText);

    let divbody = document.getElementById('napisy');
    let pall = divbody.getElementsByTagName('p');
    let pselIndex = document.getElementById('wybor').selectedIndex - 1;
    divbody.insertBefore(newGraf, pall[pselIndex]);



    for (let i = 0; i < divbody.getElementsByTagName('p').length; i++) {
        document.getElementById('wybor').options[i + 1] = new Option('Linia ' + (i + 1));
    }

    return false;
}

const changeColor = () => {
    let pselIndex = document.getElementById('wybor').selectedIndex - 1;
    let divbody = document.getElementById('napisy');
    let pall = divbody.getElementsByTagName('p');
    for (let i = 0; i < pall.length; i++) {
        if (pall[i].className.indexOf('selectedLine') > -1) {
            pall[i].classList ?
                pall[i].classList.remove('selectedLine') : // Nie działa na starszych przeglądarkach
                pall[i].className = pall[i].className.replace('selectedLine', '');
        }
    }
    if (pselIndex + 1 > 0) {
        pall[pselIndex].classList ?
            pall[pselIndex].classList.add('selectedLine') : // Nie działa na starszych przeglądarkach
            pall[pselIndex].className += 'selectedLine';
    }
}

const findText = () => {
    let textSearched = document.getElementById('szukane').value;
    let divbody = document.getElementById('napisy');
    let pall = divbody.getElementsByTagName('p');
    for (let i = 0; i < pall.length; i++) {
        let oldText = pall[i].textContent;
        if (oldText.indexOf(textSearched) > -1) {
            pall[i].classList ?
                pall[i].classList.add('selectedWord') :
                pall[i].className += 'selectedWord';
        } else {
            pall[i].classList ?
                pall[i].classList.remove('selectedWord') :
                pall[i].className = pall[i].className.replace('selectedWord', '');
        }
    }
}

const deleteText = () => {
    let pselIndex = document.getElementById('wybor').selectedIndex - 1;
    let divbody = document.getElementById('napisy');
    let pall = divbody.getElementsByTagName('p');
    divbody.removeChild(pall[pselIndex]);
    document.getElementById('wybor').removeChild(
        document.getElementById('wybor').lastChild
    );
}

function initAll() {
    document.getElementsByTagName('form')[0].onsubmit = addNode;
    document.getElementById('wybor').onchange = changeColor;
    document.getElementById('wybor').options[0] = new Option('brak');
    document.getElementById('szukaj').onclick = findText;
    document.getElementById('delete').onclick = deleteText;
    document.getElementById('before').onclick = beforeNode;
}
window.onload = initAll;
