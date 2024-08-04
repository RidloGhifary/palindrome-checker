const checkButton = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");
const result = document.querySelector("#result");

const strong = document.createElement("strong");

function handleCheckInput() {
  const text = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (text.length === 0) return alert("Please input a value");
  if (text.length === 1) {
    showResult(true);
    return;
  }

  const str = text.split("").reverse().join("");

  if (str === text) {
    showResult(true);
  } else {
    showResult(false);
  }

  textInput.value = "";
}

function showResult(isPalindrome) {
  result.style.display = "block";
  return isPalindrome
    ? (result.innerHTML = `<strong>${textInput.value}</strong> is a Palindrome`)
    : (result.innerHTML = `<strong>${textInput.value}</strong> is not a Palindrome`);
}

checkButton.addEventListener("click", handleCheckInput);
