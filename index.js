function validation() {
  if (document.FormFill.Username.value == "") {
    document.getElementById("result").innerHTML = "Enter Username*";
    return false;
  } else if (document.FormFill.Username.value.length < 6) {
    document.getElementById("result").innerHTML = "Atleast Six Letters*";
    return false;
  } else if (document.FormFill.Email.value == "") {
    document.getElementById("result").innerHTML = "Enter Your Email*";
    return false;
  } else if (document.FormFill.Password.value == "") {
    document.getElementById("result").innerHTML = "Enter Your Password";
    return false;
  } else if (document.FormFill.Password.value.length < 6) {
    document.getElementById("result").innerHTML = "Password Must Be Six Digits";
    return false;
  } else if (document.FormFill.CPassword.value == "") {
    document.getElementById("result").innerHTML = "Enter Confirm Password";
    return false;
  } else if (
    document.FormFill.CPassword.value !== document.FormFill.CPassword.value
  ) {
    document.getElementById("result").innerHTML = "Password Does'nt Matched";
    return false;
  } else if (
    document.FormFill.Password.value == document.FormFill.CPassword.value
  ) {
    popup.classList.add("open-slide");
    return false;
  }
}
var popup = document.getElementById("popup");
function CloseSlide() {
  popup.classList.remove("open-slide");
}
