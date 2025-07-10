function payNow() {
  alert("Redirecting to payment gateway...");
}
function loginUser(e) {
  e.preventDefault();
  const user = document.getElementById("loginUsername").value;
  const pass = document.getElementById("loginPassword").value;
  alert(`Logged in as ${user}`);
}
function registerUser(e) {
  e.preventDefault();
  const user = document.getElementById("regUsername").value;
  const pass = document.getElementById("regPassword").value;
  alert(`User ${user} registered`);
}
function submitContact(e) {
  e.preventDefault();
  alert("Thank you for contacting us!");
}