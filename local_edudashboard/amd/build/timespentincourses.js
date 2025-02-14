define(["jquery", "./chart/apexcharts"], function ($, ApexCharts) {
  return {
    init: function ($timeSpentInCoursesData) {
      // ver a medida do tempo depois
      var xaxisdata = $timeSpentInCoursesData.map((course) => course.timespent);
      var yaxisdata = $timeSpentInCoursesData.map((course) => course.name);
      var options = {
        series: [
          {
            name: "time spent in minutes:",
            data: xaxisdata,
          },
        ],
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "Time spent in courses",
          align: "left",
        },
        xaxis: {
          categories: yaxisdata,
        },
      };

      var chart = new ApexCharts(
        document.querySelector("#courses-chart"),
        options
      );
      chart.render();
    },
  };
});
