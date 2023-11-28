function validateForm() {
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;

  if (password !== confirm_password) {
      alert("Password and Confirm Password do not match");
      return false;
  }
  
  // If passwords match, the form will be submitted
  return true;
}