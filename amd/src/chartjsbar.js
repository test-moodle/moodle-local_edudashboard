

define(['jquery','./jquery.dataTables','./dataTables.bootstrap4'],



  function($) {

    return { 
        init: function($labels,$data,$title) {


          $(document).ready(function() {

            $('#enrolledusers, .student-courses').DataTable();
              
              var data = {
                labels: $labels,
                datasets: $data
              };

              var options = {
                maintainAspectRatio: false,
                scales: {
                  y: {
                    stacked: true,
                    grid: {
                      display: true,
                      color: "rgba(255,99,132,0.2)"
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    }
                  }
                },
                  scales: {
                      
                  },              
                plugins:{             
                  title: {
                        display: true,
                        text: $title
                      }
                    },            
              };

              new Chart('chart', {
                type: 'bar',
                options: options,
                data: data
              });
            });            

        }
    };
});