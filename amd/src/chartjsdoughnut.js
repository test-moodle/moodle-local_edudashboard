

define(['jquery'],



  function($) {

    return {
        init: function($labels,$data, $title) {


          $(document).ready(function() {

            //$('#enrolledusers').DataTable();
              
              var data = {
                labels: $labels,
                datasets: $data
              };

              var options =  {
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'right',
                        padding:34,
                      },
                      datalabels: {
                          display: true,
                          color: '#fff',
                          formatter: (value) => {
                            return "Big Boy";
                          }
                        },
                      title: {
                        display: true,
                        text: $title
                      },
                      tooltip: {
                          callbacks: {
                              label: function(context) {
                                      let label = context.label;
                                  if (context.parsed !== null) {
                                      label += ": "+context.parsed+" Alunos(o)";
                                  }
                                  return label;
                              }
                          }
                      }
        
                    }
                  };

              new Chart('chart-doghnut', {
                type: 'doughnut',
                options: options,
                data: data
              });
            });            

        }
    };
});