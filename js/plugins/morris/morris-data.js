$(function () {
  var dayAgo = new Date().getTime() - (1000 * 60 * 60 * 48);
  $.ajax({
    url: "http://35.160.50.195:8080/entries/mirkoonline/" + dayAgo,
    dataType: "jsonp",
    success: function (mirkoonlineData) {
      Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: mirkoonlineData,
        // The name of the data record attribute that contains x-visitss.
        xkey: 'date',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['value'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Aktywnych'],
        // Disables line smoothing
        smooth: false,
        resize: true,
        dateFormat: function (x) {
          return new Date(x).toString();
        }
      });
    }
  });
});
