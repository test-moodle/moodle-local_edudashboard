 
define(['jquery','./jquery.dataTables','./dataTables.bootstrap4'], 

  function($) {

    return {
        init: function($container_selector) {
        	

          $(document).ready(function() {
           	
            	$($container_selector).DataTable();

            });            

        }
    };
});