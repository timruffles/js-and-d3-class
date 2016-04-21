// TODO there's a bit of a hitch with this visualisation:
// we can't really see the data in an unscaled state.
//
// How can we fix this?

visualise()

window.onresize = visualise;

function visualise() {
  var width = document.body.clientWidth;
  var height = document.body.clientHeight;

  var data = [
    {name: "average person", wealth: 10000},
    {name: "lottery winner", wealth: 1e6},
    {name: "gates", wealth: 72e9},
  ]

  var minMax = [10, width / data.length / 2];

  // TODO you're responsible for setting up the scales
  var wealthToRadius = d3.scale.linear()
  // TODO set the domain to the extent of the wealth values
  // TODO set the range to minMax

  // TODO copy the previous scale but change its output range
  // to work on colors
  var wealthToColor = wealthToRadius;

  // TODO is there a different type of scale we could
  // use to get another view of the data?

  // just read below this, no modifications necessary
  var svg = d3.select("svg")
    .attr({width: width, height: height})

  var update = svg
     .selectAll("circle")
    .data(data)

  var enter = update.enter()
    .append("circle")
    .attr("cy",225);

  update
    .attr("cx",function(d,i) {
      return (i + 1) * 250
    })
    .attr("r",function(d) {
      return wealthToRadius(d.wealth)
    })
    .style("fill",function(datum) {
      return wealthToColor(datum.wealth)
    })
}
