/*Dhvanil Patel
Dhvanil_patel@live.com
UMass Lowell in course 91.461 GUI Programming I
Started: 10/21/2014, last updated: 10/25/2014
file-name: assignment6Java.js
*/
/*function createTable*/
function createTable() {
    // using remove to refresh
    var rowTable = document.getElementById("myTable");
    if (rowTable != null) rowTable.remove();
    //gathering values from users and putting them into variables
    // putting a "+" to make treat it as a number instead of string
    var numOne = +document.getElementById("numOne").value;
    var numTwo = +document.getElementById("numTwo").value;
    var numThree = +document.getElementById("numThree").value;
    var numFour = +document.getElementById("numFour").value;
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
    // check if numbers are validate
    if (numOne > numTwo) {
        myFunction();
        document.getElementById("numOne").setAttribute("style",
            "outline-color: red");
        document.getElementById("numOne").setAttribute("style",
            "background-color: red");
        return;
    }
    if (numThree > numFour) {
        myFunction();
        document.getElementById("numThree").setAttribute("style",
            "outline-color: red");
        document.getElementById("numThree").setAttribute("style",
            "background-color: red");
        return;
    }
    // creates a <table> element and a <tableBody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tableBody");
    // creating all cells
    for (var i = numOne, ii = numTwo + 1; i <= ii; ++i) {
        // creates a table row
        var row = document.createElement("tr");
        for (var j = numThree, jj = numFour + 1; j <= jj; ++j) {
            // creates a cell
            var cell = document.createElement("td");
            var cellText;
            // give some style to the cell/table
            var cellStyle = "padding: 20px; ";
            if (i == numOne && j == numThree) {
                cellText = document.createTextNode("");
                cell.setAttribute("style", cellStyle +
                    "background-color: white");
            } else if (i == numOne) {
                cellText = document.createTextNode(j - 1);
                cell.setAttribute("style", cellStyle +
                    "background-color: darkgrey");
            } else if (j == numThree) {
                cellText = document.createTextNode(i - 1);
                cell.setAttribute("style", cellStyle +
                    "background-color: darkgrey");
            } else {
                cellText = document.createTextNode((i - 1) * (j - 1));
                cell.setAttribute("style", cellStyle +
                    "background-color: lightgrey");
            }
            // add the text to cell
            cell.appendChild(cellText);
            // add the cell to row
            row.appendChild(cell);
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    // put the <tableBody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // setting an id for tbl
    tbl.setAttribute("id", "myTable");
}

function numbersonly(myfield, e, dec) {
        var key;
        var keychar;
        if (window.event) key = window.event.keyCode;
        else if (e) key = e.which;
        else {
            return true;
        }
        keychar = String.fromCharCode(key);
        // control keys
        if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key ==
            13) || (key == 27)) {
            if (isNormalInteger(myfield.value)) {
                myfield.setAttribute("style", "outline-color: lightgreen");
                myfield.setAttribute("style", "border-color: lightgreen");
            } else {
                myfield.setAttribute("style", "outline-color: red");
                myfield.setAttribute("style", "border-color: red");
            }
            return true;
        }
        /*Checking whether inputs are number, if not makes borderline of box red*/
        else if ((("0123456789").indexOf(keychar) > -1)) {
            if (isNormalInteger(myfield.value)) {
                myfield.setAttribute("style", "outline-color: lightgreen");
                myfield.setAttribute("style", "border-color: lightgreen");
            } else {
                myfield.setAttribute("style", "outline-color: red");
                myfield.setAttribute("style", "border-color: red");
            }
            return true;
        }
        // decimal point jump
        else if (dec && (keychar == ".")) {
            myfield.form.elements[dec].focus();
            myfield.setAttribute("style", "outline-color: red");
            myfield.setAttribute("style", "border-color: red");
            return true;
        } else {
            if (isNormalInteger(myfield.value)) {
                myfield.setAttribute("style", "outline-color: lightgreen");
                myfield.setAttribute("style", "border-color: lightgreen");
            } else {
                myfield.setAttribute("style", "outline-color: red");
                myfield.setAttribute("style", "border-color: red");
            }
            return true;
        }
    }
    //making a function for pop up for an error

function myFunction() {
    alert("Please enter a valid input in red box");
}

function isNormalInteger(str) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
}