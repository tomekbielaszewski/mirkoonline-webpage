$(function () {
    var dayAgo = new Date().getTime() - (1000 * 60 * 60 * 48);
    $.ajax({
        url: "http://46.101.0.193:8080/entries/mirkoonline/" + dayAgo,
        dataType: "jsonp",
        success: function (mirkoonlineData) {
            var formattedData = [];

            $.each(mirkoonlineData, function (index, entry) {
                formattedData.push([entry.date, parseInt(entry.value)]);
            });

            function doPlot() {
                $.plot($("#flot-multiple-axes-chart"), [{
                    data: formattedData,
                    label: "Aktywnych"
                }, {
                    yaxis: 2
                }], {
                    xaxes: [{
                        mode: 'time'
                    }],
                    yaxes: [{
                        min: 0
                    }, {
                        alignTicksWithAxis: 1,
                        position: "right"
                    }],
                    legend: {
                        position: 'sw'
                    },
                    grid: {
                        hoverable: true //IMPORTANT! this is needed for tooltip to work
                    },
                    tooltip: true,
                    tooltipOpts: {
                        content: "Data: %x;Aktywnych:%y",
                        xDateFormat: "%y-%0m-%0d %0h:%0M",

                        onHover: function (flotItem, $tooltipEl) {
                            // console.log(flotItem, $tooltipEl);
                        }
                    }
                });
            }

            doPlot();
        }
    });
});

$(function () {
    $.ajax({
        url: 'http://46.101.0.193:8080/entries/last/mirkoonline',
        dataType: 'jsonp',
        success: function (data) {
            $('#active_users').text(data.value);
        },
        error: function () {
            $('#active_users').text('Bot niedostepny... ;___;');
        }
    });
});