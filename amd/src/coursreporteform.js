define(['jquery'], 

  function($) {

    return {
        laodMyForm: function($wwwroot) {     

          $(document).ready(function() {

           $("#course_select").change(function (ARG) {
              location.href = $wwwroot+"/local/edudashboard/coursereport.php"+'?id='+$(this).val();
              //alert($(this).val());
           });
             
    });
}
}
});
