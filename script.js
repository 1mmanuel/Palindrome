const output = document.getElementById("result");
const check = document.getElementById("check-btn");

function cleanInputString(str) {
  const regex = /[^0-9a-z]/gi;
  return str.toString().replace(regex, "");
}

const checkPalindrome = (str) => {
  const cleanedString = cleanInputString(str.toLowerCase());
  const reverse = cleanedString.split("").reverse().join("");
  if (cleanedString == reverse) {
    output.removeAttribute("hidden");
    output.innerHTML = "<p><b>" + str + "</b> is a palindrome</p>";
  } else {
    output.removeAttribute("hidden");
    output.innerHTML = "<p><b>" + str + "</b> is not a palindrome</p>";
  }
};

check.addEventListener("click", () => {
  let userInput = document.getElementById("text-input").value;
  if (userInput == "") {
    alert("Please input a value");
    return;
  }
  checkPalindrome(userInput);
});
