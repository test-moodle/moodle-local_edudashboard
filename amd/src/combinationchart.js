 
define(['jquery'], 

  function($) {

    return {
        init: function($download,$data,$container_id) {

        	

          $(document).ready(function() {
          	
		Highcharts.chart($container_id, {
				  title: {
				    text: $data.charttitle
				  },
				  xAxis: {
				    categories: $data.xAxis_categories,
				  },
				  yAxis: {
                  min: 0,
                  title: {
                    text: $data.chartyAxistitle
                  }
                },
				  labels: {
				    items: [{
				      html: $data.chartsubtitle,
				      style: {
				        left: '50px',
				        top: '18px',
				        color: ( // theme
				          Highcharts.defaultOptions.title.style &&
				          Highcharts.defaultOptions.title.style.color
				        ) || 'black'
				      }
				    }]
				  },
				  series: $data.series
				});
            });            

        }
    };
});