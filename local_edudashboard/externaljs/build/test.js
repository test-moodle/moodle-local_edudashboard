require(['local_edudashboard/lang_loader'], function(langLoader) {
    langLoader.loadLangStrings(function(lang) {
        Highcharts.setOptions({
            lang: lang // Define as strings traduzidas carregadas dinamicamente
        });

        (function(a) {
            "object" === typeof module && module.exports 
                ? (a["default"] = a, module.exports = a)
                : "function" === typeof define && define.amd
                    ? define("highcharts/modules/exporting", ["highcharts"], function(h) {
                        a(h);
                        a.Highcharts = h;
                        return a;
                    })
                    : a("undefined" !== typeof Highcharts ? Highcharts : void 0);
        })(function(a) {
            function h(a, b, t, n) {
                a.hasOwnProperty(b) || (a[b] = n.apply(null, t),
                "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
                    detail: { path: b, module: a[b] }
                })));
            }

            a = a ? a._modules : {};
            h(a, "Extensions/Exporting/ExportingDefaults.js", [a["Core/Globals.js"]], function(a) {
                return {
                    exporting: {
                        type: "image/png",
                        url: "https://export.highcharts.com/",
                        pdfFont: { normal: void 0, bold: void 0, bolditalic: void 0, italic: void 0 },
                        printMaxWidth: 780,
                        scale: 2,
                        buttons: {
                            contextButton: {
                                className: "highcharts-contextbutton",
                                menuClassName: "highcharts-contextmenu",
                                symbol: "menu",
                                titleKey: "contextButtonTitle",
                                menuItems: [
                                    "viewFullscreen",
                                    "printChart",
                                    "separator",
                                    "downloadPNG",
                                    "downloadJPEG",
                                    "downloadPDF",
                                    "downloadSVG"
                                ]
                            }
                        },
                        menuItemDefinitions: {
                            viewFullscreen: { textKey: "viewFullscreen", onclick: function() { this.fullscreen.toggle(); }},
                            printChart: { textKey: "printChart", onclick: function() { this.print(); }},
                            separator: { separator: !0 },
                            downloadPNG: { textKey: "downloadPNG", onclick: function() { this.exportChart(); }},
                            downloadJPEG: { textKey: "downloadJPEG", onclick: function() { this.exportChart({ type: "image/jpeg" }); }},
                            downloadPDF: { textKey: "downloadPDF", onclick: function() { this.exportChart({ type: "application/pdf" }); }},
                            downloadSVG: { textKey: "downloadSVG", onclick: function() { this.exportChart({ type: "image/svg+xml" }); }}
                        },

                        lang: lang // Agora a tradução é carregada dinamicamente
                    }
                };
            });
        });
    });
});
