<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit_check']) && $_POST['submit_check'] === 'submitted') {
    // Form submission logic
    $field_name = $_POST['name'];
    $field_phone = $_POST['phone'];
    $field_email = $_POST['email'];
    $field_cname = $_POST['cname'];
    $field_message = $_POST['message'];

    $mail_to = 'info@tarapro.in';
    $subject = 'Enquiry Form - Tarapro';

    $body_message = 'Your Name: ' . $field_name . "\n";
    $body_message .= 'Phone Number: ' . $field_phone . "\n";
    $body_message .= 'Email: ' . $field_email . "\n";
    $body_message .= 'Company: ' . $field_cname . "\n";
    $body_message .= 'Message: ' . $field_message . "\n";

    $headers = 'From: ' . $field_email . "\r\n";
    $headers .= 'Reply-To: ' . $field_email . "\r\n";
    $headers .= 'Bcc: taralohia73@gmail.com , taralohiamail@gmail.com' . "\r\n";

    $mail_status = mail($mail_to, $subject, $body_message, $headers);

    if ($mail_status) {
        ?>
        <script language="javascript" type="text/javascript">
            window.location = '/thank-you-contact';
        </script>
        <?php
    } else {
        ?>
        <script language="javascript" type="text/javascript">
            window.location = '/thank-you-contact';
        </script>
        <?php
    }
} else {
    die('Invalid form submission.');
}
?>