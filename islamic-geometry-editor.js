document.addEventListener("DOMContentLoaded", function(){
	
	var unitEditor = new UnitEditor();
	//divide the canvas into 4 quadrants

	//allow editing in only one. or all but mirror/rotate the effect

	//then allow tesselation, exporting as png, svg, etc
});

class UnitEditor {
	//use this to wrap functions for the canvas
	constructor(){
		this.canvas = document.getElementById("canvas");
		this.ctx = canvas.getContext("2d");
		this.h = this.canvas.height;
		this.w = this.canvas.width;

		var isMouseDown = false;
		var startX = 0;
		var startY = 0;
		var endX = 0;
		var endY = 0;

		//setup onclick listener for canvas to draw lines
		this.canvas.addEventListener("mousedown", function(){
			//check if there is a nearby wall and snap to
			//then allow a line drawn to any other wall
		});

		this.canvas.addEventListener("mousemove", function(){

		});

		this.canvas.addEventListener("mouseup", function(){

		});

		this.reset();
	}

	reset(){ //clear canvas and redraw grid
		this.ctx.clearRect(0,0,this.w,this.h);

		this.drawGrid();
		this.drawBorder();
	}

	drawGrid(){
		this.ctx.strokeStyle = "#000"; //black
		
		this.ctx.beginPath();
			this.ctx.moveTo(this.w/2,0);
			this.ctx.lineTo(this.w/2,this.h);

			this.ctx.moveTo(0,this.h/2);
			this.ctx.lineTo(this.w,this.h/2);
		this.ctx.closePath();
		this.ctx.stroke();
	}

	drawBorder(){
		this.ctx.strokeStyle = "#000"; //black
		
		this.ctx.beginPath();
			this.ctx.moveTo(0,0);
			this.ctx.lineTo(this.w,0);
			this.ctx.lineTo(this.w,this.h);
			this.ctx.lineTo(0,this.h);
		this.ctx.closePath();
		this.ctx.stroke();	
	}
}

function offset(elem) {
    if(!elem) elem = this;

    var x = elem.offsetLeft;
    var y = elem.offsetTop;

    while (elem = elem.offsetParent) {
        x += elem.offsetLeft;
        y += elem.offsetTop;
    }

    return { left: x, top: y };
}
