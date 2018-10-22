// Referneces Table
$(document).ready(function() {
    var i = 4;
    $("#add_row_ref").click(function() {
        $('#addr_ref' + i).html("<td>" + (i + 1) + "</td><td><div class='col-xs-6 mb-3'><input type='text' class='form-control' id='firstName" + i + "' placeholder='First Name' name='refFirst" + i + "' required><div class='invalid-feedback'>Valid first name is required.</div></div><div class='col-xs-6 mb-3'><input type='text' class='form-control' id='lastName" + i + "' placeholder='Last Name' name='refLast0' required><div class='invalid-feedback'>Valid last name is required.</div></div></td><td><input type='text' name='title" + i + "' placeholder='Title' class='form-control' required/></td><td><input type='text' name='company" + i + "' placeholder='Company' class='form-control' required/></td><td><input type='text' name='address0' placeholder='Address' class='form-control' required/></td><td><input type='number' name='refPhone" + i + "' class='form-control' id='phone' placeholder='9041234567' required><div class='invalid-feedback'>Phone number required.</div></td><td><div class='mb-3'><input type='email' class='form-control' placeholder='person@example.com' name='refEmail" + i + "' required><div class='invalid-feedback'>Please enter a valid email address.</div></div></td>");

        $('#tab_logic_ref').append('<tr id="addr_ref' + (i + 1) + '"></tr>');
        i++;
    });
    $("#delete_row_ref").click(function() {
        if (i > 4) {
            $("#addr_ref" + (i - 1)).html('');
            i--;
        }
    });

});

// Criminal Background Table
$(document).ready(function() {
    var x = 1;
    $("#add_row_criminal").click(function() {
        $('#criminal' + x).html("<td>" + (x + 1) + "</td><td><input name='date" + x + "' type='date' placeholder='Date' class='form-control' required/> </td><td><select class='custom-select d-block w-100' name='type" + x + "' required><option value=''>Choose...</option><option value='Misdemeanor'>Misdemeanor</option><option value='Felony'>Felony</option></select></td><td><input type='text' name='description" + x + "' placeholder='Description' class='form-control' required/></td><td><select class='custom-select d-block w-100' name='punishment" + x + "'required><option value=''>Choose...</option><option value='Confinement'>Confinement</option><option value='Probation'>Probation</option><option value='Probation'>Community Service</option><option value='Felony'>Felony</option></select></td><td><input type='number' class='form-control' id='Years' placeholder='Year(s)' name='punishmentyrs" + x + "' required><input type='number' class='form-control' id='Months' placeholder='Month(s)' name='punishmentmth" + x + "' required></td>");

        $('#tab_logic').append('<tr id="criminal' + (x + 1) + '"></tr>');
        x++;
    });
    $("#delete_row_criminal").click(function() {
        if (x > 1) {
            $("#criminal" + (x - 1)).html('');
            x--;
        }
    });

});

// Educational Background Table
$(document).ready(function() {
    var j = 1;
    $("#add_row_education").click(function() {
        $('#education' + j).html("<td>" + (j + 1) + "</td><td><select class='custom-select d-block w-100' name='type" + j + "' required><option value=''>Choose...</option><option value='highschool'>High School</option><option value='undergraduate'>Undergraduate</option><option value='graduate'>Graduate</option><option value='postGraduate'>Post-Graduate</option><option value='professional'>Professional</option></select></td><td><input type='text' class='form-control' placeholder='School Name' name='schoolName" + j + "' required></td><td><select class='custom-select d-block w-100' name='state" + j + "' required><option value=''>State...</option><option value='AL'>Alabama</option><option value='AK'>Alaska</option><option value='AZ'>Arizona</option><option value='AR'>Arkansas</option><option value='CA'>California</option><option value='CO'>Colorado</option><option value='CT'>Connecticut</option><option value='DE'>Delaware</option><option value='DC'>District Of Columbia</option><option value='FL'>Florida</option><option value='GA'>Georgia</option><option value='HI'>Hawaii</option><option value='ID'>Idaho</option><option value='IL'>Illinois</option><option value='IN'>Indiana</option><option value='IA'>Iowa</option><option value='KS'>Kansas</option><option value='KY'>Kentucky</option><option value='LA'>Louisiana</option><option value='ME'>Maine</option><option value='MD'>Maryland</option><option value='MA'>Massachusetts</option><option value='MI'>Michigan</option><option value='MN'>Minnesota</option><option value='MS'>Mississippi</option><option value='MO'>Missouri</option><option value='MT'>Montana</option><option value='NE'>Nebraska</option><option value='NV'>Nevada</option><option value='NH'>New Hampshire</option><option value='NJ'>New Jersey</option><option value='NM'>New Mexico</option><option value='NY'>New York</option><option value='NC'>North Carolina</option><option value='ND'>North Dakota</option><option value='OH'>Ohio</option><option value='OK'>Oklahoma</option><option value='OR'>Oregon</option><option value='PA'>Pennsylvania</option><option value='RI'>Rhode Island</option><option value='SC'>South Carolina</option><option value='SD'>South Dakota</option><option value='TN'>Tennessee</option><option value='TX'>Texas</option><option value='UT'>Utah</option><option value='VT'>Vermont</option><option value='VA'>Virginia</option><option value='WA'>Washington</option><option value='WV'>West Virginia</option><option value='WI'>Wisconsin</option><option value='WY'>Wyoming</option></select><input type='text' name='city" + j + "' placeholder='City' class='form-control'/></td><td><input type='text' class='form-control' placeholder='Accomplishment' name='accomplishment" + j + "' required></td>");

        $('#tab_logic_edu').append('<tr id="education' + (j + 1) + '"></tr>');
        j++;
    });
    $("#delete_row_education").click(function() {
        if (j > 1) {
            $("#education" + (j - 1)).html('');
            j--;
        }
    });

});

// Text Color
$("#text_color").change(function() {
    var color = $(this).val();
    switch (color) {
        case 'Default':
            $("body, .edit, input, .custom-select").addClass("text-dark").removeClass("blue red green yellow white");
            break;
        case 'Blue':
            $("body, .edit, input, .custom-select").addClass("blue").removeClass("text-dark red green yellow white");
            break;
        case 'Green':
            $("body, .edit, input, .custom-select").addClass("green").removeClass("blue red text-dark yellow white");
            break;
        case 'Red':
            $("body, .edit, input, .custom-select").addClass("red").removeClass("blue text-dark green yellow white");
            break;
        case 'Yellow':
            $("body, .edit, input, .custom-select").addClass("yellow").removeClass("blue red green text-dark white");
            break;
        case 'White':
            $("body, .edit, input, .custom-select").addClass("white").removeClass("blue red green text-dark yellow");
            break;
        default:
            $("body, .edit, input, .custom-select").addClass("text-dark").removeClass("blue red green yellow white");
    }
});

// Background Color
$("#background_color").change(function() {
    var color = $(this).val();
    switch (color) {
        case 'Default':
            $("body, .container-fluid, .modal-content").removeClass("blue_background red_background green_background yellow_background black_background");
            $(".sidebar").removeClass("blue_background red_background green_background yellow_background black_background").addClass("bg-light");
            break;
        case 'Blue':
            $("body, .container-fluid, .sidebar, .modal-content").addClass("blue_background").removeClass("red_background green_background yellow_background black_background bg-light");
            break;
        case 'Green':
            $("body, .container-fluid, .sidebar, .modal-content").addClass("green_background").removeClass("blue_background red_background yellow_background black_backgroundbg-light");
            break;
        case 'Red':
            $("body, .container-fluid, .sidebar, .modal-content").addClass("red_background").removeClass("blue_background green_background yellow_background black_background bg-light");
            break;
        case 'Yellow':
            $("body, .container-fluid, .sidebar, .modal-content").addClass("yellow_background").removeClass("blue_background red_background green_background black_backgroundbg-light");
            break;
        case 'Black':
            $("body, .container-fluid, .sidebar, .modal-content").addClass("black_background").removeClass("blue_background red_background green_background yellow_backgroundbg-light");
            break;
        default:
            $("body, .container-fluid, .modal-content").removeClass("blue_background red_background green_background yellow_background black_background");
            $(".sidebar").removeClass("blue_background red_background green_background yellow_background black_background").addClass("bg-light");
    }
});

// Font Size
$("#font_size").change(function() {
    var size = $(this).val();
    switch (size) {
        case 'Default':
            $("*, label").removeClass("x-small small medium large x-large");
            break;
        case 'Extra Small':
            $("*, label").addClass("x-small").removeClass("small medium large x-large");
            break;
        case 'Small':
            $("*, label").addClass("small").removeClass("x-small medium large x-large");
            break;
        case 'Medium':
            $("*, label").addClass("medium").removeClass("x-small large x-large");
            break;
        case 'Large':
            $("*, label").addClass("large").removeClass("x-small small medium x-large");
            break;
        default:
            $("*, label").removeClass("x-small small medium large x-large");
    }
});



// Required Fields Check on Submit
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// Audio Settings
$(document).ready(function() {
    $("#audioYes").on("click", function() {
        $(".audio").addClass("visible").removeClass("invisible");
        $(".audio-html-add").html("<i onmouseover='responsiveVoice.speak(\"Add Row\");' class='fas fa-volume-up ml-2 audio audio-added'></i>");
        $(".audio-html-delete").html("<i onmouseover='responsiveVoice.speak(\"Delete Row\");' class='fas fa-volume-up ml-2 audio audio-added'></i>");
        $(".audio-html-submit").html("<i onmouseover='responsiveVoice.speak(\"Submit\");' class='fas fa-volume-up ml-2 audio audio-added'></i>");
    })
    $("#audioNo").on("click", function() {
        $(".audio").addClass("invisible").removeClass("visible");
        $("i.audio-added").remove();
    })

});