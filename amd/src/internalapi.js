 define("local_edudashboard/internalapi",['core/ajax'],

  function(ajax) {

    return {
        siteaccess: function($startdate, $enddate) {

         return ajax.call([{
            	methodname: 'local_edudashboard_siteaccess',
	            args: {startdate: $startdate, enddate: $enddate}

	          }])[0];

        }
    }
});