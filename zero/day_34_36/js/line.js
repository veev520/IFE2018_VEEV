function drawLine(canvasId, data) {
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext('2d');
    
    var max = data.reduce(function(l, r) {
        return Math.max(l, r);
    });


    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#000';
    context.strokeStyle = '#000';

    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(10, 310);
    context.lineTo(390, 310);
    context.stroke();

    context.beginPath();
    context.moveTo(8, 10);
    context.lineTo(12, 10);
    context.lineTo(10, 7);
    context.fill();

    context.beginPath();
    context.moveTo(390, 308);
    context.lineTo(390, 312);
    context.lineTo(393, 310);
    context.fill();

    context.fillStyle = 'purple';
    context.strokeStyle = 'purple';

    for (var i = 0; i < data.length; i++) {
        context.beginPath();
        var y = 310 - data[i] / max * 300;
        context.arc(30 + 30 * i - 5, y, 5, 0, 2 * Math.PI);
        context.fill();
    }

    context.beginPath();
    context.moveTo(25, 310 - data[i] / max * 300);
    for (var i = 0; i < data.length; i++) {
        context.lineTo(30 + 30 * i - 5, 310 - data[i] / max * 300);
    }
    context.stroke();
}