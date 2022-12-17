var t=new Date()
var timestart=new Date()
var offlineTime=new Date()
var diff=0

function getWorkID(id,res_name){
	getNotNumDoc(id+'Title',`<div class="resource-title resource-name" style="color: `+colorText(res_name)[0]+`;"><tooltip id='`+id+`'>`+colorText(res_name)[1]+`</tooltip></div>`)
	getNotNumDoc(id+'Workmax',`<div class="resource-title" id="`+res_name+`WorkMaxID" style="width: 50px; color: #888"><tooltip id='`+id+`WorkMax'><u>制作最大</u></tooltip></div>`)
}

function ResearchSchedule(id){
	if(player['Research'+id+'Lv'].gte(player['Research'+id+'LvMax'])){
		return "<br>(<a style='color:"+colorText('ResearchTimes')[0]+"'>研究等级</a>:"+format(player['Research'+id+'Lv'],0)+"(Max))"
	}else{
		return "<br>("+format(player['Research'+id+'Now'],0)+"/"+format(player['Research'+id+'Max'],0)+"<a style='color:"+colorText('ResearchPoint')[0]+"'>研究进度</a>)<br>("+format(player['Research'+id+'Lv'],0)+"/"+format(player['Research'+id+'LvMax'],0)+"<a style='color:"+colorText('ResearchTimes')[0]+"'>研究等级</a>)"
	}
}

function ResearchScheduleTooltip(id,things){
	costFirst(id.substr(5),false,0)
	return '<div style="text-align: left;"><a style="color:'+colorText(tooltipNameCanResearch[things])[0]+'"><div style=";width: 50px; display: table-cell;">'+colorText(tooltipNameCanResearch[things])[1]+'</div></a><a><div style="width: 50px; display: table-cell">'+format(player[tooltipNameCanResearch[things]])+'</div>/'+format(tooltipCostCanResearch[things])+'</a></div>'
}

function getTooltipID(id,id2){
	let a = player.noneButtonID=='true' ? '<br>ID:'+id.substr(10) : ''
	getNotDoc(id,`
	<button id='`+id+`ID' class="tree" onclick="Researching('`+id.substr(4)+`')">`+id2+a+`</button>
	`)
}

function getBr(){
	let w = 4
	if((window.innerWidth-450)*0.65<900){w = 3}
	if((window.innerWidth-450)*0.65<750){w = 2}

	let actionBr = -1
	for(let i in main['action']){
		let unlocked = true
		if(main['action'][i]['unlocked']!=undefined){
			unlocked = main['action'][i]['unlocked']()
		}
		if(unlocked){
			actionBr += 1
		}
		if(actionBr%w === 0 && actionBr!=0){
			document.getElementById(i+'LoadActionBrID').style.display = ''
		}else{
			document.getElementById(i+'LoadActionBrID').style.display = 'none'
		}
	}

	let buildingBr = -1
	for(let i in main['building']){
		let unlocked = true
		if(main['building'][i]['unlocked']!=undefined){
			unlocked = main['building'][i]['unlocked']()
		}
		if(unlocked){
			actionBr += 1
		}
		if(buildingBr%w === 0 && buildingBr!=0){
			document.getElementById(i+'LoadBuildingBrID').style.display = ''
		}else{
			document.getElementById(i+'LoadBuildingBrID').style.display = 'none'
		}
	}

	let researchResourceBr = -1
	for(let i in main['resource']){
		let unlocked = true
		if(main['resource'][i]['unlocked']!=undefined){
			unlocked = main['resource'][i]['unlocked']()
		}
		if(main['resource'][i]['PR']!=undefined && unlocked){
			researchResourceBr += 1
			if(researchResourceBr%w === 0 && researchResourceBr!=0){
				document.getElementById(i+'LoadResearchResourceBrID').style.display = ''
			}else{
				document.getElementById(i+'LoadResearchResourceBrID').style.display = 'none'
			}
		}
	}
}

function getID(){
	firstDiff()
	loadLog()

	for(let i in main['resource']){
		getResourceID(i+'LoadResource',i)
		resourceAction(i)
	}

	for(let i in main['resource']){
		let unlocked = true
		if(main['resource'][i]['unlocked']!=undefined){
			unlocked = main['resource'][i]['unlocked']()
		}
		if(main['resource'][i]['PR']!=undefined){
			ResearchResource(i+'LoadResearchResource',unlocked)
		}
	}

	for(let i in main['action']){
		let unlocked = true
		if(main['action'][i]['unlocked']!=undefined){
			unlocked = main['action'][i]['unlocked']()
		}
		ResearchResource(i+'LoadAction',unlocked)
	}

	for(let i in main['building']){
		let unlocked = true
		if(main['building'][i]['unlocked']!=undefined){
			unlocked = main['building'][i]['unlocked']()
		}
		ResearchResource(i+'LoadBuilding',unlocked)
	}

	document.getElementById("midColumn").style.height = window.innerHeight-17
	document.body.style.setProperty('--height', window.innerHeight-37);
	document.body.style.setProperty('--midWidth', (window.innerWidth-450)*0.65);
	document.body.style.setProperty('--logWidth', (window.innerWidth-450)*0.25);
	document.body.style.setProperty('--logheight', window.innerHeight-63);

	getBr()
	
	for(let i in mainTab){
		if(mainTab[i]['logs']!=undefined){
			let Unlock = false
			let logs = mainTab[i]['logs']()[0]
			let logs2 = mainTab[i]['logs']()[1]
			for(let ii in main[logs]){
				if(main[logs][ii]['unlocked']!=undefined){
					if(main[logs][ii]['unlocked']()==true){
						Unlock = true
					}
				}else{
					Unlock = true
				}
			}
			if(Unlock){
				NotOmegaLoader([i+'TabShown'],'false')
				player[i+'TabShown'] = 'true'
			}
			getNotDoc(logs+"StyleLog",player[i+'TabShown'] ? logs2 : '')
			if(mainTab[logs]['id']!=undefined){
				let logs3 = mainTab[i]['name']()
				let logs4 = mainTab[i]['id']()
				getNotNumDoc(logs4+"Text",Unlock ? logs3+'<br>' : '')
			}
		}
	}

	getNotNumDoc("autoSave",player.autoSave=="true" ? "开" : "关")
	if(player.countingMethod=='scientific'){
		getNotNumDoc("countingMethod",'科学计数法')
	}else if(player.countingMethod=='standard'){
		getNotNumDoc("countingMethod",'标准计数法')
	}else if(player.countingMethod=='engineering'){
		getNotNumDoc("countingMethod",'工程计数法')
	}else if(player.countingMethod=='letter'){
		getNotNumDoc("countingMethod",'字母计数法')
	}
	getNotNumDoc("flushLog",player.flushLog=="true" ? "开" : "关")
}

setInterval(function(){
	t = new Date()
	offlineTimeGain = n((Number(offlineTime.getTime())-player.offline)/1000)
	if(player.offline.lte(n(Number(offlineTime.getTime())).sub(5000)) && player.firstGame=='true' && player.timeUnlock=='true'){
		let oldtime = n(player.time)
		player.time = player.time.add(offlineTimeGain).min(main.resource.time.max())
		addLog('您离线了'+formatTime(offlineTimeGain)+'并获得同等的'+colorText('time')[2]+
		'<br>'+formatTime(oldtime)+'+'+formatTime(offlineTimeGain)+'->'+formatTime(player.time)+
		'<br>'+format(oldtime)+'+'+format(offlineTimeGain)+'->'+format(player.time)+
		'<br>(上限:'
		+formatTime(main.resource.time.max())+' <-> '+format(main.resource.time.max())+')','news')
	}
	player.offline = n((Number(t.getTime())))
	diff = n(Math.min((Number(t.getTime())-timestart)/1000,1e100))
	var offlineBoost = n(1).mul(player.devSpeed)
	diff=diff.mul(offlineBoost)
	timestart=t.getTime()
	
	if(player.autoSave=="true"){
		save()
	}else if(player.saveTick!='false_save'){
		player.saveTick = 'true'
	}
	if(player.saveTick=='true'){
		save()
		player.saveTick = 'false_save'
	}
	firstTab()
	getID()
}, 50)