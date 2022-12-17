function tooltip(id){
	for(let i in main['resource']){
		if(id==i+'TooltipLoadResource'){
			if(main['resource'][i]['tooltip']!=undefined){
				return getTooDoc(colorText(i)[2]+"<hr><small>"+main['resource'][i]['tooltip']())
			}else{
				return getTooDoc('未命名')
			}
        }
	}

	for(let i in main['resource']){
		if(id==i+'TooltipLoadResourceOther'){
			if(main['resource'][i]['otherTooltip']!=undefined && main['resource'][i]['otherText']!=undefined){
				return getTooDoc("<div style='color: "+colorText(i)[0]+"'>"+main['resource'][i]['otherText']()+"</div><hr><small>"+main['resource'][i]['otherTooltip']())
			}else{
				return getTooDoc('未命名')
			}
        }
	}

	for(let i in main['action']){
		if(id==i+'TooltipLoadAction'){
			let name = '未命名'
			if(main['action'][i]['name']!=undefined){
				name = main['action'][i]['name']()
			}
			if(main['action'][i]['tooltip']!=undefined){
				return getTooDoc(name+'<hr><small>'+main['action'][i]['tooltip']())
			}else{
				return getTooDoc('未命名')
			}
        }
	}

	for(let i in main['building']){
		if(id==i+'TooltipLoadBuilding'){
			let name = '未命名'
			let cost = '无消耗'
			if(main['building'][i]['name']!=undefined){
				name = main['building'][i]['name']()
			}
			if(main['building'][i]['cost']!=undefined){
				cost = BuildTooltipCost(i)
			}
			if(main['building'][i]['tooltip']!=undefined){
				return getTooDoc(name+"("+format(player['building'+i],0)+")"+'<hr><small>'+cost+'<hr>'+main['building'][i]['tooltip']())
			}else{
				return getTooDoc('未命名')
			}
        }
	}

	for(let i in main['resource']){
		if(id==i+'TooltipLoadResearchResource'){
			if(main['resource'][i]['PR']!=undefined){
				return researchTooltip(i)
			}else{
				return getTooDoc('未命名')
			}
        }
	}
}