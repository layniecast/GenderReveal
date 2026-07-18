function checkPassword() {
  const correctPassword = "SharonAndLuis";
  const enteredPassword = document.getElementById("passwordInput").value;

  if (enteredPassword === correctPassword) {
    document.getElementById("passwordForm").style.display = "none";
    document.getElementById("protectedContent").style.display = "block";
  } else {
    alert("Incorrect Password!");
    document.getElementById("passwordInput").value = "";
  }
}
