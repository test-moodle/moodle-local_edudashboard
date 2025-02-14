<?php
// This file is part of Moodle - https://moodle.org/
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
 * Adds admin settings for the plugin.
 *
 * @package     local_edudashboard
 * @category    admin
 * @copyright   2025 edudigital <geral@edudigital-learn.com>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

// Ensure the configurations for this site are set
if ($hassiteconfig) {

    // Create the new settings page
    // - in a local plugin this is not defined as standard, so normal $settings->methods will throw an error as
    // $settings will be NULL
    $settings = new admin_settingpage('local_edudashboard', 'EDUDashboard Settings');

    $ADMIN->add('localplugins', new admin_category('edudashboard', "EDUDashboard Settings"));

    // Create 

    
    $settings->add(
        new admin_setting_configcheckbox(
            'local_edudashboard/show_hidden_categories',
            "Report Block: Show Hidden Categories",
            "'Yes'  to includes hidden categories on the report block",
            0
        )
    );

    $settings->add(
        new admin_setting_configcheckbox(
            'local_edudashboard/show_admin_courses',
            "EDUDashboard Main Page: Show Admin Courses",
            "'Yes'  shows a panel with courses related to admin user",
            0
        )
    );

    $settings->add(
        new admin_setting_configcheckbox(
            'local_edudashboard/show_admin_reports',
            "EDUDashboard Main Page: Show Admin Reports",
            "'Yes'  shows all admin main page reports to any users of the site.",
            0
        )
    );

    $settings->add(
        new admin_setting_configtext(

            // This is the reference you will use to your configuration
            'local_edudashboard/maxdiskocupation',

            // This is the friendly title for the config, which will be displayed
            'Disk: Max size (GB)',

            // This is helper text for this config field
            'This value is used to calculate the disk usage in report. <b><br>0</b> means no max size',

            // This is the default value
            '0',

            // This is the type of Parameter this config is
            PARAM_FLOAT

        ));

    $ADMIN->add('edudashboard', $settings);




}