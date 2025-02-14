define([
  "jquery",
  "./chart/apexcharts",
], function ($, ApexCharts) {
  return {
    init: function ($loginData) {
      var dates = $loginData.map((login) => new Date(login.login_date_with_time));
      var loginCount = {};
      dates.forEach((date) => {
        var dateString = date.toISOString().split("T")[0];
        loginCount[dateString] = (loginCount[dateString] || 0) + 1;
      });

      var newChartData = {
        series: [
          {
            name: "Logins",
            data: Object.values(loginCount),
          },
        ],
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Login History",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: Object.keys(loginCount).map((date) => {
            var dateObj = new Date(date);
            return `${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
          }),
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return parseInt(value);
            },
          },
        },
      };
      
      var newChart = new ApexCharts(
        document.querySelector("#login-chart"),
        newChartData
      );
      newChart.render();
    },
  };
});