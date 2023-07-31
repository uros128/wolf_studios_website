const fname = document.getElementById("fname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("form-contact")[0];
const hiddenDiv = document.getElementById("hidden-div12");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicked");

  let ebody = `<b>Name:</b> ${fname.value}
                <br>
                <b>Email:</b> ${email.value}
                <br>
                <b>Message:</b> ${message.value}
                <br>`;

  Email.send({
    SecureToken: "afbe6018-76e1-4166-896c-251848da6805",
    To: "wolfstudios128@gmail.com",
    From: "wolfstudios128@gmail.com",
    Subject: "Email from my Website: Wolf-Studios.info from " + email.value,
    Body: ebody,
  }).then((message) => {
    showHiddenDiv();
    document.getElementById("contact-form").reset();
  });
});

function showHiddenDiv() {
  hiddenDiv.style.opacity = "0";
  hiddenDiv.style.display = "block";
  fadeIn(hiddenDiv);
}

function fadeIn(element) {
  let opacity = 0;
  const interval = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
    }
  }, 100);
}
