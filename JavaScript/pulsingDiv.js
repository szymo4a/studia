 // jshint esversion: 6

 $(document).ready(() => {
     document.getElementById('vanish').onmouseover = vanish;
     document.getElementById('vanish').onmouseout = unvanish;
     document.getElementById('startColour').onclick = startTimer;
     document.getElementById('stopColour').onclick = stopTimer;
 });

 const colourBoxFunc = () => {
     let colourBox = document.getElementById('div3');
     let newDivColour = Math.floor(Math.random() * 360);
     colourBox.style.backgroundColor = `hsl(${newDivColour}, 85%, 65%)`;
 };
 const startTimer = () => {
     console.log("Start");
     colourInt = setInterval(colourBoxFunc, 1000);
 };

 const stopTimer = () => {
     console.log("Stop");
     window.clearInterval(colourInt);
 };

 const moveDiv_3 = (direction) => {
     let colourBox = document.getElementById('div3');
     let topVal = parseInt(getComputedStyle(colourBox).getPropertyValue("top"));
     let leftVal = parseInt(getComputedStyle(colourBox).getPropertyValue("left"));
     //console.log("top: " + parseInt(getComputedStyle(colourBox).getPropertyValue("top")));
     //console.log("left: " + parseInt(getComputedStyle(colourBox).getPropertyValue("left")));
     switch (direction) {
         case 'up':
             topVal -= 50;
             break;
         case 'down':
             topVal += 50;
             break;
         case 'left':
             leftVal -= 50;
             break;
         case 'right':
             leftVal += 50;
             break;
         case 'reset':
             topVal = 250;
             leftVal = 250;
             colourBox.style.top = `${topVal}px`;
             colourBox.style.left = `${leftVal}px`;
             break;
     }

     colourBox.style.top = `${topVal}px`;
     colourBox.style.left = `${leftVal}px`;
 };

 const checkMoveDiv_3 = () => {
     let colourBox = document.getElementById('div3');
     let topVal = parseInt(getComputedStyle(colourBox).getPropertyValue("top"));
     let leftVal = parseInt(getComputedStyle(colourBox).getPropertyValue("left"));
     if (topVal <= 0) {
         topVal = 0;
         colourBox.style.top = `${topVal}px`;
     } else if (topVal >= 500) {
         topVal = 500;
         colourBox.style.top = `${topVal}px`;
     }
     if (leftVal <= 0) {
         leftVal = 0;
         colourBox.style.left = `${leftVal}px`;
     } else if (leftVal >= 500) {
         leftVal = 500;
         colourBox.style.left = `${leftVal}px`;
     }
 };
 setInterval(checkMoveDiv_3, 250);


 const vanish = () => {
     let div3 = document.getElementById('div3');
     div3.style.opacity = '0';
 };

 const unvanish = () => {
     let div3 = document.getElementById('div3');
     div3.style.opacity = '1';
 };
