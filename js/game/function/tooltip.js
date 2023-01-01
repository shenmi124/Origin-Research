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

	if(id=='ResearchResourceOtherTooltip'){
		return getTooDoc('<a style="color: var(--researchColor);text-shadow: 3px 3px 2px var(--researchColor);">填 充 物 质</a><hr><small>填充你 '+formatScientific(player.barToggle,0)+'% 的 '+colorText(player.ResearchItem)[2]+'<hr><small>'+colorText(player.ResearchItem)[2]+':<br>质量'+format(main['resource'][player.ResearchItem]['PR']()[0])+'<br>研究价值'+format(main['resource'][player.ResearchItem]['PR']()[1])+'<br>单位研究价值'+format(n(main['resource'][player.ResearchItem]['PR']()[0]).mul(main['resource'][player.ResearchItem]['PR']()[1]))+'<hr>你将会填充:'+format(player[player.ResearchItem].mul(player.barToggle.mul(0.01)).min(player.researchBarMax.sub(player.researchBar).div(main['resource'][player.ResearchItem]['PR']()[0])))+'('+format(player[player.ResearchItem].mul(main['resource'][player.ResearchItem]['PR']()[0]).mul(player.barToggle.mul(0.01)).min(player.researchBarMax.sub(player.researchBar).div(main['resource'][player.ResearchItem]['PR']()[0])))+'质量)'+colorText(player.ResearchItem)[2]+'<br>你将会获得:'+format(player[player.ResearchItem].mul(main['resource'][player.ResearchItem]['PR']()[0]).mul(player.barToggle.mul(0.01)).min(player.researchBarMax.sub(player.researchBar).div(main['resource'][player.ResearchItem]['PR']()[0])).mul(main['resource'][player.ResearchItem]['PR']()[1]))+colorText('researchPoint')[2])
	}

	if(id=='ResearchResourceVoidTooltip'){
		return getTooDoc('<a style="color: rgb(123, 25, 214);text-shadow: 3px 3px 2px rgb(123, 25, 214, 0.5);">填 充 能 量</a><hr><small>用你的'+colorText('voidEnergy')[2]+'去解析物质获得'+colorText('researchPoint')[2]+'<small>')
	}

	if(id=='ResearchResourcePointTooltip'){
		return getTooDoc('<a style="color: #3dd3f8;text-shadow: 3px 3px 2px rgb(61, 211, 248, 0.5);">取 出 研 究</a><hr><small>取出你解析的'+colorText('researchPoint')[2]+'<hr>可获得:'+format(player.pointBar))+colorText('researchPoint')[2]
	}
}