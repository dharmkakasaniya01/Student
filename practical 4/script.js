/* =========================================================
   STUDENT-HUB PRACTICAL 4 - COMMON JAVASCRIPT
   This file is used by all pages.
========================================================= */


/* =========================================================
   NAVIGATION BAR + THEME
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const page = location.pathname.split("/").pop().toLowerCase();

    /* Login and Register do not need the portal navigation bar */
    if (page !== "login.html" && page !== "register.html") {
        createNavigation(page);
        setupTheme();
    }


    /* =====================================================
       HOME PAGE
    ===================================================== */

    if (page === "home.html" || page === "") {
        setupHomeModal();
    }


    /* =====================================================
       TABLE PAGES
    ===================================================== */

    setupTableInteraction(page);


    /* =====================================================
       LOGIN PAGE
    ===================================================== */

    if (page === "login.html") {
        setupLogin();
    }


    /* =====================================================
       REGISTER PAGE
    ===================================================== */

    if (page === "register.html") {
        setupRegister();
    }

});


/* =========================================================
   CREATE COMMON NAVIGATION BAR
========================================================= */

function createNavigation(page) {

    const header = document.createElement("header");

    header.className = "portal-header";

    header.innerHTML = `
        <h2 class="portal-title">Student-HUB</h2>

        <nav class="portal-nav">

            <a href="home.html">Home</a>

            <a href="profile.html">Profile</a>

            <a href="result.html">Result</a>

            <a href="fees.html">Fees</a>

            <a href="attendence.html">Attendance</a>

            <a href="course.html">Course</a>

            <a href="Timetable.html">Timetable</a>

            <a href="settings.html">Settings</a>

            <button id="themeButton" class="nav-theme">
                Theme
            </button>

        </nav>
    `;

    document.body.prepend(header);

    header.querySelectorAll(".portal-nav a").forEach(function (link) {

        const linkPage =
            link.getAttribute("href").toLowerCase();

        if (linkPage === page) {
            link.classList.add("active");
        }

    });

}


/* =========================================================
   LIGHT / DARK THEME
========================================================= */

function setupTheme() {

    const themeButton =
        document.getElementById("themeButton");

    if (!themeButton) {
        return;
    }
    const savedTheme =
        localStorage.getItem("studentHubTheme") || "dark";


    applyTheme(savedTheme);

    themeButton.addEventListener("click", function () {

        const currentTheme =
            document.body.classList.contains("light-mode")
                ? "light"
                : "dark";

        const newTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";


        localStorage.setItem(
            "studentHubTheme",
            newTheme
        );


        applyTheme(newTheme);

    });

}


function applyTheme(theme) {

    document.body.classList.toggle(
        "light-mode",
        theme === "light"
    );


    const themeButton =
        document.getElementById("themeButton");


    if (themeButton) {

        themeButton.textContent =
            theme === "light"
                ? "Dark Mode"
                : "Light Mode";

    }

}


/* =========================================================
   HOME PAGE MODAL
========================================================= */

function setupHomeModal() {

    const modal =
        document.getElementById("welcomeModal");

    const closeButton =
        document.getElementById("closeModal");


    if (!modal || !closeButton) {
        return;
    }


    /* Close welcome popup */

    closeButton.addEventListener("click", function () {

        modal.style.display = "none";

    });

}


/* =========================================================
   TABLE INTERACTION
========================================================= */

function setupTableInteraction(page) {

    const tables =
        document.querySelectorAll("table");

    tables.forEach(function (table) {

        table.querySelectorAll("tr").forEach(function (row) {

            row.addEventListener("mouseenter", function () {
                row.classList.add("row-focus");
            });

            row.addEventListener("mouseleave", function () {
                row.classList.remove("row-focus");
            });

        });

    });

    if (page === "attendence.html") {

        document.querySelectorAll("table tr").forEach(function (row) {

            const cells =
                row.querySelectorAll("td");

            if (cells.length < 4) {
                return;
            }


            const percentage =
                parseInt(cells[3].textContent) || 0;


            cells[3].style.fontWeight = "bold";


            if (percentage >= 75) {
                cells[3].style.color = "#22c55e";
            }
            else {
                cells[3].style.color = "#f87171";
            }

        });

    }

    if (page === "course.html") {

        document.querySelectorAll("table tr").forEach(function (row) {

            const cells =
                row.querySelectorAll("td");

            if (cells.length < 3) {
                return;
            }


            const status =
                cells[2].textContent.trim().toLowerCase();


            cells[2].style.fontWeight = "bold";


            if (status === "completed") {
                cells[2].style.color = "#22c55e";
            }
            else {
                cells[2].style.color = "#fbbf24";
            }

        });

    }


    if (page === "fees.html") {

        document.querySelectorAll("table tr").forEach(function (row) {

            const cells =
                row.querySelectorAll("td");

            if (cells.length < 4) {
                return;
            }


            const status =
                cells[3].textContent.trim().toLowerCase();


            cells[3].style.fontWeight = "bold";


            if (status === "paid") {
                cells[3].style.color = "#22c55e";
            }
            else {
                cells[3].style.color = "#fbbf24";
            }

        });

    }

    if (page === "result.html") {

    document.querySelectorAll("table tr").forEach(function (row) {

        const cells =
            row.querySelectorAll("td");

        if (cells.length < 4) {
            return;
        }

        const status =
            cells[4].textContent.trim().toLowerCase();

        cells[4].style.fontWeight = "bold";

        if (status === "pass") {
            cells[4].style.color = "#22c55e";
        }
        else if (status === "fail") {
            cells[4].style.color = "#f87171";
        }

    });

}


}


/* =========================================================
   LOGIN VALIDATIOn
========================================================= */

function setupLogin() {

    const form =
        document.getElementById("loginForm");

    if (!form) {
        return;
    }


    form.addEventListener("submit", function (event) {

        event.preventDefault();


        const username =
            document.getElementById("username").value;

        const password =
            document.getElementById("password").value;

        const response =
            document.getElementById("response");


        const usernameRegex =
            /^[A-Za-z0-9]+$/;


        if (username === "" || password === "") {

            response.innerHTML =
                "Please fill all fields";

            response.style.color = "red";

            return;
        }


        if (!usernameRegex.test(username)) {

            response.innerHTML =
                "Username can contain only letters and numbers";

            response.style.color = "red";

            return;
        }


        if (password.length < 6) {

            response.innerHTML =
                "Password must be at least 6 characters";

            response.style.color = "red";

            return;
        }


        response.innerHTML =
            "Login Successful!";

        response.style.color = "green";


        setTimeout(function () {

            window.location.href = "home.html";

        }, 1000);

    });

}


/* =========================================================
   REGISTER VALIDATION
========================================================= */

function setupRegister() {

    const form =
        document.getElementById("registerForm");

    if (!form) {
        return;
    }


    form.addEventListener("submit", function (event) {

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            event.preventDefault();

            alert("Passwords do not match!");

        }

    });

}

/* =========================================================
   FAQ INTERACTION
========================================================= */

// FAQ - Home Page
document.querySelectorAll(".faq-question").forEach(function(question) {

    question.addEventListener("click", function() {

        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});