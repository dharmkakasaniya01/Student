<!DOCTYPE html>
<html>
<head>

    <title>Student Registration</title>

    <style>

        body {
            font-family: Arial;
            background-color: #f2f2f2;
        }

        .container {
            width: 400px;
            margin: 50px auto;
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px gray;
        }

        h2 {
            text-align: center;
        }

        label {
            display: block;
            margin-top: 15px;
        }

        input, select {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            box-sizing: border-box;
        }

        button {
            width: 100%;
            padding: 10px;
            margin-top: 20px;
            background-color: blue;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: darkblue;
        }

    </style>

</head>

<body>

<div class="container">

    <h2>Student Registration</h2>

    <form method="POST" action="process.php">

        
        <label>Student Name</label>

        <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
        >


        
        <label>Email</label>

        <input type="email" name="email" placeholder="Enter your email" required>


        
        <label>Department</label>

        <select name="department" required>

            <option value="">Select Department</option>

            <option value="Computer Engineering">
                Computer Engineering
            </option>

            <option value="IT Engineering">
                IT Engineering
            </option>

            <option value="Mechanical Engineering">
                Mechanical Engineering
            </option>

            <option value="Civil Engineering">
                Civil Engineering
            </option>

            <option value="Electrical Engineering">
                Electrical Engineering
            </option>

        </select>


        
        <label>Semester</label>

        <select name="semester" required>

            <option value="">Select Semester</option>

            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
            <option value="7">Semester 7</option>
            <option value="8">Semester 8</option>

        </select>


        
        <button type="submit">
            Register Student
        </button>

    </form>

</div>

</body>
</html>