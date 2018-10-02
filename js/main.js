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

$.validator.addMethod( "at_least_one", function() {
    return $( "input[name='number[]']:checked" ).length;
}, 'Select at least one number' );

$('#myform').validate({// initialize the plugin
          errorElement: 'div',
          rules: {
                        "number[]": "at_least_one",
            datetimepicker: {
              required: true,
              date: true
            },
            commercialText: {
              required: true,
              minlength: 5
            },
            terms: {
              required: true,
              maxlength: 2
            }
          },
          submitHandler: function (form) { 
            var text = $("#customtext").val();
            var date = $("#datetimepicker").val();
            var stand = 2; 
            $.ajax({
              url: 'savedatanow.php',
              type: "POST",
              data: {
                text: text,
                date: date,
                stand: stand
                
              },
              dataType:'text',
              success: function(response)
              {
                
                alert(response);
              }
            });
            //alert('outside ajax');
          },
          highlight: function (element) {
            $(element).closest('.form-group').removeClass('success').addClass('has-error');
          },
          success: function (element) {
            element.addClass('valid')
              .closest('.form-group').removeClass('error').addClass('has-success');
          }         
        });