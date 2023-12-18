const newOrder = [5, 6, 7, 8, 9, 4, 3, 2, 1, 0, '*', '#'];

document.querySelectorAll('#buttons button').forEach(button => {
    button.addEventListener('click', () => {
      const phoneNumber = document.querySelector('#phoneNumber');
      phoneNumber.value += button.innerText;

      // confirm modal
      document.querySelector('#confirmModal').style.display = "block";
    });
});

document.querySelector('#confirmYes').addEventListener('click', () => {
    const popupText = document.querySelector('#popup p').innerHTML;
   if (popupText === "Try again") {
       document.querySelector('#popup p').innerHTML = "Confirm?";
   }
    document.querySelector('#confirmModal').style.display = "none";

   // rearrange the buttons
   const buttons = Array.from(document.querySelectorAll('#buttons button'));
   newOrder.forEach((index, newIndex) => {
       buttons[index].parentNode.insertBefore(buttons[index], buttons[newIndex]);
   });
});

document.querySelector('#confirmNo').addEventListener('click', () => {
    document.querySelector('#popup p').innerHTML = "Try again";
});

document.getElementById('submitButton').addEventListener('click', function() {
    var confirmation = confirm("Are you sure you want to sign up for our newsletter?");
    if (confirmation) {
        // User clicked "OK"
        // Perform sign up operation here
        alert ("Thanks for signing up! The chances of us sending you something important are slim to none. We just wanted more of your data ($$$)!!")

        // Clear the phone number input field
       document.querySelector('#phoneNumber').value = "";
    } else {
        // User clicked "Cancel"
        // Perform cancel operation here
        alert ("Lol you thought we'd let you get out of this?")
    }
});
 