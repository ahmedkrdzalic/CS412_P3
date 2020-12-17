//I will need this values to send e-mail after filling the form
var nameForm = document.getElementById("nameForm").value;
var emailForm = document.getElementById("emailForm").value;
var messageForm = document.getElementById("messageForm").value;


function popupForm() {
	document.querySelector('.bg-modal').style.display = 'flex';
};
// This function will be implemented with PHP to store data from form
function sendForm() {
};

function closeForm() {
	document.querySelector('.bg-modal').style.display = 'none';
};




