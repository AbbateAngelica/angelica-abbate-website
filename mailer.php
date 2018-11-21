<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$msg = "Nombre: $name\nEmail: $email\nAsunto: $subject\nMensaje: $message";

$msg = wordwrap($msg,70);

mail("angelicabbate@gmail.com","FORMULARIO: $subject",$msg);
?>