//**  Variables */
const txtFirstName = document.querySelector("#firstName");
const invalidFirstName = document.querySelector("#invalidFirstName");
const txtLastName = document.querySelector("#lastName");
const invalidLastName = document.querySelector("#invalidLastName");
const txtEmail = document.querySelector("#Email");
const invalidEmail = document.querySelector("#invalidEmail");
const psdPassword = document.querySelector("#Password");
const invalidPassword = document.querySelector("#invalidPassword");
const txtTel = document.querySelector("#telephone");
const invalidTel = document.querySelector("#invalidTel");
const txtBio = document.querySelector("#bio");
const invalidBio = document.querySelector("#invalidBio");

//? First Name */
txtFirstName.addEventListener("input", (e) => {
  return nameError(txtFirstName, invalidFirstName);
});
//? Last Name */
txtLastName.addEventListener("input", (e) => {
  nameError(txtLastName, invalidLastName);
});

//**Hidden Detect */
const addHidden = (outline, element) => {
  if (outline.classList.contains("outline-pink-700")) {
    outline.classList.remove("outline-pink-700");
    outline.classList.add("outline-green-600");
  }
  return element.classList.add("hidden");
};
const removeHidden = (outline, element) => {
  if (!outline.classList.contains("outline-pink-700")) {
    outline.classList.remove("outline-green-600");
    outline.classList.add("outline-pink-700");
  }
  if (element.classList.contains("hidden"))
    return element.classList.remove("hidden");
  return;
};
//** Name Error*/
const nameError = (element, errorText) => {
  const pattern = /^[a-z][a-z0-9]{2,15}$/gi;
  let name = element.value;
  if (!pattern.test(name)) {
    return removeHidden(element, errorText);
  }
  return addHidden(element, errorText);
};

//** Email Error*/
const emailError = () => {
  const pattern = /^[a-z][a-z0-9]+@[a-z0-9]+\.com$/gi;
  let email = txtEmail.value;
  if (!pattern.test(email)) {
    return removeHidden(txtEmail, invalidEmail);
  }
  return addHidden(txtEmail, invalidEmail);
};
//? Email
txtEmail.addEventListener("keyup", emailError);

//** Password Error */
const passwordError = () => {
  const pattern = /^[a-z0-9@_-]{6,20}$/gi;
  let password = psdPassword.value;
  if (!pattern.test(password)) {
    return removeHidden(psdPassword, invalidPassword);
  }
  return addHidden(psdPassword, invalidPassword);
};
//? Password
psdPassword.addEventListener("keyup", passwordError);

//** Telephone Error */
const telephoneError = () => {
  const pattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/g;
  let tel = txtTel.value;
  let telLenght = tel.length;
  if (tel.length == 3 || tel.length == 7) {
    txtTel.value += "-" ?? "";
  }
  if (!pattern.test(tel)) return removeHidden(txtTel, invalidTel);
  return addHidden(txtTel, invalidTel);
};
//? Telephone
txtTel.addEventListener("keyup", telephoneError);

//** Bio */
const bioError = () => {
  const pattern = /^[a-z]+( [a-z]*)*$/gm;
  let bio = txtBio.value;
  if (bio.length < 8 || bio.length > 50 || !pattern.test(bio))
    return removeHidden(txtBio, invalidBio);
  return addHidden(txtBio, invalidBio);
};
//?Bio
txtBio.addEventListener("input", bioError);
