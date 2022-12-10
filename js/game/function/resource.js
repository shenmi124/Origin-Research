function getResourceTitleID(id,res_name){
	getNotNumDoc(id+'Title',`
		<div style="height:1px"></div>
		<div class="resource-title resource-name" style="color: `+colorText(res_name)[0]+`;position: relative; "><tooltip id='`+res_name+`TooltipLoadResource'>`+colorText(res_name)[1]+`</tooltip></div>`
	)
}

function getResourceDoc(id){
	getDoc(id,player[id])
	if(main['resource'][id]['max']!=undefined){
		getDoc(id+'Max',main['resource'][id]['max']())
		document.getElementById(id+"slashID").style.display = ''
	}else{
		document.getElementById(id+"slashID").style.display = 'none'
	}
	if(main['resource'][id]['gain']!=undefined){
		if(!main['resource'][id]['gain']().eq(0)){
			if(main['resource'][id]['gain']().gt(0)){
				getNotNumDoc(id+'Gain','(+'+format(main['resource'][id]['gain']())+'/s)')
			}else{
				getNotNumDoc(id+'Gain','('+format(main['resource'][id]['gain']())+'/s)')
			}
		}
	}
}

function getResourceID(id,res_name){
	getNotNumDoc(id,`
	<div class="resource-title border" id="`+res_name+`BorderID" style='width:267px; height:1px;'></div>
	<div class="resource-title" id="`+res_name+`ID" style="width: 70px;"></div>
	<div class="resource-title" style="color: #888" id="`+res_name+`slashID">/</div>
	<div class="resource-title" style="color: #888; width: 70px;" id="`+res_name+`MaxID"></div>
	<div class="resource-title" id="`+res_name+`GainID" style="width: 100px;"></div>
	<div class="resource-title border" id="`+res_name+`Border2ID" style="background: `+colorText(res_name)[0]+`; z-index: -1; transition-duration: 0.2s; clip-path: inset(0% 0% 0% 0%);"></div>
	`
	)
    if(main['resource'][res_name]['unlocked']!=undefined){
        let unlocked = main['resource'][res_name]['unlocked']()
		if(unlocked || unlocked==null){
			document.getElementById(id+"TitleID").style.display = ''
			document.getElementById(id+"ID").style.display = ''
			getNotNumDoc(id+'Br',`<br>`)
			player[res_name+'Unlock'] = 'true'
			player[res_name+'Unlocked'] = 'true'
		}else{
			document.getElementById(id+"TitleID").style.display = 'none'
			document.getElementById(id+"ID").style.display = 'none'
			getNotNumDoc(id+'Br',``)
			player[res_name+'Unlock'] = 'false'
		}
    }else{
		document.getElementById(id+"TitleID").style.display = ''
		document.getElementById(id+"ID").style.display = ''
		getNotNumDoc(id+'Br',`<br>`)
		player[res_name+'Unlock'] = 'true'
		player[res_name+'Unlocked'] = 'true'
	}
	if(main['resource'][res_name]['max']!=undefined){
		let border = n(100).sub(player[res_name].div(main['resource'][res_name]['max']().max(0.01)).mul(100))
		document.getElementById(res_name+"Border2ID").style.clipPath = 'inset(0% '+border+'% 0% 0%)'
	}else{
		document.getElementById(res_name+"Border2ID").style.clipPath = 'inset(0% 0% 0% 0%)'
	}
	getResourceDoc(res_name)
}

function resourceAction(id){
	if(main['resource'][id]['number']!=undefined){
		player[id] = n(main['resource'][id]['number']())
	}else{
		if(main['resource'][id]['gain']!=undefined){
			let gain = main['resource'][id]['gain']()
			player[id] = player[id].add(n(gain).mul(diff))
		}
		if(main['resource'][id]['PR']!=undefined){
			let PR = main['resource'][id]['PR']()
			player[id+'PR'] = n(PR)
		}
		if(main['resource'][id]['max']!=undefined){
			let max = main['resource'][id]['max']()
			if(id!='ResearchPoint' && id!='ResearchTimes'){player[id] = player[id].min(max).max(0)}
			if(id=='ResearchPoint' && player[id].gte(max)){
				player.ResearchPoint = player.ResearchPoint.sub(main['resource']['ResearchPoint']['max']())
				player.ResearchTimes = player.ResearchTimes.add(1)
				player.ResearchAllTimes = player.ResearchAllTimes.add(1)
			}
		}
	}
}