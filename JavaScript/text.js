 // jshint esversion: 6

 /*
  const pressToInput = () => {
      let input_1 = document.getElementById('input_1').value;
      const output_1 = document.getElementById('output_1');
      if (!input_1) {
          output_1.innerHTML = `Pole jest puste`;
      } else {
          output_1.innerHTML = input_1;
      }
  }
  
 const pressToColour = () => {
     let line = document.getElementsByClassName('selectedLine');
     let newColour = Math.floor(Math.random() * 255);
     line.style.color = `hsl(${newColour}, 80%, 80%)`;
 }
 
  */


 $(document).ready(() => {
     $('#addNode').on('click', () => {
         addNode();
     });
     $('#addNodeBefore').on('click', () => {
         beforeNode();
     });
     $('#selectP').on('change', () => {
         changeColor();
     });
     $('#selectP').append('<option>brak</option>');
     $('#deleteNode').on('click', () => {
         deleteText();
     });
 });

 const addNode = () => {
     let $input_1 = $('#input_1').val();
     let $divbody = $('#pContainer');
     let $paragraphs = $('#pContainer p');
     $divbody.append($(`<p class="normalLine">${$input_1}</p>`));
     
     $('#selectP').append(`<option>Linia ${$paragraphs.length+1}</option>`);

     return false;
 };

 const beforeNode = () => {
     let $input_1 = $('#input_1').val();
     let $paragraphs = $('#pContainer p');
     let $pselIndex = $('#selectP').prop('selectedIndex') - 1;
     $(`<p class="normalLine">${$input_1}</p>`).insertBefore($paragraphs.eq($pselIndex));
     
     $('#selectP').append(`<option>Linia ${$paragraphs.length+1}</option>`);

     return false;
 };

 const changeColor = () => {
     let pselIndex = document.getElementById('selectP').selectedIndex - 1;
     let divbody = document.getElementById('pContainer');
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
 };

 const deleteText = () => {
     let $paragraphs = $('#pContainer p');
     let $pselIndex = $('#selectP').prop('selectedIndex') - 1;
     $paragraphs.eq($pselIndex).remove();
     $('#selectP option:last-child').remove();
 };


 /*

  // jshint esversion: 6


  $(document).ready(() => {
      document.getElementById('addNode').onclick = addNode;
      document.getElementById('addNodeBefore').onclick = beforeNode;
      document.getElementById('selectP').onchange = changeColor;
      document.getElementById('selectP').options[0] = new Option('brak');
      document.getElementById('deleteNode').onclick = deleteText;
  });

  const addNode = () => {
      let input_1 = document.getElementById('input_1').value;
      let newText = document.createTextNode(input_1);

      let newGraf = document.createElement('p');
      newGraf.classList ? newGraf.classList.add('normalLine') : newGraf.className = 'normalLine';
      newGraf.appendChild(newText);

      let divbody = document.getElementById('pContainer');
      divbody.appendChild(newGraf);

      for (let i = 0; i < divbody.getElementsByTagName('p').length; i++) {
          document.getElementById('selectP').options[i + 1] = new Option('Linia ' + (i + 1));
      }

      return false;
  };

  const beforeNode = () => {
      let inText = document.getElementById('input_1').value;
      let newText = document.createTextNode(inText);

      let newGraf = document.createElement('p');
      newGraf.classList ? newGraf.classList.add('normalLine') : newGraf.className = 'normalLine';
      newGraf.appendChild(newText);

      let divbody = document.getElementById('pContainer');
      let pall = divbody.getElementsByTagName('p');
      let pselIndex = document.getElementById('selectP').selectedIndex - 1;
      divbody.insertBefore(newGraf, pall[pselIndex]);



      for (let i = 0; i < divbody.getElementsByTagName('p').length; i++) {
          document.getElementById('selectP').options[i + 1] = new Option('Linia ' + (i + 1));
      }

      return false;
  };

  const changeColor = () => {
      let pselIndex = document.getElementById('selectP').selectedIndex - 1;
      let divbody = document.getElementById('pContainer');
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
  };

  const deleteText = () => {
      let pselIndex = document.getElementById('selectP').selectedIndex - 1;
      let divbody = document.getElementById('pContainer');
      let pall = divbody.getElementsByTagName('p');
      divbody.removeChild(pall[pselIndex]);
      document.getElementById('selectP').removeChild(
          document.getElementById('selectP').lastChild
      );
  };

 */
