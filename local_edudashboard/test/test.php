<?php

define('CLI_SCRIPT', true);



require_once("/var/www/html/server/local/edudashboard/classes/task/get_coursesreport.php");

class coursecompletion_data_test{

use \local_edudashboard\task\get_coursesreport; 

}

coursecompletion_data_test::get_coursesreport();



