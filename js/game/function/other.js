function colorText(id){
	let color = '#c3c3c3'
	let Text = '未命名'
	for(let resourceColor in main['resource']){
		if(id==resourceColor){
			if(main['resource'][resourceColor]['color']!=undefined){
				color = main['resource'][resourceColor]['color']()
			}
			if(main['resource'][resourceColor]['name']!=undefined){
				Text = main['resource'][resourceColor]['name']()
			}
		}
	}
	return [color,Text,"<a style='color:"+color+"'>"+Text+"</a>"]
}