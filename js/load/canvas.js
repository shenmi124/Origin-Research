var canvas;
var ctx;

window.addEventListener("resize", (_=>resizeCanvas()));

function resizeCanvas() {
	canvas.width = 0;
    canvas.height = 0;
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;
}

function drawTree(id,id2,times){
	

	if(times==null){times=0}
	
	for(let row=0;row<=times;row++){
		if(player['Research'+id2[row].substr(4)+'Can']!=false){
			document.getElementById(id).style.display = ''
		}
		if(player['Research'+id2[row].substr(4)+'Can']==false || $('#'+id).css('display') == 'none'){
			document.getElementById(id).style.display = 'none'
			return
		}

		let width = 13
		let start = document.getElementById(id+"ID").getBoundingClientRect();
		let color_id = "#888888"
		let end = document.getElementById(id2[row]+"ID").getBoundingClientRect();
		let x1 = start.left + (start.width / 2) + document.body.scrollLeft;
		let y1 = start.top + (start.height / 2) + document.body.scrollTop;
		let x2 = end.left + (end.width / 2) + document.body.scrollLeft;
		let y2 = end.top + (end.height / 2) + document.body.scrollTop;
		ctx.lineWidth = width;
		ctx.beginPath();
		ctx.strokeStyle = color_id
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
	}
}

function drawTreeBranch() {
	canvas = document.getElementById("treeCanvas")
	ctx = canvas.getContext("2d");

	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	drawTree('res-0-3-0-3',['res-0-3-0-1'])
	drawTree('res-0-3-0-4',['res-0-3-0-1'])
	drawTree('res-0-3-0-5',['res-0-3-0-4'])
	drawTree('res-0-3-0-6',['res-0-3-0-4','res-0-3-0-2'],1)
	drawTree('res-0-3-0-7',['res-0-3-0-5'])
	drawTree('res-0-3-0-8',['res-0-3-0-6','res-0-3-0-5'],1)
	drawTree('res-0-3-0-9',['res-0-3-0-7'])
	drawTree('res-0-3-0-10',['res-0-3-0-8'])
	drawTree('res-0-3-0-11',['res-0-3-0-8'])
	drawTree('res-0-3-0-12',['res-0-3-0-8'])
	drawTree('res-0-3-0-13',['res-0-3-0-10'])
	drawTree('res-0-3-0-14',['res-0-3-0-10'])
	drawTree('res-0-3-0-15',['res-0-3-0-11'])
	drawTree('res-0-3-0-16',['res-0-3-0-12'])
	drawTree('res-0-3-0-17',['res-0-3-0-13','res-0-3-0-7'],1)
}