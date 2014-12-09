/*Dhvanil Patel
Dhvanil_patel@live.com
UMass Lowell in course 91.461 GUI Programming I
Started: 10/21/2014, last updated: 12/04/2014
file-name: assignment6Java.js
I got help from Mihir and Tak and I learned from them.
Looking forward to learn everything in winter vacation with learnable.

*/

$(document).ready(function() {
    var tabs = $("#tabs").tabs();
    /* Validator */
    $.validator.addMethod('GreaterThanStartRow', function(value, element, param) {
        if (numTwo.value === "") {
            return true;
        }
        return parseInt(numTwo.value) >= parseInt(numOne.value);
    }, "The Maximum Column Value must be greater than the Minimum Column Value.");
    $.validator.addMethod('GreaterThanStartColumn', function(value, element, param) {
        return parseInt(numFour.value) >= parseInt(numThree.value);
    }, "The Maximum Row Value must be greater than the Minimum Row value.");
    $('#form').validate({
        rules: {
            numOne: {
                required: true,
                digits: true
            },
            numTwo: {
                required: true,
                digits: true,
                GreaterThanStartRow: true
            },
            numThree: {
                required: true,
                digits: true
            },
            numFour: {
                required: true,
                digits: true,
                GreaterThanStartColumn: true
            }
        },
        onkeyup: function(element) {
            if ($('form').valid()) {
                $('form').find(":submit").attr("disabled", false);
            } else {
                $('form').find(":submit").attr("disabled", true);
            }
        },
        /* "The validation plugin allows you to configure these class names"
         * http://stackoverflow.com/questions/6168926/jquery-validation-how-to-make-fields-red
         */
       
    });

    function crTable(nextTabNo) {
        /* getting the four values from the user */
        /* putting a "+" to treat the value as a number instead of string */
        var numOne = +document.getElementById("numOne").value;
        var numTwo = +document.getElementById("numTwo").value;
        var numThree = +document.getElementById("numThree").value;
        var numFour = +document.getElementById("numFour").value;
        /* get the reference for the preview */
        var preview = document.getElementById(nextTabNo);
        /* creates a <table> element and a <tbody> element */
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
        /* creating all cells */
        for (var i = numOne, ii = numTwo + 1; i <= ii; ++i) {
            /* creates a table row */
            var row = document.createElement("tr");
            for (var j = numThree, jj = numFour + 1; j <= jj; ++j) {
                /* creates a cell */
                var cell = document.createElement("td");
                var cellText;
                /* give some style to the cell/table */
                var cellStyle = "padding: 10px; color: black;";
                if (i == numOne && j == numThree) {
                    cellText = document.createTextNode("");
                    cell.setAttribute("style", cellStyle + "background-color: white");
                } else if (i == numOne) {
                    cellText = document.createTextNode(j - 1);
                    cell.setAttribute("style", cellStyle + "background-color: purple");
                } else if (j == numThree) {
                    cellText = document.createTextNode(i - 1);
                    cell.setAttribute("style", cellStyle + "background-color: purple");
                } else {
                    cellText = document.createTextNode((i - 1) * (j - 1));
                    cell.setAttribute("style", cellStyle + "background-color: yellow");
                }
                /* add the text to cell */
                cell.appendChild(cellText);
                /* add the cell to row */
                row.appendChild(cell);
            }
            /* add the row to the end of the table body */
            tblBody.appendChild(row);
        }
        /* put the <tbody> in the <table> */
        tbl.appendChild(tblBody);
        /* appends <table> into preview */
        preview.appendChild(tbl);
    }
    var tabsdiv = $("#tabs");
    var tabslist = tabsdiv.find("ul");
    var nextTabNo = tabslist.find("li").length;
    /* When create button click, a new tab will generate */
    $('#make').click(function() {
        /* check for first time */
        if (!$('form').valid()) {
            $('form').find(":submit").attr("disabled", true);
            return;
        }
        /* create a new tab with close button next to it
         * http://stackoverflow.com/questions/14357614/add-close-button-to-jquery-ui-tabs
         */
        tabslist.append('<li id="li' + nextTabNo + '"><a href="#tab' + nextTabNo + '">' + 'Tab ' + (nextTabNo + 1) + +
            nextTabNo + '"><span id="tabspan' + nextTabNo + '" class="ui-icon ui-icon-circle-close"></span><\/li>');
        // add content to the new tab */
        tabsdiv.append('<div id="tab' + nextTabNo + '"><\/div>');
        /* create content table to the new tab */
        crTable("tab" + nextTabNo);
        ++nextTabNo;
        $('#tabs').tabs("refresh");
    });
    /* When close span clicked, it will close the tab that are closest to which you clicked */
    tabs.delegate("span.ui-icon-circle-close", "click", function() {
        var panelId = $(this).closest("li").remove().attr("aria-controls");
        $("#" + panelId).remove();
        tabs.tabs("refresh");
		$('#delete').click(function() {
        /* push id in the selected */
        var selected = [];
        $('input:checkbox:checked').each(function() {
            selected.push($(this).attr('id'));
        });
        /* remove those unwanted tabs */
        for (var m = 0; m < selected.length; m++) {
            var checkboxID = "" + selected[m];
            var num = checkboxID.substring(8, checkboxID.length);
            $('#tab' + num).remove();
            $('#li' + num).remove();
        }
        $('#tabs').tabs("refresh");
    });
    
});