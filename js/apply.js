function showForm(formNumber) {
  // Hide all major application forms
  var forms = Array.from(document.querySelectorAll('#catalog > div'));
  forms.forEach(function (form) {
    form.style.display = 'none';
  });

  // Reset background color of all headers
  var headers = Array.from(document.querySelectorAll('#catalog > h4'));
  headers.forEach(function (header) {
    header.style.backgroundColor = 'lightgrey';
  });

  // Change the background color of the clicked header to white
  headers[formNumber - 1].style.backgroundColor = 'white';

  // Show the corresponding major application form
  var formToShow = document.querySelector('#form' + formNumber);
  formToShow.style.display = 'flex';
  formToShow.style.flexWrap = 'wrap';
}

// Get all the "rank of choice" buttons
const buttons = document.querySelectorAll('button[type="submit"]');

// Array of major names
const majorNames = [
  "BSc in Computer Science and Technology",
  "BEng in Electronic Information",
  "BEng in Materials Science and Engineering",
  "BEng in Materials and Chemicals",
  "BSc in Electronic Science and Technology",
  "BSc in Physics",
  "BSc in Chemistry",
  "BSc in Biology",
  "BSc in Cognitive Science",
  "BEng in Biomedical Engineering",
  "BSc in Biology and Medicine"
];

// Initialize empty arrays to keep track of chosen ranks and majors
var chosenRanks = [];
var chosenMajors = [];

// Add event handlers to each button
buttons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    // Get the major name and college from the corresponding input field and label
    const majorName = majorNames[index];
    let collegeName = '';

    // Determine the college name based on the form the button belongs to
    if (index >= 0 && index < 5) {
      collegeName = 'College of Engineering';
    } else if (index >= 5 && index < 8) {
      collegeName = 'College of Science';
    } else if (index >= 8 && index < 11) {
      collegeName = 'College of Interdisciplinary Studies';
    }

    // Get the rank input value
    var rankInput = document.getElementById(`major${index + 1}`);
    var rankValue = Number(rankInput.value.trim());

    // Check if the rank input is empty or not a valid integer
    if (isNaN(rankValue) || !Number.isInteger(rankValue)) {
      alert('Please enter the rank of the chosen major');
      return;
    }

    // Check if the rank is within the valid range of 1 to 10
    if (rankValue < 1 || rankValue > 10) {
      alert('Please enter the rank of chosen between 1 and 10');
      return;
    }

    // Check if the major is already chosen
    if (chosenMajors.includes(majorName)) {
      alert('You have already chosen this major');
      return;
    }

    // Check if the rank is already chosen
    if (chosenRanks.includes(rankValue)) {
      alert('You have already chosen this rank');
      return;
    }

    // Add the chosen rank and major to the respective arrays
    chosenRanks.push(rankValue);
    chosenMajors.push(majorName);

    // Display the alert message
    const ordinal = getOrdinal(rankValue);
    alert(`You have chosen ${majorName} as your ${ordinal} chosen major in ${collegeName} successfully`);

    for (let i = 1; i < 11; i++) {
      if (rankValue == document.getElementById(`rank_${i}`).innerHTML) {
        const rankCell = document.querySelector(`#college_${i}`);
        rankCell.textContent = collegeName;
        const majorCell = document.querySelector(`#major_${i}`);
        majorCell.textContent = majorName;
        rankInput.value = '';
        updateTable();
        document.getElementById("error").innerHTML = '';
      }
    }
    if (rankValue > parseInt(lowest)) {
      lowest = rankValue;
    }
  });


});

// Helper function to get the ordinal word for a given number
function getOrdinal(number) {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const remainder = number % 100;
  const suffix = suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
  return number + suffix;
}


// Update the result table with the chosen major
function updateTable() {

  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  document.getElementById('time').innerHTML = "Last change time:" + date + " " + time;
  document.getElementById("num").innerHTML = "Total Number of Majors Applied:" + " " + chosenMajors.length;

}



var lowest = 1;

document.getElementById('submit').onclick = function () {
  var gap = [];
  for (let i = 1; i <= lowest; i++) {
    if (document.getElementById(`major_${i}`).innerHTML == '') {
      gap.push(i);
    }
  }
  var filledRows = 0;
  for (let k = 1; k < 11; k++) {
    if (document.getElementById(`major_${k}`).innerHTML !== '') {
      filledRows++;
    }
  }



  var gapstr = '';
  for (var i = 0; i < gap.length; i++) {
    if (i === gap.length - 1 && gap.length > 1) {
      gapstr += " and " + getOrdinal(gap[i]) + " chosen major,";
    }
    else {
      gapstr += " " + getOrdinal(gap[i]) + " chosen major,";
    }
  }
  if (gap.length > 0 && filledRows != 0) {
    document.getElementById("error").innerHTML = "You have not chosen your" + gapstr + " you can not leave any gap between your majors";
    document.getElementById("error").setAttribute("style", "display : block ; color: red; text-align: center; margin: 8px;");
  }
  else if (filledRows == 0) {
    document.getElementById("error").innerHTML = "You have not chosen any major.";
    document.getElementById("error").setAttribute('style', 'display : block ; color: red; text-align: center; margin: 8px;');

  }

  else {
    var date = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();
    document.getElementById("error").innerHTML = "You have successfully submitted your application at time " + date + " " + time;
    document.getElementById("error").setAttribute("style", " display : block ; color: red; text-align: center; margin: 10px;");
    updateTable();
  }
};

document.getElementById('reset').onclick = function () {
  for (var p = 1; p <= lowest; p++) {
    document.getElementById(`major_${p}`).innerHTML = '';
    document.getElementById(`college_${p}`).innerHTML = '';

  }
  updateTable();
  document.getElementById("num").innerHTML = "Total Number of Majors Applied:" + " " + '0';
  document.getElementById("error").innerHTML = '';
  chosenMajors = [];
  chosenRanks = [];
};