define(['jquery','core/ajax'],

  function($, ajax) {

    return {
        init: function() {

            $(document).ready(function() {

		    var promises = ajax.call([
		    	
		        { methodname: 'local_edudashboard_siteaccess', 'args': {'startdate': 'nonyet', 'enddate': 'nonyet'} }		       
		    ]);

			   promises[0].done(function(response) {
			       console.log('mod_wiki/pluginname is' + response);
			   }).fail(function(ex) {
			   	 console.log("Erorr Showing");
			     console.log(ex);
			   });
			  
				        
            });
        }
    }
}) 