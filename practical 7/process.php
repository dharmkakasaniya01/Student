<?php

$name = $_POST["name"];
$email = $_POST["email"];
$department = $_POST["department"];
$semester = $_POST["semester"];


if ($name == "" || $email == "" || $department == "" || $semester == "") {
    die("Please fill all fields.");
}


if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email.");
}


$file = fopen("students.csv", "a");


$data = [
    $name,
    $email,
    $department,
    $semester
];


fputcsv($file, $data);


fclose($file);

echo "Registration successful!";
echo "<br>";
echo "Data saved in students.csv";

?>