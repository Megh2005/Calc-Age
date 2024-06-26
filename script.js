alert(
  "This project is for innovation purposes. I don't have any intention to look down upon any belief. For information mail to iammeghdeb@gmail.com"
);

document.getElementById("calculate-age").addEventListener("click", function () {
  const birthdate = document.getElementById("birthdate").value;
  if (birthdate) {
    const age = calculateAge(new Date(birthdate));
    displayAge(age);
  } else {
    displayAge("Please enter a valid birthdate.");
  }
});

function calculateAge(birthdate) {
  const today = new Date();
  let years = today.getFullYear() - birthdate.getFullYear();
  let months = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

function displayAge(age) {
  const ageResultElement = document.getElementById("age-result");
  if (age.years >= 0) {
    ageResultElement.innerText = `You are ${age.years} years ${age.months} months and ${age.days} days old.`;
  } else {
    ageResultElement.innerText = "Please enter a valid birthdate.";
  }

  // GSAP animation
  gsap.fromTo(
    ageResultElement,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 1 }
  );
}

document.getElementById("toggle-mode").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", this.checked);
});

const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", function () {
  window.location.href = "contact.html";
});

const homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click", function () {
  window.location.href = "/";
});
