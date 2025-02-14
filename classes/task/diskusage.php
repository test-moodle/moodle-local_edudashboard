<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * 
 *
 * @package      local_edudashboard
 * @copyright   2025 edudigital <geral@edudigital-learn.com>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

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