//============================================
//Chartist
//============================================


new Chartist.Bar("#exampleStackedBar", {
  labels: ["Q1", "Q2", "Q3", "Q4","Q5","Q6"],
  series: [
    [2350,3205,4520,2351,5632,3205],
    [2541,2583,1592,2674,2323,2583],
    [1212,5214,2325,4235,2519,5214],
  ]
}, {
  stackBars: !0,
  axisY: {
      labelInterpolationFnc: function(value) {
          return value / 1000 + "k"
          console.log(value/100000)
      }
  },
  plugins:[
    Chartist.plugins.tooltip({
      appendBody:true
    }),
    Chartist.plugins.legend({
      legendNames:['Developer','Marketing','Sales']
    })
  ]
}).on("draw", function(data) {
  "bar" === data.type && data.element.attr({
      style: "stroke-width: 30px"
  })
})

new Chartist.Line('#LineChart', {
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  series: [
      [8000, 3800, 3600,6200, 4000, 4300, 5800,4000,5600,2200,7300,9000],
      [3600, 3600, 3800,5000, 6200, 4300, 6200,4000,5600,2200,7300,5600],
      [3800, 3800, 3600,6200, 4000, 4300, 5800,4000,5600,2200,5600,9000],
      [4000, 3800, 3600,4000, 4000, 6200, 5800,4000,5600,6200,5600,5600],
      [8000, 3800, 3600,2200, 4000, 4300, 7000,4000,5600,2200,2200,9000]
  ]
}, {
  high: 9000,
  low: 0,
  // fullWidth: true,
  // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
  axisY: {
    // onlyInteger: true,
    // offset: 20
  },
  plugins:[
    Chartist.plugins.tooltip({
      appendBody:true
    }),
    Chartist.plugins.legend({
      legendNames:['Sales','Marketing','Design','Support','Development']
    })
  ]
});


  
