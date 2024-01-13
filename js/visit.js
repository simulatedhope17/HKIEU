// Get reference to the form and the error message element
var form = document.querySelector("form");
var target = document.querySelector("#visitors_in");
var errorMessage = document.createElement('div');

// Function to display the error message
function displayErrorMessage(message) {
  errorMessage.textContent = message;
  errorMessage.style.color = 'red';
  errorMessage.style.margin = '2%';
  errorMessage.style.marginLeft = '20%';
  target.insertBefore(errorMessage, target.lastChild);
}

// Function to remove all error messages
function removeErrorMessage() {
  if (errorMessage.parentNode) {
    errorMessage.parentNode.removeChild(errorMessage);
  }
}

// Function to handle form reset
function handleReset() {
  // Clear any previous error messages
  removeErrorMessage();
}



// Function to check if the input is empty or contains only spaces
function isEmptyInput(value) {
  return value.trim().length === 0;
}

// Function to check if the number of visitors is valid
function isValidNumberOfVisitors(value) {
  var parsedValue = parseInt(value);
  return !isNaN(parsedValue) && parsedValue >= 1 && Number.isInteger(parsedValue);
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Clear any previous error messages
  removeErrorMessage();

  // Get the form inputs
  var dateInput = document.getElementById('date');
  var timeInput = document.getElementById('time');
  var visitorsInput = document.getElementById('visitors');

  // Get the values from the inputs
  var dateValue = dateInput.value;
  var timeValue = timeInput.value;
  var visitorsValue = visitorsInput.value;

  // Check if any field is empty or contains only spaces
  if (
    isEmptyInput(dateValue) ||
    isEmptyInput(timeValue) ||
    isEmptyInput(visitorsValue)
  ) {
    displayErrorMessage('Data not completed, please re-enter.');
    return; // Stop further processing
  }

  // Check if the number of visitors is valid
  const visitors = parseInt(visitorsInput.value, 10);
  if (isNaN(visitors) || visitors < 1 || visitorsInput.value !== visitors.toString()) {
    displayErrorMessage("Please enter a valid number of people!");
    return;
  }

  // Call the reserve function with the form data
  var reservationResult = reserve(dateValue, timeValue, visitorsValue);

  // Display appropriate message based on the reservation result
  if (reservationResult) {
    removeErrorMessage();
    setTimeout(function () {
      alert('Your reservation is successful!');
    }, 0);
  } else {
    removeErrorMessage();
    setTimeout(function () {
      alert('Sorry, the reservation is full!');
    }, 0);
  }
}

// Attach the form submission handler
form.addEventListener('submit', handleSubmit);

// Attach the form reset handler
form.addEventListener('reset', handleReset);
