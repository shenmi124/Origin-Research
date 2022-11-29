function researchTooltip(res_name){
	return getTooDoc('研究'+colorText(res_name)[2]+'('+format(main['resource'][res_name]['PR']())+')<hr><small>以1:'+format(main['resource'][res_name]['PR']())+'的比例把全部'+colorText(res_name)[2]+'变为'+colorText('ResearchPoint')[2]+'<hr>可获得'+format(player[res_name].mul(main['resource'][res_name]['PR']()))+colorText('ResearchPoint')[2])
}

function getResearchResourceID(id,res_name){
	getNotNumDoc(id,`<tooltip id='`+res_name+`TooltipLoadResearchResource'><button onclick="player.ResearchPoint=player.ResearchPoint.add(player.`+res_name+`.mul(main['resource']['`+res_name+`']['PR']()));player.`+res_name+`=n(0)">`+colorText(res_name)[1]+`</button></tooltip>`)
}