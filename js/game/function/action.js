function getActionID(id,use_name){
	getNotNumDoc(id+"LoadAction",`<tooltip id='`+id+`TooltipLoadAction'><button onclick="getActionClick('`+id+`')">`+use_name+`</button></tooltip>`)
}

function getActionClick(id){
	for(let i in main['action']){
		if(main['action'][i]['onClick']!=undefined && i==id){
			let a = main['action'][i]['onClick'].toString()
			eval(a.substr(10).substr(0,a.substr(10).lastIndexOf('}')))
		}
	}
}