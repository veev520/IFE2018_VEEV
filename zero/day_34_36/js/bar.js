function drawBar(id, data) {
    var svg = document.getElementById(id);

    var max = data.reduce(function(l, r) {
        return Math.max(l, r);
    });


    svg.innerHTML = '';

    var axis = document.createElement('polyline');
    axis.setAttribute('points', '10,10 10,310 390,310');
    axis.setAttribute('fill', 'white');
    axis.setAttribute('stroke', 'black');
    axis.setAttribute('strokeWidth', 1);

    var arrowX = document.createElement('polygon');
    arrowX.setAttribute('points', '8,10 12,10 10,7');
    arrowX.setAttribute('fill', 'black');
    arrowX.setAttribute('stroke', 'black');
    arrowX.setAttribute('stroke-width', '1');

    var arrowY = document.createElement('polygon');
    arrowY.setAttribute('points', '390,308 390,312 393,310');
    arrowY.setAttribute('fill', 'black');
    arrowY.setAttribute('stroke', 'black');
    arrowY.setAttribute('stroke-width', '1');

    svg.appendChild(axis);
    svg.appendChild(arrowX);
    svg.appendChild(arrowY);
    
    for (var i = 0; i < data.length; i++) {
        var bar = document.createElement('rect');
        bar.setAttribute('x', 30 + 30 * i);
        bar.setAttribute('y', 310 - data[i] / max * 300);
        bar.setAttribute('width', 15);
        bar.setAttribute('height', data[i] / max * 300);
        bar.setAttribute('style', 'fill:white;stroke-width:1;stroke:purple');
        
        svg.appendChild(bar);
    }

    svg.innerHTML = svg.innerHTML;
}