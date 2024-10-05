<?php
require_once 'vendor/sedasoft/vehicles/car.php';

use sedasoft\vehicles\Car;

$car = new Car();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $car->setBrand($_POST['brand']);
    $car->setModel($_POST['model']);
}
?>

<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
    <div class="container">
        <h1>Car Information</h1>
    <form method="post" action="">
        <label for="brand">Brand:</label>
        <input type="text" id="brand" name="brand" value="<?php echo htmlspecialchars($car->getBrand()); ?>"><br><br>
        <label for="model">Model:</label>
        <input type="text" id="model" name="model" value="<?php echo htmlspecialchars($car->getModel()); ?>"><br><br>

        <label for="year">Year:</label>
        <input type="text" id="year" name="year" value="<?php echo htmlspecialchars($car->getYear()); ?>"><br><br>
        <label for="age">Age:</label>
        <input type="text" id="age" name="age" value="<?php echo htmlspecialchars($car->getAge()); ?>"><br><br>
        <input type="submit" value="Update Car">
    </form>
    </div>
    <h2>Car Description:</h2>
    <p><?php echo $car->getDescription(); ?></p>
</body>

</html>
