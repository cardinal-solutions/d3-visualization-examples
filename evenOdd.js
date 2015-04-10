var dataset = [5, 10, 3, 9, 4];

d3.select("body")                  //find the body element
    .selectAll("p")                //select all <p> tags (none exist yet, but they will)
    .data(dataset)                 //bind the data
    .enter()                       //select DOM elements that aren't bound (or create them)
    .append("p")                   //add the new elements
    .text(function(d) {            //set the text
      return d;
    })
    .style("color", function(d) {  //and conditionally set the color based on the data value
      if(d % 2 === 0) {
        return "blue";
      }
      else {
        return "black";
      }
    });
