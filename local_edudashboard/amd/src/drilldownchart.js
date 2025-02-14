define(['jquery'], 

  function($) {

    return {
        init: function($download,$data,$container_id) {

          $(document).ready(function() {
              
              Highcharts.chart($container_id, {
                chart: {
                  type: 'column'
                },
                title: {
                  align: 'left',
                  text: $data.charttitle
                },
                subtitle: {
                  align: 'left',
                  text: $data.chartsubtitle
                },
                accessibility: {
                  announceNewData: {
                    enabled: true
                  }
                },
                xAxis: {
                  type: 'category'
                },
                yAxis: {
                  title: {
                    text: $data.ytitle
                  }

                },
                legend: {
                  enabled: false
                },
                plotOptions: {
                  series: {
                    borderWidth: 0,
                    dataLabels: {
                      enabled: true,
                      format: '{point.y} {point.subject}'
                    }
                  }
                },

                tooltip: {
                  headerFormat: '',//'<span style="font-size:11px">{series.name}</span><br>',
                  pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> {point.subject}<br/>'
                },

                series: $data.series,
                drilldown: {
                  breadcrumbs: {
                    position: {
                      align: 'right'
                    }
                  },
                  series: $data.drilldown
                }});

            });            

        }
    };
});