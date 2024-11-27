// JAVA //

// general layout (navbar)
// when clicked, drpdwn shows
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// HOME PAGE //

// Set the date we're counting down to
var countDownDate = new Date("Aug 30, 2024 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
  
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element 
  document.getElementById("star-wars").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("star-wars").innerHTML = "EXPIRED";
  }
}, 1000);

// pie chart

var xValues = ["Positive", "Mixed", "Negative"];
var yValues = [55, 49, 44];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Our Review Breakdown"
    }
  }
});



// CONTACT PAGE //
// contact form

// Function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) == 0) {
          return c.substring(nameEQ.length, c.length);
      }
  }
  return null;
}

// Function to validate email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Function to handle form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = contactForm.elements.name.value;
  const email = contactForm.elements.email.value;
  const message = contactForm.elements.message.value;

  if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
  }

  if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  // Set cookies with form data
  setCookie("contactName", name, 30); // Cookie expires in 30 days
  setCookie("contactEmail", email, 30);
  setCookie("contactMessage", message, 30);

  alert('Message sent successfully!');
});



// RATING PAGE
// rating page form

document.getElementById("gameRatingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const gameName = document.getElementById("gameName").value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    document.getElementById("message").innerHTML = `Thank you for rating "${gameName}" with a rating of ${rating}/5 stars.`;
    document.getElementById("gameRatingForm").reset();
});

// validate form 

document.getElementById("gameRatingForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const gameName = document.getElementById("gameName").value;
  const rating = document.querySelector('input[name="rating"]:checked');
  if (!rating) {
      alert("Please select a rating.");
      return;
  }
  const ratingValue = rating.value;
  document.getElementById("message").innerHTML = `Thank you for rating "${gameName}" with a rating of ${ratingValue}/5 stars.`;
  document.getElementById("gameRatingForm").reset();
});





// GAME COMPARISON

function calculateDifference() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);

  if (!isNaN(num1) && !isNaN(num2)) {
    var difference = num1 - num2;
    document.getElementById('result').innerHTML = "The difference is: " + difference;
  } else {
    document.getElementById('result').innerHTML = "Please enter valid numbers.";
  }
}