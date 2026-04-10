<?php
// Check if the form is accessed directly (without a POST request)
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die('Direct access not allowed.');
}

// Honeypot field validation
if (!empty($_POST['honeypot'])) {
    die('Spam detected. Submission blocked.');
}

// Retrieve form data

$field_name = $_POST['name'];
$field_phone = $_POST['phone'];
$field_email = $_POST['email'];
$field_cname = $_POST['cname'];
//$field_location = $_POST['location'];
//$field_message = $_POST['message'];

$mail_to = 'info@tarapro.in';
$subject = 'Download Brochure Form';

$body_message = 'Your Name: '.$field_name."\n";
$body_message .= 'Phone Number : '.$field_phone."\n";
$body_message .= 'Email : '.$field_email."\n";
$body_message .= 'Company : '.$field_cname."\n";
//$body_message .= 'Your Location : '.$field_location."\n";
//$body_message .= 'Message:'.$field_message."\n";

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";
//$headers .= 'Cc: taralohia73@gmail.com'."\r\n";
$headers .= 'Bcc: taralohia73@gmail.com , taralohiamail@gmail.com'."\r\n";


$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) {
?>
	
	<script language="javascript" type="text/javascript">
		//alert('Thank you for getting in touch with us. We will get back to you as soon as possible.');
		//window.location = 'thank-you-download-brochure.html';	
		  window.location = 'https://www.taralohia.com/pdf/Tarapro-Ebrochure.pdf';
	</script>

<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		//alert('Message failed. Please, send an email to msand@cdeasia.com');
		window.location = '/thank-you';
	</script>
<?php
}
?>