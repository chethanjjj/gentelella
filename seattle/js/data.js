$(function () { 
Highcharts.chart('temp', {
    chart: {
        type: 'spline'
      },
      credits: {
      enabled: false
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: ""
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0,
      },
      legend: {
        enabled: false
      },
      title:{
        text:""
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      series: [{
        name: "Temperature",
        color: "#0078B5",
        data: [
            [Date.UTC(2017, 5, 22, 8), 36.1],
            [Date.UTC(2017, 5, 22, 9), 33.1],
            [Date.UTC(2017, 5, 22, 10), 39],
            [Date.UTC(2017, 5, 22, 11), 45],
            [Date.UTC(2017, 5, 22, 12), 31],
            [Date.UTC(2017, 5, 22, 13), 36.4],
            [Date.UTC(2017, 5, 22, 14), 36.4],
            [Date.UTC(2017, 5, 22, 15), 36.3],
            [Date.UTC(2017, 5, 22, 16), 36.4],
            [Date.UTC(2017, 5, 22, 17), 36.2],
            [Date.UTC(2017, 5, 22, 18), 36.3],
            [Date.UTC(2017, 5, 22, 19), 36.7],
            [Date.UTC(2017, 5, 22, 20), 36.5],
            [Date.UTC(2017, 5, 22, 21), 36.6],
            [Date.UTC(2017, 5, 22, 22), 36.4],
            [Date.UTC(2017, 5, 22, 23), 36.5],
            [Date.UTC(2017, 5, 23, 0), 36.5],
            [Date.UTC(2017, 5, 23, 1), 36.6],
            [Date.UTC(2017, 5, 23, 2), 36.4],
            [Date.UTC(2017, 5, 23, 3), 36.5],
            [Date.UTC(2017, 5, 23, 4), 39.7],
            [Date.UTC(2017, 5, 23, 5), 48],
            [Date.UTC(2017, 5, 23, 6), 40],
            [Date.UTC(2017, 5, 23, 7), 41],
            [Date.UTC(2017, 5, 23, 8), 42]
        ]
      }]
    });
Highcharts.chart('hr', {
    chart: {
        type: 'spline'
      },
      credits: {
      enabled: false
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: [
      {
        title: {
          text: ""
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0,
      }, {
        opposite: true,
        title: {
          text: ""
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        max: 15,
        min: 5
      }
      ],
      title:{
        text:""
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      series: [
      {
        name: "HR",
        color: "#0078B5",
        data: [
            [Date.UTC(2017, 5, 22, 8), 57],
            [Date.UTC(2017, 5, 22, 9), 54],
            [Date.UTC(2017, 5, 22, 10), 53],
            [Date.UTC(2017, 5, 22, 11), 50],
            [Date.UTC(2017, 5, 22, 12), 45],
            [Date.UTC(2017, 5, 22, 13), 57],
            [Date.UTC(2017, 5, 22, 14), 53],
            [Date.UTC(2017, 5, 22, 15), 56],
            [Date.UTC(2017, 5, 22, 16), 56],
            [Date.UTC(2017, 5, 22, 17), 56],
            [Date.UTC(2017, 5, 22, 18), 61],
            [Date.UTC(2017, 5, 22, 19), 60],
            [Date.UTC(2017, 5, 22, 20), 0],
            [Date.UTC(2017, 5, 22, 21), 67],
            [Date.UTC(2017, 5, 22, 22), 70],
            [Date.UTC(2017, 5, 22, 23), 66],
            [Date.UTC(2017, 5, 23, 0), 58],
            [Date.UTC(2017, 5, 23, 1), 55],
            [Date.UTC(2017, 5, 23, 2), 60],
            [Date.UTC(2017, 5, 23, 3), 61],
            [Date.UTC(2017, 5, 23, 4), 65],
            [Date.UTC(2017, 5, 23, 5), 55],
            [Date.UTC(2017, 5, 23, 6), 60],
            [Date.UTC(2017, 5, 23, 7), 62],
            [Date.UTC(2017, 5, 23, 8), 60]
            ]
      }, {
        name: "RR",
        color: "#F16524",
        yAxis: 1,
        data: [
            [Date.UTC(2017, 5, 22, 8), 10],
            [Date.UTC(2017, 5, 22, 9), 11],
            [Date.UTC(2017, 5, 22, 10), 12],
            [Date.UTC(2017, 5, 22, 11), 11],
            [Date.UTC(2017, 5, 22, 12), 11],
            [Date.UTC(2017, 5, 22, 13), 10],
            [Date.UTC(2017, 5, 22, 14), 11],
            [Date.UTC(2017, 5, 22, 15), 13],
            [Date.UTC(2017, 5, 22, 16), 11],
            [Date.UTC(2017, 5, 22, 17), 12],
            [Date.UTC(2017, 5, 22, 18), 10],
            [Date.UTC(2017, 5, 22, 19), 9],
            [Date.UTC(2017, 5, 22, 20), 9],
            [Date.UTC(2017, 5, 22, 21), 11],
            [Date.UTC(2017, 5, 22, 22), 12],
            [Date.UTC(2017, 5, 22, 23), 13],
            [Date.UTC(2017, 5, 23, 0), 12],
            [Date.UTC(2017, 5, 23, 1), 11],
            [Date.UTC(2017, 5, 23, 2), 10],
            [Date.UTC(2017, 5, 23, 3), 12],
            [Date.UTC(2017, 5, 23, 4), 10],
            [Date.UTC(2017, 5, 23, 5), 10],
            [Date.UTC(2017, 5, 23, 6), 10],
            [Date.UTC(2017, 5, 23, 7), 10],
            [Date.UTC(2017, 5, 23, 8), 10]
          ]
        }
      ]
    });
Highcharts.chart('resp', {
    chart: {
        type: 'spline'
      },
      credits: {
      enabled: false
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis:
      {
        title: {
          text: ""
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0,
      },
      title:{
        text:""
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      series: [
      {
        name: "Rate",
        color: "#0078B5",
        data: [
            [Date.UTC(2017, 5, 22, 8), 25],
            [Date.UTC(2017, 5, 22, 9), 10],
            [Date.UTC(2017, 5, 22, 10), 10],
            [Date.UTC(2017, 5, 22, 11), 10],
            [Date.UTC(2017, 5, 22, 12), 11],
            [Date.UTC(2017, 5, 22, 13), 12],
            [Date.UTC(2017, 5, 22, 14), 10],
            [Date.UTC(2017, 5, 22, 15), 10],
            [Date.UTC(2017, 5, 22, 16), 10],
            [Date.UTC(2017, 5, 22, 17), 10],
            [Date.UTC(2017, 5, 22, 18), 10],
            [Date.UTC(2017, 5, 22, 19), 10],
            [Date.UTC(2017, 5, 22, 20), 10],
            [Date.UTC(2017, 5, 22, 21), 10],
            [Date.UTC(2017, 5, 22, 22), 10],
            [Date.UTC(2017, 5, 22, 23), 10],
            [Date.UTC(2017, 5, 23, 0), 10],
            [Date.UTC(2017, 5, 23, 1), 11],
            [Date.UTC(2017, 5, 23, 2), 10],
            [Date.UTC(2017, 5, 23, 3), 10],
            [Date.UTC(2017, 5, 23, 4), 12],
            [Date.UTC(2017, 5, 23, 5), 10],
            [Date.UTC(2017, 5, 23, 6), 10],
            [Date.UTC(2017, 5, 23, 7), 10],
            [Date.UTC(2017, 5, 23, 8), 10]
            ]
      }, {
        name: "PIP",
        color: "#F16524",
        data: [
            [Date.UTC(2017, 5, 22, 8), 40],
            [Date.UTC(2017, 5, 22, 9), 38],
            [Date.UTC(2017, 5, 22, 10), 35],
            [Date.UTC(2017, 5, 22, 11), 30],
            [Date.UTC(2017, 5, 22, 12), 30],
            [Date.UTC(2017, 5, 22, 13), 30],
            [Date.UTC(2017, 5, 22, 14), 30],
            [Date.UTC(2017, 5, 22, 15), 30],
            [Date.UTC(2017, 5, 22, 16), 30],
            [Date.UTC(2017, 5, 22, 17), 30],
            [Date.UTC(2017, 5, 22, 18), 30],
            [Date.UTC(2017, 5, 22, 19), 30],
            [Date.UTC(2017, 5, 22, 20), 30],
            [Date.UTC(2017, 5, 22, 21), 30],
            [Date.UTC(2017, 5, 22, 22), 30],
            [Date.UTC(2017, 5, 22, 23), 30],
            [Date.UTC(2017, 5, 23, 0), 30],
            [Date.UTC(2017, 5, 23, 1), 30],
            [Date.UTC(2017, 5, 23, 2), 30],
            [Date.UTC(2017, 5, 23, 3), 30],
            [Date.UTC(2017, 5, 23, 4), 30],
            [Date.UTC(2017, 5, 23, 5), 30],
            [Date.UTC(2017, 5, 23, 6), 30],
            [Date.UTC(2017, 5, 23, 7), 30],
            [Date.UTC(2017, 5, 23, 8), 30]
          ]
        }, {
        name: "PEEP",
        color: "#F6D155",
        dashStyle: "longdash",
        data: [
            [Date.UTC(2017, 5, 22, 8), 28],
            [Date.UTC(2017, 5, 22, 9), 19],
            [Date.UTC(2017, 5, 22, 10), 28],
            [Date.UTC(2017, 5, 22, 11), 16],
            [Date.UTC(2017, 5, 22, 12), 16],
            [Date.UTC(2017, 5, 22, 13), 16],
            [Date.UTC(2017, 5, 22, 14), 16],
            [Date.UTC(2017, 5, 22, 15), 16],
            [Date.UTC(2017, 5, 22, 16), 16],
            [Date.UTC(2017, 5, 22, 17), 16],
            [Date.UTC(2017, 5, 22, 18), 16],
            [Date.UTC(2017, 5, 22, 19), 16],
            [Date.UTC(2017, 5, 22, 20), 16],
            [Date.UTC(2017, 5, 22, 21), 16],
            [Date.UTC(2017, 5, 22, 22), 16],
            [Date.UTC(2017, 5, 22, 23), 16],
            [Date.UTC(2017, 5, 23, 0), 16],
            [Date.UTC(2017, 5, 23, 1), 16],
            [Date.UTC(2017, 5, 23, 2), 17],
            [Date.UTC(2017, 5, 23, 3), 16],
            [Date.UTC(2017, 5, 23, 4), 16],
            [Date.UTC(2017, 5, 23, 5), 16],
            [Date.UTC(2017, 5, 23, 6), 16],
            [Date.UTC(2017, 5, 23, 7), 16],
            [Date.UTC(2017, 5, 23, 8), 16]
          ]
        }
      ]
    });
Highcharts.chart('o2_co2', {
    chart: {
        type: 'spline'
      },
      credits: {
      enabled: false
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: [
      {
        title: {
          text: ""
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0,
      }, {
        opposite: true,
        title: {
          text: ""
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        max: 1,
        min: 0
      }],
      title:{
        text:""
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      series: [
      {
        name: "SpO2",
        color: "#0078B5",
        data: [
            [Date.UTC(2017, 5, 22, 8), 98],
            [Date.UTC(2017, 5, 22, 9), 99],
            [Date.UTC(2017, 5, 22, 10), 100],
            [Date.UTC(2017, 5, 22, 11), 100],
            [Date.UTC(2017, 5, 22, 12), 99],
            [Date.UTC(2017, 5, 22, 13), 99],
            [Date.UTC(2017, 5, 22, 14), 100],
            [Date.UTC(2017, 5, 22, 15), 100],
            [Date.UTC(2017, 5, 22, 16), 95],
            [Date.UTC(2017, 5, 22, 17), 98],
            [Date.UTC(2017, 5, 22, 18), 80],
            [Date.UTC(2017, 5, 22, 19), 85],
            [Date.UTC(2017, 5, 22, 20), 90],
            [Date.UTC(2017, 5, 22, 21), 95],
            [Date.UTC(2017, 5, 22, 22), 100],
            [Date.UTC(2017, 5, 22, 23), 100],
            [Date.UTC(2017, 5, 23, 0), 96],
            [Date.UTC(2017, 5, 23, 1), 95],
            [Date.UTC(2017, 5, 23, 2), 85],
            [Date.UTC(2017, 5, 23, 3), 90],
            [Date.UTC(2017, 5, 23, 4), 95],
            [Date.UTC(2017, 5, 23, 5), 99],
            [Date.UTC(2017, 5, 23, 6), 100],
            [Date.UTC(2017, 5, 23, 7), 100],
            [Date.UTC(2017, 5, 23, 8), 100]
            ]
      }, {
        name: "FiO2",
        color: "#F16524",
        yAxis: 1,
        data: [
            [Date.UTC(2017, 5, 22, 8), 0],
            [Date.UTC(2017, 5, 22, 9), 0.2],
            [Date.UTC(2017, 5, 22, 10), 0.25],
            [Date.UTC(2017, 5, 22, 11), 0.5],
            [Date.UTC(2017, 5, 22, 12), 0.6],
            [Date.UTC(2017, 5, 22, 13), 0.6],
            [Date.UTC(2017, 5, 22, 14), 0.6],
            [Date.UTC(2017, 5, 22, 15), 0.6],
            [Date.UTC(2017, 5, 22, 16), 0.6],
            [Date.UTC(2017, 5, 22, 17), 0.6],
            [Date.UTC(2017, 5, 22, 18), 0.6],
            [Date.UTC(2017, 5, 22, 19), 0.65],
            [Date.UTC(2017, 5, 22, 20), 0.6],
            [Date.UTC(2017, 5, 22, 21), 0.6],
            [Date.UTC(2017, 5, 22, 22), 0.65],
            [Date.UTC(2017, 5, 22, 23), 0.7],
            [Date.UTC(2017, 5, 23, 0), 0.7],
            [Date.UTC(2017, 5, 23, 1), 0.7],
            [Date.UTC(2017, 5, 23, 2), 0.7],
            [Date.UTC(2017, 5, 23, 3), 0.7],
            [Date.UTC(2017, 5, 23, 4), 0.7],
            [Date.UTC(2017, 5, 23, 5), 0.7],
            [Date.UTC(2017, 5, 23, 6), 1],
            [Date.UTC(2017, 5, 23, 7), 1],
            [Date.UTC(2017, 5, 23, 8), 1]
          ]
        }, {
        name: "ETCO2",
        color: "#F6D155",
        dashStyle: "longdash",
        data: [
            [Date.UTC(2017, 5, 22, 8), 37],
            [Date.UTC(2017, 5, 22, 9), 38],
            [Date.UTC(2017, 5, 22, 10), 39],
            [Date.UTC(2017, 5, 22, 11), 40],
            [Date.UTC(2017, 5, 22, 12), 40],
            [Date.UTC(2017, 5, 22, 13), 40],
            [Date.UTC(2017, 5, 22, 14), 40],
            [Date.UTC(2017, 5, 22, 15), 40],
            [Date.UTC(2017, 5, 22, 16), 40],
            [Date.UTC(2017, 5, 22, 17), 40],
            [Date.UTC(2017, 5, 22, 18), 35],
            [Date.UTC(2017, 5, 22, 19), 30],
            [Date.UTC(2017, 5, 22, 20), 28],
            [Date.UTC(2017, 5, 22, 21), 28],
            [Date.UTC(2017, 5, 22, 22), 28],
            [Date.UTC(2017, 5, 22, 23), 28],
            [Date.UTC(2017, 5, 23, 0), 30],
            [Date.UTC(2017, 5, 23, 1), 35],
            [Date.UTC(2017, 5, 23, 2), 40],
            [Date.UTC(2017, 5, 23, 3), 40],
            [Date.UTC(2017, 5, 23, 4), 48],
            [Date.UTC(2017, 5, 23, 5), 50],
            [Date.UTC(2017, 5, 23, 6), 55],
            [Date.UTC(2017, 5, 23, 7), 55],
            [Date.UTC(2017, 5, 23, 8), 60]
          ]
        }
      ]
    });
Highcharts.chart('bp', {
    chart: {
        type: 'spline'
      },
      credits: {
      enabled: false
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: ""
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0,
      },
      title:{
        text:""
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      series: [
      {
        name: "Blood Pressure",
        color: "#0078B5",
        data: [
            [Date.UTC(2017, 5, 22, 8), 107],
            [Date.UTC(2017, 5, 22, 9), 108],
            [Date.UTC(2017, 5, 22, 10), 105],
            [Date.UTC(2017, 5, 22, 11), 103],
            [Date.UTC(2017, 5, 22, 12), 106],
            [Date.UTC(2017, 5, 22, 13), 107],
            [Date.UTC(2017, 5, 22, 14), 106],
            [Date.UTC(2017, 5, 22, 15), 107],
            [Date.UTC(2017, 5, 22, 16), 105],
            [Date.UTC(2017, 5, 22, 17), 99],
            [Date.UTC(2017, 5, 22, 18), 98],
            [Date.UTC(2017, 5, 22, 19), 96],
            [Date.UTC(2017, 5, 22, 20), 99],
            [Date.UTC(2017, 5, 22, 21), 95],
            [Date.UTC(2017, 5, 22, 22), 90],
            [Date.UTC(2017, 5, 22, 23), 90],
            [Date.UTC(2017, 5, 23, 0), 88],
            [Date.UTC(2017, 5, 23, 1), 85],
            [Date.UTC(2017, 5, 23, 2), 85],
            [Date.UTC(2017, 5, 23, 3), 86],
            [Date.UTC(2017, 5, 23, 4), 87],
            [Date.UTC(2017, 5, 23, 5), 87],
            [Date.UTC(2017, 5, 23, 6), 85],
            [Date.UTC(2017, 5, 23, 7), 85],
            [Date.UTC(2017, 5, 23, 8), 80]
            ]
      }, {
        name: "Systolic BP",
        color: "#F16524",
        data: [
            [Date.UTC(2017, 5, 22, 8), 132],
            [Date.UTC(2017, 5, 22, 9), 133],
            [Date.UTC(2017, 5, 22, 10), 131],
            [Date.UTC(2017, 5, 22, 11), 130],
            [Date.UTC(2017, 5, 22, 12), 131],
            [Date.UTC(2017, 5, 22, 13), 131],
            [Date.UTC(2017, 5, 22, 14), 131],
            [Date.UTC(2017, 5, 22, 15), 128],
            [Date.UTC(2017, 5, 22, 16), 120],
            [Date.UTC(2017, 5, 22, 17), 120],
            [Date.UTC(2017, 5, 22, 18), 119],
            [Date.UTC(2017, 5, 22, 19), 120],
            [Date.UTC(2017, 5, 22, 20), 118],
            [Date.UTC(2017, 5, 22, 21), 119],
            [Date.UTC(2017, 5, 22, 22), 120],
            [Date.UTC(2017, 5, 22, 23), 125],
            [Date.UTC(2017, 5, 23, 0), 125],
            [Date.UTC(2017, 5, 23, 1), 130],
            [Date.UTC(2017, 5, 23, 2), 130],
            [Date.UTC(2017, 5, 23, 3), 130],
            [Date.UTC(2017, 5, 23, 4), 131],
            [Date.UTC(2017, 5, 23, 5), 128],
            [Date.UTC(2017, 5, 23, 6), 128],
            [Date.UTC(2017, 5, 23, 7), 125],
            [Date.UTC(2017, 5, 23, 8), 128]
          ]
        }, {
        name: "Diastolic BP",
        color: "#F6D155",
        dashStyle: "longdash",
        data: [
            [Date.UTC(2017, 5, 22, 8), 91],
            [Date.UTC(2017, 5, 22, 9), 90],
            [Date.UTC(2017, 5, 22, 10), 93],
            [Date.UTC(2017, 5, 22, 11), 89],
            [Date.UTC(2017, 5, 22, 12), 89],
            [Date.UTC(2017, 5, 22, 13), 88],
            [Date.UTC(2017, 5, 22, 14), 91],
            [Date.UTC(2017, 5, 22, 15), 87],
            [Date.UTC(2017, 5, 22, 16), 85],
            [Date.UTC(2017, 5, 22, 17), 87],
            [Date.UTC(2017, 5, 22, 18), 88],
            [Date.UTC(2017, 5, 22, 19), 84],
            [Date.UTC(2017, 5, 22, 20), 84],
            [Date.UTC(2017, 5, 22, 21), 84],
            [Date.UTC(2017, 5, 22, 22), 85],
            [Date.UTC(2017, 5, 22, 23), 90],
            [Date.UTC(2017, 5, 23, 0), 85],
            [Date.UTC(2017, 5, 23, 1), 80],
            [Date.UTC(2017, 5, 23, 2), 75],
            [Date.UTC(2017, 5, 23, 3), 77],
            [Date.UTC(2017, 5, 23, 4), 75],
            [Date.UTC(2017, 5, 23, 5), 77],
            [Date.UTC(2017, 5, 23, 6), 76],
            [Date.UTC(2017, 5, 23, 7), 77],
            [Date.UTC(2017, 5, 23, 8), 77]
          ]
        }
      ]
    });
Highcharts.chart("intake_output",{
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    yAxis: {
      title: {
        text: ""
      },
      gridLineWidth: 0,
      minorGridLineWidth: 0,
    },
    xAxis: {
        type: "datetime"
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        stacking: "normal"
      }
    },
    series: [{
        type: 'column',
        name: 'Intake',
        color: "#4C6A92",
        data: [
              [Date.UTC(2017, 5, 23), 2000], 
              [Date.UTC(2017, 5, 24), 2000], 
              [Date.UTC(2017, 5, 25), 7000],
              [Date.UTC(2017, 5, 26), 2100],
              [Date.UTC(2017, 5, 27), 800]
              ]
    }, {
        type: 'column',
        name: 'Output',
        color: "#F6D155",
        data: [
              [Date.UTC(2017, 5, 23), -2500], 
              [Date.UTC(2017, 5, 24), -1400], 
              [Date.UTC(2017, 5, 25), -2300],
              [Date.UTC(2017, 5, 26), -3000],
              [Date.UTC(2017, 5, 27), -800]
              ]
    }, {
        type: 'spline',
        color: "#000000",
        name: 'Trend',
        data: [
              [Date.UTC(2017, 5, 23), 2000-2500], 
              [Date.UTC(2017, 5, 24), 2000-1400], 
              [Date.UTC(2017, 5, 25), 7000-2300],
              [Date.UTC(2017, 5, 26), 2100-3000],
              [Date.UTC(2017, 5, 27), 800-800]
              ],
        marker: {
            lineWidth: 2,
            lineColor: "#000000",
            fillColor: 'white'
          }
        }
      ]
    });
});
