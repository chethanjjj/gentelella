Morris.Area({
  // ID of the element in which to draw the chart.
  element: 'temp',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { time: '6AM', temp: 36.1},
    { time: '7AM', temp: 33.1},
    { time: '8AM', temp: 39},
    { time: '9AM', temp: 45},
    { time: '10AM', temp: 31}
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'time',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['temp'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ["Temperature"],
  parseTime: false,
  hideHover: true,
  behaveLikeLine: true
});

Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'resp',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { time: '6AM', curve1: 20, curve2: 50},
    { time: '7AM', curve1: 10, curve2: 90},
    { time: '8AM', curve1: 5, curve2: 100},
    { time: '9AM', curve1: 5, curve2: 20},
    { time: '10AM', curve1: 20, curve2: 60}
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'time',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['curve1', 'curve2'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Curve 1', 'Curve 2'],
  parseTime: false,
  hideHover: true,
});

Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'hr',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { time: '6AM', hr: 70, sys: 135, dia: 80},
    { time: '7AM', hr: 72, sys: 140, dia: 77},
    { time: '8AM', hr: 73, sys: 144, dia: 78},
    { time: '9AM', hr: 73, sys: 142, dia: 77},
    { time: '10AM', hr: 71, sys: 148, dia: 80}
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'time',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['sys', 'dia', 'hr'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Systolic', 'Diastolic', 'Heart Rate'],
  parseTime: false,
  hideHover: true,
});
