<?php
$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

echo "------";
echo "REQUEST BODY";
echo $request_body;
echo "------";

$to = "angelicabbate@gmail.com";
$subject = "Formulario Angelica: $data->subject";
$txt = "Nombre: $data->name\n\nEmail: $data->email\n\nAsunto: $data->subject\n\nMensaje: $data->message";
$headers = "From: formulario@abbateangelica.com";

mail($to,$subject,$txt,$headers);
?>