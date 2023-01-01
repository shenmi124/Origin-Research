function researchTooltip(res_name){
	return getTooDoc('将你的研究类型改成'+colorText(res_name)[2]+'<hr><small>'+colorText(res_name)[2]+':<br>质量'+format(main['resource'][res_name]['PR']()[0])+'<br>研究价值'+format(main['resource'][res_name]['PR']()[1])+'<br>单位研究价值'+format(n(main['resource'][res_name]['PR']()[0]).mul(main['resource'][res_name]['PR']()[1]))+'<hr>注意:研究时无法切换类型')
}

function getResearchResourceID(id,res_name){
	getNotNumDoc(id,`<tooltip id='`+res_name+`TooltipLoadResearchResource' style="margin-right: 5px;"><button class="ResearchResource" onclick="player.researchBar.lte(0) ? player.ResearchItem='`+res_name+`' : ''">`+colorText(res_name)[1]+`</button></tooltip>`)
}

function ResearchResourceOther(){
	let border = n(0).add(player.researchBar.div(player.researchBarMax.max(0.01)).mul(100))

	player.researchBar = player.researchBar.add(player[player.ResearchItem].mul(main['resource'][player.ResearchItem]['PR']()[0]).mul(player.barToggle.mul(0.01)).min(player.researchBarMax.sub(player.researchBar).div(main['resource'][player.ResearchItem]['PR']()[0])))
	player.pointRealBar = player.pointRealBar.add(player[player.ResearchItem].mul(main['resource'][player.ResearchItem]['PR']()[0]).mul(main['resource'][player.ResearchItem]['PR']()[1]).mul(player.barToggle.mul(0.01)).min(player.researchBarMax.sub(player.researchBar).div(main['resource'][player.ResearchItem]['PR']()[0])))
	player.voidRealBar = player.voidRealBar.sub(player[player.ResearchItem].mul(main['resource'][player.ResearchItem]['PR']()[0]).mul(player.barToggle.mul(0.01)).min(player.researchBarMax.sub(player.researchBar).div(main['resource'][player.ResearchItem]['PR']()[0])))
	player[player.ResearchItem] = player[player.ResearchItem].sub(player[player.ResearchItem].mul(player.barToggle.mul(0.01)).min(player.researchBarMax.sub(player.researchBar).div(main['resource'][player.ResearchItem]['PR']()[0])))

	getNotNumDoc('loadResearchResourceOtherBorder',`
	<div class="ResearchResourceOtherBorder" style='background: var(--researchColor); margin-left:50px; margin-top:20px'></div>
	<div class="ResearchResourceOtherBorder" style='border: 2px solid #282828; z-index: 100; border-radius: 5px; margin-left:48px; margin-top:18px'></div>
	<div class="ResearchResourceOtherBorder void-bar" id="ResearchResourceOtherBorderID" style="background: #fff; margin-left:50px; width:72px; margin-top:20px; z-index: 10; clip-path: inset(0% 0% `+border+`% 0%);"></div>
	`)
}

function ResearchResourceVoid(){
	let border = n(0).add(player.voidBar.div(player.voidBarMax.max(0.01)).mul(100))
	
	let fill = n(player.voidEnergy).min(player.voidBarMax.sub(player.voidBar))
	player.voidBar = player.voidBar.add(fill)
	player.voidRealBar = player.voidRealBar.add(fill)
	player.voidEnergy = player.voidEnergy.sub(fill)

	getNotNumDoc('loadResearchResourceBorder',`
	<div class="ResearchResourceBorder" style='background: `+colorText('void')[0]+`; margin-left:250px; margin-top:20px'></div>
	<div class="ResearchResourceBorder" style='border: 2px solid #282828; z-index: 100; border-radius: 5px; margin-left:248px; margin-top:18px'></div>
	<div class="ResearchResourceBorder void-bar" id="ResearchResourceBorderID" style="background: #fff; margin-left:250px; width:72px; margin-top:20px; z-index: 10; clip-path: inset(0% 0% `+border+`% 0%);"></div>
	`)
}

function ResearchBar(){
	let txt = player.researchBar.gt(0)&&player.voidBar.gt(0)&&player.voidRealBar.gt(0)&&player.researchBar.lt(player.researchBarMax) ? '(-'+format(n(1))+'/s)' : ''
	getNotNumDoc('ResearchResourceOtherText',format(player.researchBar)+`<br>上限:`+format(player.researchBarMax)+'<br>'+colorText(player.ResearchItem)[2]+txt)
	let border = n(0).add(player.researchBar.div(player.researchBarMax.max(0.01)).mul(100))
	document.getElementById("ResearchResourceOtherBorderID").style.clipPath = 'inset(0% 0% '+border+'% 0%)'

	getNotNumDoc('ResearchResourceVoidText',format(player.voidBar)+`<br>上限:`+format(player.voidBarMax)+'<br>'+colorText('voidEnergy')[2]+txt)
	let border2 = n(0).add(player.voidBar.div(player.voidBarMax.max(0.01)).mul(100))
	document.getElementById("ResearchResourceBorderID").style.clipPath = 'inset(0% 0% '+border2+'% 0%)'

	let txt2 = player.researchBar.gt(0)&&player.voidBar.gt(0)&&player.voidRealBar.gt(0)&&player.researchBar.lt(player.researchBarMax) ? '(+'+format(main['resource'][player.ResearchItem]['PR']()[1])+'/s)' : ''
	getNotNumDoc('ResearchResourcePointText',format(player.pointBar)+`<br>上限:`+format(player.pointBarMax)+'<br>'+colorText('researchPoint')[2]+txt2)
	let border3 = n(0).add(player.pointBar.min(player.pointRealBar).div(player.pointBarMax.max(0.01)).mul(100))
	document.getElementById("ResearchResourcePointBorderID").style.clipPath = 'inset(0% 0% '+border3+'% 0%)'

	getNotNumDoc("ResearchScaleToggle",formatScientific(player.barToggle,0)+'%')
}

function ResearchGain(){
	if(player.researchBar.gt(0)&&player.voidBar.gt(0)&&player.ResearchItem!='none'&&player.researchBar.lt(player.researchBarMax)){
		player.researchBar = player.researchBar.sub(n(1).mul(diff)).min(player.researchBarMax).max(0)
		player.voidBar = player.voidBar.sub(n(1).mul(diff)).min(player.voidBarMax).max(player.voidRealBar).max(0)
		player.pointBar = player.pointBar.add(n(main['resource'][player.ResearchItem]['PR']()[1]).mul(diff)).min(player.researchBarMax).min(player.pointRealBar).max(0)
	}else if(player.voidBar.lte(0)&&player.voidRealBar.lt(0)){
		player.voidBar = n(0)
	}else{
		player.pointBar = n(player.pointRealBar)
		player.voidBar = n(player.voidRealBar)
	}
}

function ResearchResourcePut(){
	let border = n(0).add(player.pointBar.div(player.pointBarMax.max(0.01)).mul(100))

	player.researchPoint = player.researchPoint.add(player.pointBar).min(main.resource.researchPoint.max())
	player.pointBar = n(0)
	player.pointRealBar = n(0)

	getNotNumDoc('loadResearchResourcePointBorder',`
	<div class="ResearchResourcePointBorder" style='background: #3dd3f8; margin-left:450px; margin-top:20px'></div>
	<div class="ResearchResourcePointBorder" style='border: 2px solid #282828; z-index: 100; border-radius: 5px; margin-left:448px; margin-top:18px'></div>
	<div class="ResearchResourcePointBorder void-bar" id="ResearchResourcePointBorderID" style="background: #fff; margin-left:450px; width:72px; margin-top:20px; z-index: 10; clip-path: inset(0% 0% `+border+`% 0%);"></div>
	`)
}