var crt=document.getElementById('chart');

var myChart=new Chart(crt,{
  type:'bar',
  data:{
    labels:['Q1','Q2'],
    datasets:[{
      label:'Developer',
      data:[2350,2000],
      backgroundColor:'#3bafda'
    },
    {
      label:'Marketing',
      data:[2541,4000],
      backgroundColor:'#fc6e51'
    },
    {
      label:'Sales',
      data:[1212,3200],
      backgroundColor:'#ffce54'
    }]
  },
  options:{
    scales:{
      xAxes:[{stacked:true}],
      yAxes:[{stacked:true}]
    }
  }
});



//============================================
//Chartist
//============================================


// new Chartist.Bar("#exampleStackedBar", {
//   labels: ["Q1", "Q2", "Q3", "Q4","Q5","Q6"],
//   series: [
//     [2350,3205,4520,2351,5632,3205],
//     [2541,2583,1592,2674,2323,2583],
//     [1212,5214,2325,4235,2519,5214],
//   ]
// }, {
//   stackBars: !0,
//   axisY: {
//       labelInterpolationFnc: function(value) {
//           return value / 1000 + "k"
//           console.log(value/100000)
//       }
//   },
//   plugins:[
//     Chartist.plugins.tooltip({
//       appendBody:true
//     }),
//     Chartist.plugins.legend({
//       legendNames:['Developer','Marketing','Sales']
//     })
//   ]
// }).on("draw", function(data) {
//   "bar" === data.type && data.element.attr({
//       style: "stroke-width: 30px"
//   })
// })

