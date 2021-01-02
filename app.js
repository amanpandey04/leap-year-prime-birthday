const input = document.querySelector("#input");
const outputPrime = document.querySelector("#output-1");
const outputLeap = document.querySelector("#output-2");
const btn = document.querySelector("#btn");

function eventHandler() {
  // To check if birthday is prime
  const inputDate = new Date(input.value).getDate();

  for (let i = 2; i < inputDate; i++) {
    if (inputDate % i === 0) {
      outputPrime.innerText = "Your birthday is not a prime number.";
      break;
    } else {
      outputPrime.innerText = "Your birthday is a prime number.";
      break;
    }
  }

  // To check if birthday is a leap year
  const inputYear = new Date(input.value).getYear();

  if (inputYear % 4 === 0 || inputYear % 100 === 0 || inputYear % 400 === 0) {
    outputLeap.innerText = "Your birthday is a leap year.";
  } else {
    outputLeap.innerText = "Your birthday is not a leap year.";
  }
}

btn.addEventListener("click", eventHandler);
