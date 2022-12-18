function colorText(id){
	let color = '#c3c3c3'
	let Text = '未命名'
	let Class = ''
	for(let resourceColor in main['resource']){
		if(id==resourceColor){
			if(main['resource'][resourceColor]['color']!=undefined){
				color = main['resource'][resourceColor]['color']()
			}
			if(main['resource'][resourceColor]['name']!=undefined){
				Text = main['resource'][resourceColor]['name']()
			}
			if(main['resource'][resourceColor]['Class']!=undefined){
				Class = main['resource'][resourceColor]['Class']()
			}
		}
	}
	return [color,Text,"<a style='color:"+color+"' class='"+Class+"'>"+Text+"</a>"]
}