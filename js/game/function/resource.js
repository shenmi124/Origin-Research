function getResourceTitleID(id,res_name){
	let Class = ''
	if(main['resource'][res_name]['Class']!=undefined){
		Class = main['resource'][res_name]['Class']()
	}
	getNotNumDoc(id+'Title',`
		<div style="height:1px"></div>
		<div class="resource-title resource-name `+Class+`" style="color: `+colorText(res_name)[0]+`; position: relative;"><tooltip id='`+res_name+`TooltipLoadResource'>`+colorText(res_name)[1]+`</tooltip></div>`
	)
}

function getResourceOtherID(id,res_name){
	let a = ''
	if(main['resource'][res_name]['otherText']!=undefined){
		a = `<div class="resource-title resource-onclick" style="color: #888; width: 60px;position: relative;" onclick="getResourceClick('`+res_name+`')"><tooltip id='`+res_name+`TooltipLoadResourceOther'>`+main['resource'][res_name]['otherText']()+`</tooltip></div>`
	}
	getNotNumDoc(id+'Other',a)
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

function getResourceClick(res_name){
	if(main['resource'][res_name]['onClick']!=undefined){
		let a = main['resource'][res_name]['onClick'].toString()
		eval(a.substr(10).substr(0,a.substr(10).lastIndexOf('}')))
	}
}

function getResourceID(id,res_name){
	getNotNumDoc(id,`
	<div class="resource-title" id="`+res_name+`ID" style="width: 90px;"></div>
	<div class="resource-title" style="width: 10px;">
		<div class="resource-title" style="width: 10px; color: #888" id="`+res_name+`slashID">/</div>
	</div>
	<div class="resource-title" style="width: 90px;">
		<div class="resource-title" style="color: #888; width: 90px;" id="`+res_name+`MaxID"></div>
	</div>
	<div class="resource-title" style="width: 110px;">
		<div class="resource-title" id="`+res_name+`GainID" style="width: 110px;"></div>
	</div>
	<div class="resource-title border" id="`+res_name+`Border2ID" style="background: `+colorText(res_name)[0]+`; z-index: -1; transition-duration: 0.2s; clip-path: inset(0% 0% 0% 0%);"></div>
	`
	)
    if(main['resource'][res_name]['unlocked']!=undefined){
        let unlocked = main['resource'][res_name]['unlocked']()
		if(unlocked || unlocked==null){
			document.getElementById(id+"OtherID").style.display = ''
			document.getElementById(id+"TitleID").style.display = ''
			document.getElementById(id+"ID").style.display = ''
			getNotNumDoc(id+'Br',`<br>`)
			player[res_name+'Unlock'] = true
			player[res_name+'Unlocked'] = true
		}else{
			document.getElementById(id+"OtherID").style.display = 'none'
			document.getElementById(id+"TitleID").style.display = 'none'
			document.getElementById(id+"ID").style.display = 'none'
			getNotNumDoc(id+'Br',``)
			player[res_name+'Unlock'] = false
		}
    }else{
		document.getElementById(id+"TitleID").style.display = ''
		document.getElementById(id+"ID").style.display = ''
		getNotNumDoc(id+'Br',`<br>`)
		player[res_name+'Unlock'] = true
		player[res_name+'Unlocked'] = true
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
	if(player.time.lte(0)){player.timeMod = n(1)}
	if(player.timeMod.eq(2)){
		addedCss('time','time')
		removeCss('time','timeStop')
	}else if(player.timeMod.eq(0)){
		addedCss('time','timeStop')
		removeCss('time','time')
	}else{
		removeCss('time','time')
		removeCss('time','timeStop')
	}
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
			player[id] = player[id].min(max).max(0)
		}
	}
}