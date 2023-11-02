document.getElementById('fontButton').addEventListener('click', function() {
    if(document.body.style.fontFamily === 'Helvetica') {
       document.body.style.fontFamily = 'Times New Roman';
    } else {
       document.body.style.fontFamily = 'Helvetica';
    }
  });
 
document.getElementById('colorButton').addEventListener('click', function() {
    if(document.body.style.backgroundColor === 'black' && document.body.style.color === 'white') {
       document.body.style.backgroundColor = 'white';
       document.body.style.color = 'black';
    } else {
       document.body.style.backgroundColor = 'black';
       document.body.style.color = 'white';
    }
   });
   