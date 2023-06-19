const fname = document.getElementById("fname");
const email = document.getElementById("email");
const message = document.getElementById("message");
//const submit = document.getElementById("submit");

const submit = document.getElementsByClassName("form-contact")[0];

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
    SecureToken: "3b990abc-d36b-4255-9997-7151d8faae00",
    To: "wolfstudios128@gmail.com",
    From: "wolfstudios128@gmail.com",
    Subject: "Email from my Website: Wolf-Studios.info from " + email.value,
    Body: ebody,
  }).then((message) =>
    alert("Your message was sent sucessfully! Thank you for your message.")
  );
});
