 // jshint esversion: 6

 const newDate = () => {
     let date1 = new Date();
     let hours1 = date1.getHours();
     let minutes1 = date1.getMinutes();
     let day1 = date1.getDate();
     let month1 = date1.getMonth();
     month1++;
     let year1 = date1.getFullYear();
     let seconds1 = date1.getSeconds();
     
     let hours2 = hours1;
     let minutes2 = minutes1;
     let seconds2 = seconds1;
     let month2 = month1;
     let day2 = day1;
     
     if (hours1 < 10) {
         hours2 = `0${hours1}`;
     }
     if (minutes1 < 10) {
         minutes2 = `0${minutes1}`;
     }
     if (seconds1 < 10) {
         seconds2 = `0${seconds1}`;
     }   
     if (month1 < 10) {
         month2 = `0${month1}`;
     }  
     if (day1 < 10) {
         day2 = `0${day1}`;
     } 
         document.getElementById('clock').innerHTML = `${hours2}:${minutes2}:${seconds2} |  ${day2}/${month2}/${year1}`;
     
 }

setInterval(newDate, 1000);