
let students = [];


let currentPage = 1;


const studentsPerPage = 5;


fetch("students.json")

    .then(function(response) {

        return response.json();

    })

    .then(function(data) {

        
        students = data;

        document.getElementById("status").innerHTML =
            students.length + " students loaded";

        
        displayStudents();

    })

    .catch(function(error) {

        console.log(error);

        document.getElementById("status").innerHTML =
            "Error loading JSON file";

    });


function displayStudents() {

   
    let search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();


   
    let department =
        document.getElementById("departmentFilter")
        .value;


    
    let sort =
        document.getElementById("sortSelect")
        .value;



    let result = students.filter(function(student) {

        let nameMatch =
            student.name
            .toLowerCase()
            .includes(search);


        let departmentMatch =
            department == "All" ||
            student.department == department;


        return nameMatch && departmentMatch;

    });


    if (sort == "nameAsc") {

        result.sort(function(a, b) {

            return a.name.localeCompare(b.name);

        });

    }


    if (sort == "nameDesc") {

        result.sort(function(a, b) {

            return b.name.localeCompare(a.name);

        });

    }


    let totalPages =
        Math.ceil(result.length / studentsPerPage);


    let start =
        (currentPage - 1) * studentsPerPage;


    let end =
        start + studentsPerPage;


    let pageStudents =
        result.slice(start, end);



    let list =
        document.getElementById("studentList");


    list.innerHTML = "";


    if (pageStudents.length == 0) {

        list.innerHTML =
            "<p>No students found.</p>";

    }


   
    pageStudents.forEach(function(student) {

        let div =
            document.createElement("div");


        div.className = "student";


        div.innerHTML =

            "<h3>" + student.name + "</h3>" +

            "<p>ID: " +
            student.id +
            "</p>" +

            "<p>Email: " +
            student.email +
            "</p>" +

            "<p>Department: " +
            student.department +
            "</p>" +

            "<p>Semester: " +
            student.semester +
            "</p>";


        list.appendChild(div);

    });


    
    createPagination(totalPages);

}


function createPagination(totalPages) {

    let pagination =
        document.getElementById("pagination");


    pagination.innerHTML = "";


    for (
        let i = 1;
        i <= totalPages;
        i++
    ) {

        let button =
            document.createElement("button");


        button.innerHTML = i;


        if (i == currentPage) {

            button.className = "active";

        }


        button.addEventListener(
            "click",
            function() {

                currentPage = i;

                displayStudents();

            }
        );


        pagination.appendChild(button);

    }

}


document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        function() {

            currentPage = 1;

            displayStudents();

        }
    );


document
    .getElementById("departmentFilter")
    .addEventListener(
        "change",
        function() {

            currentPage = 1;

            displayStudents();

        }
    );


document
    .getElementById("sortSelect")
    .addEventListener(
        "change",
        function() {

            currentPage = 1;

            displayStudents();

        }
    );