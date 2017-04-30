// temperature graph
Morris.Area({
  // ID of the element in which to draw the chart.
  element: 'temp',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { time: '8:00', temp: 36.1},
    { time: '9:00', temp: 33.1},
    { time: '10:00', temp: 39},
    { time: '11:00', temp: 45},
    { time: '12:00', temp: 31},
    { time: '13:00', temp: 36.4},
    { time: '14:00', temp: 36.4},
    { time: '15:00', temp: 36.3},
    { time: '16:00', temp: 36.4},
    { time: '17:00', temp: 36.2},
    { time: '18:00', temp: 36.3},
    { time: '19:00', temp: 36.7},
    { time: '20:00', temp: 36.5},
    { time: '21:00', temp: 36.6},
    { time: '22:00', temp: 36.4},
    { time: '23:00', temp: 36.5},
    { time: '0:00', temp: 36.5},
    { time: '1:00', temp: 36.6},
    { time: '2:00', temp: 36.4},
    { time: '3:00', temp: 36.5},
    { time: '4:00', temp: 39.7},
    { time: '5:00', temp: 48},
    { time: '6:00', temp: 40},
    { time: '7:00', temp: 41},
    { time: '8:00', temp: 42}
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'time',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['temp'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ["Temperature"],
  xLabels: "hour",
  parseTime: false,
  hideHover: true,
  behaveLikeLine: true,
  pointSize: 0,
  grid: false
});

// heart and respiration rate
Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'hr',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { time: '8:00', hr: 57, rr: 10},
    { time: '9:00', hr: 54, rr: 11},
    { time: '10:00', hr: 53, rr: 12},
    { time: '11:00', hr: 55, rr: 11},
    { time: '12:00', hr: 50, rr: 12},
    { time: '13:00', hr: 48, rr: 11},
    { time: '14:00', hr: 57, rr: 12},
    { time: '15:00', hr: 53, rr: 12},
    { time: '16:00', hr: 55, rr: 12},
    { time: '17:00', hr: 56, rr: 12},
    { time: '18:00', hr: 56, rr: 10},
    { time: '19:00', hr: 61, rr: 11},
    { time: '20:00', hr: 60, rr: 11},
    { time: '21:00', hr: 57, rr: 11},
    { time: '22:00', hr: 48, rr: 11},
    { time: '23:00', hr: 48, rr: 11},
    { time: '0:00', hr: 0, rr: 16},
    { time: '1:00', hr: 67, rr: 16},
    { time: '2:00', hr: 70, rr: 22},
    { time: '3:00', hr: 65, rr: 10},
    { time: '4:00', hr: 66, rr: 9},
    { time: '5:00', hr: 58, rr: 10},
    { time: '6:00', hr: 68, rr: 10},
    { time: '7:00', hr: 67, rr: 10},
    { time: '8:00', hr: 67, rr: 10}
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'time',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['hr', 'rr'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ["Heart Rate", "Resp Rate"],
  xLabels: "hour",
  parseTime: false,
  hideHover: true,
  behaveLikeLine: true,
  pointSize: 0,
  grid: false
});

// respiration graph
Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'resp',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { time: '8:00', rt: 25, pip: 40, peep: 28},
    { time: '9:00', rt: 10, pip: 38, peep: 19},
    { time: '10:00', rt: 10, pip: 35, peep: 18},
    { time: '11:00', rt: 10, pip: 30, peep: 16},
    { time: '12:00', rt: 10, pip: 30, peep: 16},
    { time: '13:00', rt: 10, pip: 30, peep: 16},
    { time: '14:00', rt: 10, pip: 30, peep: 16},
    { time: '15:00', rt: 10, pip: 30, peep: 16},
    { time: '16:00', rt: 10, pip: 30, peep: 16},
    { time: '17:00', rt: 10, pip: 30, peep: 16},
    { time: '18:00', rt: 10, pip: 30, peep: 16},
    { time: '19:00', rt: 10, pip: 30, peep: 16},
    { time: '20:00', rt: 10, pip: 30, peep: 16},
    { time: '21:00', rt: 10, pip: 30, peep: 16},
    { time: '22:00', rt: 10, pip: 30, peep: 16},
    { time: '23:00', rt: 10, pip: 30, peep: 16},
    { time: '0:00', rt: 10, pip: 30, peep: 16},
    { time: '1:00', rt: 10, pip: 30, peep: 16},
    { time: '2:00', rt: 10, pip: 30, peep: 16},
    { time: '3:00', rt: 10, pip: 30, peep: 16},
    { time: '4:00', rt: 10, pip: 30, peep: 16},
    { time: '5:00', rt: 10, pip: 30, peep: 16},
    { time: '6:00', rt: 10, pip: 30, peep: 16},
    { time: '7:00', rt: 12, pip: 30, peep: 16},
    { time: '8:00', rt: 10, pip: 30, peep: 16}
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'time',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['pip', 'peep', 'rt'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ["PIP", "PEEP", "Rate"],
  xLabels: "hour",
  parseTime: false,
  hideHover: true,
  behaveLikeLine: true,
  pointSize: 0,
  grid: false
});

// o2 and co2 graph
Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'o2_co2',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { time: '8:00', so2: 98, fo2: 30, co2: 37},
    { time: '9:00', so2: 99, fo2: 30, co2: 38},
    { time: '10:00', so2: 100, fo2: 30, co2: 39},
    { time: '11:00', so2: 100, fo2: 30, co2: 40},
    { time: '12:00', so2: 99, fo2: 30, co2: 30},
    { time: '13:00', so2: 99, fo2: 30, co2: 35},
    { time: '14:00', so2: 100, fo2: 30, co2: 28},
    { time: '15:00', so2: 80, fo2: 12, co2: 32},
    { time: '16:00', so2: 90, fo2: 12, co2: 25},
    { time: '17:00', so2: 100, fo2: 12, co2: 26},
    { time: '18:00', so2: 82, fo2: 12, co2: 15},
    { time: '19:00', so2: 89, fo2: 12, co2: 18},
    { time: '20:00', so2: 91, fo2: 12, co2: 30},
    { time: '21:00', so2: 95, fo2: 12, co2: 25},
    { time: '22:00', so2: 100, fo2: 12, co2: 38},
    { time: '23:00', so2: 95, fo2: 12, co2: 38},
    { time: '0:00', so2: 93, fo2: 12, co2: 40},
    { time: '1:00', so2: 92, fo2: 12, co2: 40},
    { time: '2:00', so2: 92, fo2: 12, co2: 41},
    { time: '3:00', so2: 92, fo2: 12, co2: 35},
    { time: '4:00', so2: 80, fo2: 12, co2: 36},
    { time: '5:00', so2: 89, fo2: 12, co2: 50},
    { time: '6:00', so2: 92, fo2: 12, co2: 48},
    { time: '7:00', so2: 95, fo2: 12, co2: 50},
    { time: '8:00', so2: 100, fo2: 12, co2: 45}
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'time',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['so2', 'fo2', 'co2'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ["SpO2", "FiO2", "ETCO2"],
  xLabels: "hour",
  parseTime: false,
  hideHover: true,
  behaveLikeLine: true,
  pointSize: 0,
  grid: false
});

// blood pressure graph
Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'bp',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { time: '8:00', bp: 107, sys: 132, dia: 91},
    { time: '9:00', bp: 106, sys: 131, dia: 91},
    { time: '10:00', bp: 106, sys: 131, dia: 91},
    { time: '11:00', bp: 106, sys: 131, dia: 92},
    { time: '12:00', bp: 107, sys: 132, dia: 91},
    { time: '13:00', bp: 106, sys: 131, dia: 91},
    { time: '14:00', bp: 106, sys: 131, dia: 94},
    { time: '15:00', bp: 98, sys: 123, dia: 84},
    { time: '16:00', bp: 95, sys: 120, dia: 81},
    { time: '17:00', bp: 98, sys: 123, dia: 85},
    { time: '18:00', bp: 105, sys: 131, dia: 90},
    { time: '19:00', bp: 115, sys: 135, dia: 90},
    { time: '20:00', bp: 115, sys: 135, dia: 100},
    { time: '21:00', bp: 123, sys: 144, dia: 97},
    { time: '22:00', bp: 93, sys: 115, dia: 81},
    { time: '23:00', bp: 89, sys: 112, dia: 76},
    { time: '0:00', bp: 84, sys: 105, dia: 71},
    { time: '1:00', bp: 98, sys: 105, dia: 84},
    { time: '2:00', bp: 99, sys: 120, dia: 86},
    { time: '3:00', bp: 94, sys: 123, dia: 81},
    { time: '4:00', bp: 92, sys: 112, dia: 79},
    { time: '5:00', bp: 87, sys: 113, dia: 74},
    { time: '6:00', bp: 85, sys: 108, dia: 73},
    { time: '7:00', bp: 85, sys: 109, dia: 73},
    { time: '8:00', bp: 86, sys: 105, dia: 93}
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'time',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['bp', 'sys', 'dia'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ["Blood Pressure", "Systolic BP", "Diastolic BP"],
  xLabels: "hour",
  parseTime: false,
  hideHover: true,
  behaveLikeLine: true,
  pointSize: 0,
  grid: false
});

// intake and output graph
// creating intake and output data
var xValue = ['4/25/17', '4/26/17', '4/27/17', '4/28/17', '4/29/17', 'Total'];
var yValue_output = [-2500, -1400, -2300, -3000, -800];
var yValue_input = [2000, 2000, 7000, 2100, 800];
// summing function
function getSum(total, num) {
    return total + num;
}
// sum of intake and output
var yValue_output_total = yValue_output.reduce(getSum);
var yValue_input_total = yValue_input.reduce(getSum);
// add sum values to arrays
yValue_output.push(yValue_output_total)
yValue_input.push(yValue_input_total)
// output data
var output = {
  x: xValue,
  y: yValue_output,
  name: 'Output',
  type: 'bar',
    marker: {
    color: 'rgb(246, 209, 85)',
    opacity: 0.5
  }
};
// intake data
var input = {
  x: xValue,
  y: yValue_input,
  name: 'Intake',
  type: 'bar',
  marker: {
    color: 'rgb(76, 106, 146)',
    opacity: 0.5,
  }  
};
var annotationContent = [];
var data = [input, output];
var layout = {barmode: 'relative',
annotations: annotationContent,
yaxis: {
  showgrid: false,
  showline: false
}};
// adds the difference between intake and output value to the top of each bar graph
for( var i = 0 ; i < xValue.length ; i++ ){
  var result = {
    x: xValue[i],
    y: yValue_input[i],
    text: yValue_input[i] + yValue_output[i],
    xanchor: 'center',
    yanchor: 'bottom',
    showarrow: false
  };
  annotationContent.push(result);
}
// plot data
Plotly.newPlot('intake_output', data, layout);
