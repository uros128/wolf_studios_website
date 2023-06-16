<?php
/*SendGrid Library*/
require_once ('vendor/autoload.php');

/*Post Data*/
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

/*Content*/
$from = new SendGrid\Email("AAA", "contact@wolf-studios.info");
$subject = "SUBJECT";
$to = new SendGrid\Email("Fat ", "juhu.plastika@gmail.com");
$content = new SendGrid\Content("text/html", "
Email : {$email}
");

/*Send the mail*/
$mail = new SendGrid\Mail($from, $subject, $to, $content);
$apiKey = ('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');
$sg = new \SendGrid($apiKey);

/*Response*/
$response = $sg->client->mail()->send()->post($mail);
?>

<!--Print the response-->
<pre>
    <?php
    var_dump($response);
    ?>
</pre>

