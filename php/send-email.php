<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.sendgrid.net";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 465;

$mail->Username = "apikey";
$mail->Password = "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
";

$mail->setFrom($email, $name);
$mail->addAddress("contact@wolf-studios.info", "Wolf Studios");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

header("Location: sent.html");