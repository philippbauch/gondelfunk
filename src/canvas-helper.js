function speechBubble(ctx, text, x, y,highlighted) {
    var messure = ctx.measureText(text);

    var w = messure.width;
    var h = 20;

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth="1";
    ctx.font = "16px Rubik";
    if(highlighted) {
        ctx.fillStyle = "rgba(255, 100, 100, 0.8)";
    }else{
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    }

    ctx.moveTo(x, y);
    ctx.lineTo(x + (w*0.2), y);
    ctx.lineTo(x + (w*0.2), y+10);
    ctx.lineTo(x + (w*0.3), y);
    ctx.lineTo(x + w, y);

    ctx.quadraticCurveTo(x + (w*1.1), y, x + (w*1.1), y-(h*0.2)); // corner: right-bottom

    ctx.lineTo(x + (w*1.1), y-(h*0.8)); // right

    ctx.quadraticCurveTo(x + (w*1.1), y-h, x + w, y-h); // corner: right-top

    ctx.lineTo(x, y-h); // top

    ctx.quadraticCurveTo(x - (w*0.1), y-h, x - (w*0.1), y-(h*0.8)); // corner: left-top

    ctx.lineTo(x - (w*0.1), y-(h*0.2)); // left

    ctx.quadraticCurveTo(x - (w*0.1), y, x, y); // corner: left-bottom

    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.textAlign = 'left';
    ctx.fillStyle = '#000';
    ctx.fillText(text, x, y-6);

    return {width:w*1.5,height:h*1.5};
}

export {speechBubble}