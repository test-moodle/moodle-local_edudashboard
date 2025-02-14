 
define(['jquery','./chart/apexcharts'], 

  function($,ApexCharts) {

    return {
        init: function($download,$data,$container_id) {

          

          $(document).ready(function() {
            
        var options = {
          series: $data.series,
          chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: $data.charttitle
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: $data.xAxis_categories,
        yaxis: [{
          title: {
            text: $data.chartyleftAxistitle,
          },
        
        }, {
          opposite: true,
          title: {
            text: $data.chartyrighttAxistitle
          }
        }]
        };
        var chart = new ApexCharts(document.getElementById($container_id), options);
        chart.render();
            });            

        }
    };
});