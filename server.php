<?php
//эта строчка используется при работе с json
$_POST = json_decode(file_get_contents("php://input"), true);//для получения данных в формате json

echo var_dump($_POST);//берет данные с клиента, превращает их в строку и показывает обратно на клиенте