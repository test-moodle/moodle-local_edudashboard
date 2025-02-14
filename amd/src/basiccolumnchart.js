
define(['jquery'], 

  function($) {

    return {
        init: function($download,$data,$container_id) {
            
  
          
          $(document).ready(function() {

            

            Highcharts.chart($container_id, {
                chart: {
                  type: 'column'
                },
                navigation:{
                buttonOptions:{
                  enabled: $download,
                }
              },
                title: {
                  text: $data.charttitle
                },
                subtitle: {
                  text: $data.chartsubtitle
                },
                xAxis: {
                  categories: $data.xAxis_categories,
                  crosshair: true
                },
                yAxis: {
                  min: 0,
                  title: {
                    text: $data.chartyAxistitle
                  }
                },
                tooltip: {
                  headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                  pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                  footerFormat: '</table>',
                  shared: true,
                  useHTML: true
                },
                plotOptions: {
                  column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                  }
                },
                series: $data.series
              });
            });            

        }
    };
});