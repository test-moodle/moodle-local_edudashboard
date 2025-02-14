<?php

require_once('../../../config.php');
global $CFG;
require_once($CFG->libdir.'/dataformatlib.php');
global $DB;

//print_object($DB);
/**
 * Custom educompletion downloader
 *
 * @package    local_edudashboard
 * @copyright  2025 EDUdigital - http://edudigital.pt
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

$dataformat = optional_param('dataformat', '', PARAM_ALPHA);

$columns = array(
    'idnumber' => get_string('idnumber'),
);

$rs = $DB->get_recordset_sql("SELECT * from {user}",null, 0, $limitnum=9);

download_as_dataformat('myfilename', $dataformat, $columns, $rs);

$rs->close();

header('Location: ' . $_SERVER['HTTP_REFERER']);
exit;