 $(document).ready(function(){
    var i=1;
    $("#add_row").click(function(){
    $('#addr'+i).html("<td>"+ (i+1) +"</td><td><input name='date"+i+"' type='date' placeholder='Date' class='form-control' required/> </td><td><select class='custom-select d-block w-100' name='type0' required><option value=''>Choose...</option><option value='Misdemeanor'>Misdemeanor</option><option value='Felony'>Felony</option></select></td><td><input type='text' name='description0' placeholder='Description' class='form-control'/></td><td><select class='custom-select d-block w-100' name='punishment0'required><option value=''>Choose...</option><option value='Confinement'>Confinement</option><option value='Probation'>Probation</option><option value='Probation'>Community Service</option><option value='Felony'>Felony</option></select></td><td><input type='number' class='form-control' id='Years' placeholder='Year(s)' name='punishmentyrs0' required><input type='number' class='form-control' id='Months' placeholder='Month(s)' name='punishmentmth0' required></td>");

    $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
    i++; 
});
    $("#delete_row").click(function(){
       if(i>1){
       $("#addr"+(i-1)).html('');
       i--;
       }
    });

});

