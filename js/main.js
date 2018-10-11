$(document).ready(function(){
    var i=4;
    $("#add_row_ref").click(function(){
    $('#addr_ref'+i).html("<td>"+ (i+1) +"</td><td><div class='col-xs-6 mb-3'><input type='text' class='form-control' id='firstName"+i+"' placeholder='First Name' name='refFirst"+i+"' required><div class='invalid-feedback'>Valid first name is required.</div></div><div class='col-xs-6 mb-3'><input type='text' class='form-control' id='lastName"+i+"' placeholder='Last Name' name='refLast0' required><div class='invalid-feedback'>Valid last name is required.</div></div></td><td><input type='text' name='title"+i+"' placeholder='Title' class='form-control' required/></td><td><input type='text' name='company"+i+"' placeholder='Company' class='form-control' required/></td><td><input type='text' name='address0' placeholder='Address' class='form-control' required/></td><td><input type='number' name='refPhone"+i+"' class='form-control' id='phone' placeholder='9041234567' required><div class='invalid-feedback'>Phone number required.</div></td><td><div class='mb-3'><input type='email' class='form-control' placeholder='person@example.com' name='refEmail"+i+"' required><div class='invalid-feedback'>Please enter a valid email address.</div></div></td>");

    $('#tab_logic_ref').append('<tr id="addr_ref'+(i+1)+'"></tr>');
    i++; 
});
    $("#delete_row_ref").click(function(){
       if(i>4){
       $("#addr_ref"+(i-1)).html('');
       i--;
       }
    });

});

$(document).ready(function(){
    var x=1;
    $("#add_row_criminal").click(function(){
    $('#criminal'+x).html("<td>"+ (x+1) +"</td><td><input name='date"+x+"' type='date' placeholder='Date' class='form-control' required/> </td><td><select class='custom-select d-block w-100' name='type"+x+"' required><option value=''>Choose...</option><option value='Misdemeanor'>Misdemeanor</option><option value='Felony'>Felony</option></select></td><td><input type='text' name='description"+x+"' placeholder='Description' class='form-control' required/></td><td><select class='custom-select d-block w-100' name='punishment"+x+"'required><option value=''>Choose...</option><option value='Confinement'>Confinement</option><option value='Probation'>Probation</option><option value='Probation'>Community Service</option><option value='Felony'>Felony</option></select></td><td><input type='number' class='form-control' id='Years' placeholder='Year(s)' name='punishmentyrs"+x+"' required><input type='number' class='form-control' id='Months' placeholder='Month(s)' name='punishmentmth"+x+"' required></td>");

    $('#tab_logic').append('<tr id="criminal'+(x+1)+'"></tr>');
    x++; 
});
    $("#delete_row_criminal").click(function(){
       if(x>1){
       $("#criminal"+(x-1)).html('');
       x--;
       }
    });

});

$(document).ready(function(){
    var j=1;
    $("#add_row_education").click(function(){
    $('#education'+j).html("<td>"+ (j+1) +"</td><td><select class='custom-select d-block w-100' name='type"+j+"' required><option value=''>Choose...</option><option value='highschool'>High School</option><option value='undergraduate'>Undergraduate</option><option value='graduate'>Graduate</option><option value='postGraduate'>Post-Graduate</option><option value='professional'>Professional</option></select></td><td><input type='text' class='form-control' placeholder='School Name' name='schoolName"+j+"' required></td><td><select class='custom-select d-block w-100' name='state"+j+"' required><option value=''>State...</option><option value='AL'>Alabama</option><option value='AK'>Alaska</option><option value='AZ'>Arizona</option><option value='AR'>Arkansas</option><option value='CA'>California</option><option value='CO'>Colorado</option><option value='CT'>Connecticut</option><option value='DE'>Delaware</option><option value='DC'>District Of Columbia</option><option value='FL'>Florida</option><option value='GA'>Georgia</option><option value='HI'>Hawaii</option><option value='ID'>Idaho</option><option value='IL'>Illinois</option><option value='IN'>Indiana</option><option value='IA'>Iowa</option><option value='KS'>Kansas</option><option value='KY'>Kentucky</option><option value='LA'>Louisiana</option><option value='ME'>Maine</option><option value='MD'>Maryland</option><option value='MA'>Massachusetts</option><option value='MI'>Michigan</option><option value='MN'>Minnesota</option><option value='MS'>Mississippi</option><option value='MO'>Missouri</option><option value='MT'>Montana</option><option value='NE'>Nebraska</option><option value='NV'>Nevada</option><option value='NH'>New Hampshire</option><option value='NJ'>New Jersey</option><option value='NM'>New Mexico</option><option value='NY'>New York</option><option value='NC'>North Carolina</option><option value='ND'>North Dakota</option><option value='OH'>Ohio</option><option value='OK'>Oklahoma</option><option value='OR'>Oregon</option><option value='PA'>Pennsylvania</option><option value='RI'>Rhode Island</option><option value='SC'>South Carolina</option><option value='SD'>South Dakota</option><option value='TN'>Tennessee</option><option value='TX'>Texas</option><option value='UT'>Utah</option><option value='VT'>Vermont</option><option value='VA'>Virginia</option><option value='WA'>Washington</option><option value='WV'>West Virginia</option><option value='WI'>Wisconsin</option><option value='WY'>Wyoming</option></select><input type='text' name='city"+j+"' placeholder='City' class='form-control'/></td><td><input type='date' class='form-control' required></td><td><input type='text' class='form-control' placeholder='Accomplishment' name='accomplishment"+j+"' required></td>");

    $('#tab_logic').append('<tr id="education'+(j+1)+'"></tr>');
    x++; 
});
    $("#delete_row_education").click(function(){
       if(j>1){
       $("#education"+(j-1)).html('');
       j--;
       }
    });

});

// Example starter JavaScript for disabling form submissions if there are invalid fields
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



