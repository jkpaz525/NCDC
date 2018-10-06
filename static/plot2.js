var hailData = [9943, 9392, 9390, 10302, 5353]
var tornadoData = [1042, 1314, 1074, 1636, 615]
var floodData = [1867, 2530, 1662, 2405, 2491]
var flashData = [3202, 5001, 3520, 3589, 1479]
var dustData = [11, 10, 13, 5, 4]

var hailTrace =
{
  x: [2014, 2015, 2016, 2017, 2018],
  y: hailData,
  type: "line",
  name: "Hail",
};
var tornadoTrace = 
{
    x: [2014, 2015, 2016, 2017, 2018],
    y: tornadoData,
    type: "line",
    name: "Tornado",
  };
var floodTrace =
{
    x: [2014, 2015, 2016, 2017, 2018],
    y: floodData,
    type: "line",
    name: "Flood",
  };
var flashTrace = 
{
    x: [2014, 2015, 2016, 2017, 2018],
    y: flashData,
    type: "line",
    name: "Flash Flood",
  };
var dustTrace = 
{
    x: [2014, 2015, 2016, 2017, 2018],
    y: dustData,
    type: "line",
    name: "Dust Devil",
  };
var layout = {
    title: "Disasters over Time",
    xaxis: { title: "Years"},
    yaxis: { title: "# of Disasters" }, 
   };

var lineView = [hailTrace, tornadoTrace, floodTrace, flashTrace, dustTrace];
Plotly.newPlot("line", lineView, layout);


var pieChart= {
    labels: ["Jan", "Feb", "March", "Apr",
        "May", "June", "July", "Aug",
        "Sept", "Oct", "Nov", "Dec"],
    values: [2961, 5337, 10036, 18956, 28921, 38264, 28272, 15561,
        8080, 5073, 2460, 2866],
    type: "pie",
    };
var pieLayout = {
    title: "Disaster per Month",
    };

var pieView = [pieChart];
Plotly.newPlot("pie", pieView, pieLayout);