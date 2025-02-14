define(['jquery', 'core/str'], function($, str) {
    return {
        loadLangStrings: function(callback) {
            str.get_strings([
                {key: 'viewFullscreen', component: 'local_edudashboard'},
                {key: 'exitFullscreen', component: 'local_edudashboard'},
                {key: 'printChart', component: 'local_edudashboard'},
                {key: 'downloadPNG', component: 'local_edudashboard'},
                {key: 'downloadJPEG', component: 'local_edudashboard'},
                {key: 'downloadPDF', component: 'local_edudashboard'},
                {key: 'downloadSVG', component: 'local_edudashboard'},
                {key: 'contextButtonTitle', component: 'local_edudashboard'}
            ]).done(function(strings) {
                const lang = {
                    viewFullscreen: strings[0],
                    exitFullscreen: strings[1],
                    printChart: strings[2],
                    downloadPNG: strings[3],
                    downloadJPEG: strings[4],
                    downloadPDF: strings[5],
                    downloadSVG: strings[6],
                    contextButtonTitle: strings[7]
                };
                callback(lang);
            }).fail(function() {
                console.error('Error loading language strings');
            });
        }
    };
});
