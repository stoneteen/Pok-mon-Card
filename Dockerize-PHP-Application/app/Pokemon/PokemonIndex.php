<html>
<head>
    <title>Pokemon Information</title>
    <script>https://github.com/PokemonTCG/pokemon-tcg-sdk-javascript</script>

</head>
<body>
<?php
$txt = "Hello world!";
$x = 5;
$y = 10.5;

define("TIMEOUT", 300);
define("HTTP_GET_REQUEST_TYPE" ,"getRequest/all");


$url = "https://api.pokemontcg.io/v2/cards?page=1&pageSize=10";
$result = file_get_contents($url);
echo json_encode($result);


?>

</body>
</html>
