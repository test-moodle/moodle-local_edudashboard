

define(['jquery','./chart/apexcharts'], 

  function($,ApexCharts) {

    return {
        init: function($labels,$data,$title) {

          $(document).ready(function() {
             
                   var options = {
                          series: $data[0].data,
                          chart: {
                             height: 480,
                             width:480,
                            type: "donut"
                          },
                          title: {
                              text: $title,
                              align: 'center',
                              margin: 20,
                              offsetX: 0,
                              offsetY: 0,
                              floating: false,
                              style: {
                                fontSize:  '14px',
                                fontWeight:  'bold',
                                fontFamily:  undefined,
                                color:  '#263238'
                              },
                          },
                          legend: {
                                  position: "bottom",
                                  horizontalAlign: 'center',
                                },
                          labels: $labels,
                          responsive: [
                            {
                              breakpoint: 100,
                              options: {
                                chart: {
                                  width: "100%"
                                }
                              }
                            }
                          ]
                        };

              var chart = new ApexCharts(document.getElementById("apex-chart-doghnut"), options);
              chart.render(); 
                      
            });         

        }
    };
});