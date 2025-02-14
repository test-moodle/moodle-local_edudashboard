define([
  "jquery",
  "./chart/apexcharts",
  "./jquery.dataTables",
  "./dataTables.bootstrap4",
], function ($, ApexCharts) {
  return {
    init: function ($data, $linedata) {
      $("#enrolledusers").DataTable();

      let SELECTOR = {
        SHADES: ".siteaccess-values-shade .shades",
      };

      $(document).ready(function () {
        generateShades();

        var options = {
          series: $data,
          chart: {
            height: 500,
            type: "heatmap",
          },
          xaxis: {
            categories: [
              "Domingo",
              "Segunda",
              "Terça",
              "Quarta",
              "Quinta",
              "Sexta",
              "Sábado",
            ],
          },
          plotOptions: {
            heatmap: {
              shadeIntensity: 0,
              radius: 0,
              useFillColorAsStroke: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: 2,
            show: true,
          },
          title: {
            text: "Distribuição de autenticação no site por período do dia",
          },
          colors: ["#1babb1"],
        };
        chart = new ApexCharts(document.getElementById("heatmap"), options);
        chart.render();

        var options = {
          series: [
            {
              name: "Login",
              data: $linedata.data,
            },
          ],
          chart: {
            height: 350,
            type: "area",
          },
          forecastDataPoints: {
            count: 7,
          },
          stroke: {
            width: 1,
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
            categories: $linedata.series,
            tickAmount: 12,
            labels: {
              formatter: function (value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), "dd/MMM/y");
              },
            },
          },
          title: {
            text: "Distribuição de autenticação no Site",
            align: "left",
            style: {
              fontSize: "12px",
              color: "#666",
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              gradientToColors: ["#FDD835"],
              shadeIntensity: 1,
              type: "horizontal",
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100],
            },
          },
        };

        var chart = new ApexCharts(document.getElementById("linemap"), options);
        chart.render();
      });

      /**
       * Generate shades of heatmap.
       */
      function generateShades() {
        let opacity = 0;
        let numberOfShades = 15;
        let increment = 1 / (numberOfShades - 1);
        for (let index = 1; index <= numberOfShades; index++) {
          $(SELECTOR.SHADES).append(
            `<div class="shade" style="opacity: ${opacity};"><div class="shade-inner"></div></div>`
          );
          opacity += increment;
        }
        let width = 100 / numberOfShades;
        $(SELECTOR.SHADES)
          .find(".shade .shade-inner")
          .css("background-color", "#1babb1");
        $(SELECTOR.SHADES)
          .find(".shade")
          .css("width", width + "%");
      }
    },
  };
});
