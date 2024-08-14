getAllEmployees();
function saveEmployee() {
    let name = $('#exampleFormControlInput2').val();
    let email = $('#exampleFormControlInput3').val();
    let position = $('#exampleFormControlInput4').val();
    let salary = $('#exampleFormControlInput5').val();

    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/employees/add",
        async: true,
        data: JSON.stringify({
            name: name,
            email: email,
            pos: position,
            salary: salary
        }),
        success: function(data) {
            alert("Saved");
            getAllEmployees();
        },
        error: function(xhr, exception) {
            alert("Error: " + xhr.responseText);
        }
    });
}

function updateEmployee() {
    let id = $('#exampleFormControlInput1').val();
    let name = $('#exampleFormControlInput2').val();
    let email = $('#exampleFormControlInput3').val();
    let position = $('#exampleFormControlInput4').val();
    let salary = $('#exampleFormControlInput5').val();

    $.ajax({
        method: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/employees/" + id,
        async: true,
        data: JSON.stringify({
            name: name,
            email: email,
            pos: position,
            salary: salary
        }),
        success: function(data) {
            alert("Updated");
            getAllEmployees();
        },
        error: function(xhr, exception) {
            alert("Error: " + xhr.responseText);
        }
    });
}

function deleteEmployee() {
    let id = $('#exampleFormControlInput1').val();

    $.ajax({
        method: "DELETE",
        url: "http://localhost:8080/employees/" + id,
        async: true,
        success: function(data) {
            alert("Deleted");
            getAllEmployees();
        },
        error: function(xhr, exception) {
            alert("Error: " + xhr.responseText);
        }
    });
}

function getAllEmployees() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/employees",
        async: true,
        success: function(data) {
            $("#empTable").empty();
            for (let emp of data) {
                let id = emp.id;
                let name = emp.name;
                let email = emp.email;
                let position = emp.pos;
                let salary = emp.salary;

                var row = `<tr><td>${id}</td><td>${name}</td><td>${email}</td><td>${position}</td><td>${salary}</td></tr>`;
                $('#empTable').append(row);
            }
            alert("Data retrieved successfully");
        },
        error: function(xhr, exception) {
            alert("Error: " + xhr.responseText);
        }
    });
}

$(document).ready(function() {
    $(document).on('click', '#empTable tr', function() {
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();
        var col4 = $(this).find('td:eq(4)').text();

        $('#exampleFormControlInput1').val(col0);
        $('#exampleFormControlInput2').val(col1);
        $('#exampleFormControlInput3').val(col2);
        $('#exampleFormControlInput4').val(col3);
        $('#exampleFormControlInput5').val(col4);
    });
});



