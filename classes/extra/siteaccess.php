<?php

/**
 * Custom educompletion extras functions
 *
 * @package    local_edudashboard
 * @copyright  2025 EDUdigital - https://edudigital.pt
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
namespace local_edudashboard\extra;

defined('MOODLE_INTERNAL') || die();

use stdClass;  
global $CFG;


class siteaccess{

    public static function counttodaysusers()
    {
        global $DB;

        return $DB->get_record_sql("SELECT count(id) as logins FROM {logstore_standard_log} WHERE action ='loggedin' and timecreated >= ".strtotime("today"))->logins;
        // code...
    }


}