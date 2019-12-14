// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with
// UFO report values (Date, City, State, Country, Shape, Duration, Comments)
data.forEach((ufosighting) => {
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = data.filter(date => date.datetime === inputValue);

  console.log(filteredData);

  d3.selectAll("tr").selectAll("td").remove();

  filteredData.forEach((ufosighting) => {
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
  // right now this renders objects but not values. 
  //d3.select("tbody").text(filteredData);
  
});


