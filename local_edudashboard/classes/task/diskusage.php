<?php

namespace local_edudashboard\task;

// This line protects the file from being accessed by a URL directly.
defined('MOODLE_INTERNAL') || die();

use local_edudashboard\extra\util;

class diskusage extends \core\task\scheduled_task {

    
    public function get_name() {
        return "EDUdashboard disk usage task";
    }

    /**
     * Execute the task.
     */
    public function execute() { 

        global $CFG;

        $cache = \cache::make('local_edudashboard', 'admininfos');

        //$totalusage = get_directory_size($CFG->dataroot);

        //$totalusagereadable = number_format(ceil($totalusage / 1048576));
        list($sitesize,$courses_size) = util::getSystemFilesSize();

        $cache->set('totaldiskusage', $sitesize);

        $cache->set('coursesdiskusage', $courses_size);

        return true;
    }

  
}