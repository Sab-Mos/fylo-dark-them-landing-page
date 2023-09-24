let input = document.querySelector("form input");

input.addEventListener("input", () => {
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let inputValue = input.value;
  let valid = document.querySelector(".valid");
  let invalid = document.querySelector(".invalid");
  if (inputValue.match(emailPattern)) {
    invalid.classList.remove("active");
    valid.classList.add("active");
    setTimeout(() => {
      valid.classList.remove("active");
    }, 3000);
  } else if (!inputValue.match(emailPattern)) {
    valid.classList.remove("active");
    invalid.classList.add("active");
    setTimeout(() => {
      invalid.classList.remove("active");
    }, 3000);
  }
});
