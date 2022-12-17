var mainLogs = ''
var timesLogs = 1

function addLog(id,type){
    mainLogs = '<div id='+type+'Logs'+timesLogs+' style="padding: 0px 0px 5px 2px; font-size: 14px;color: #888">'+id+'<br></div>'+mainLogs
    timesLogs += 1
}

function loadLog(){
    getNotDoc('loadLog',mainLogs)

	removeCss('noneStyleLog','selectLogs','log')
	removeCss('newsStyleLog','selectLogs','log')
	for(let col=1;col<=timesLogs;col++){
		Close('newsLogs'+col)
	}
	for(let i in mainTab){
		if(mainTab[i]['logs']!=undefined){
			let ii = mainTab[i]['logs']()[0]
			removeCss(ii+'StyleLog','selectLogs','log')
			for(let col=1;col<=timesLogs;col++){
				Close(ii+'Logs'+col)
			}
		}
	}

	for(let i in player.logsType){
		if(player.logsType[i]=='none'){
			addedCss('noneStyleLog','selectLogs','log')
			for(let col=1;col<=timesLogs;col++){
				Open('newsLogs'+col)
			}
			for(let i in mainTab){
				if(mainTab[i]['logs']!=undefined){
					let ii = mainTab[i]['logs']()[0]
					for(let col=1;col<=timesLogs;col++){
						Open(ii+'Logs'+col)
					}
				}
			}
		}else if(player.logsType[i]=='news'){
			addedCss('newsStyleLog','selectLogs','log')
			for(let col=1;col<=timesLogs;col++){
				Open('newsLogs'+col)
			}
		}else{
			for(let ii in mainTab){
				if(mainTab[ii]['logs']!=undefined){
					let iii = mainTab[ii]['logs']()[0]
					if(player.logsType[i]==iii){
						addedCss(iii+'StyleLog','selectLogs','log')
						for(let col=1;col<=timesLogs;col++){
							Open(iii+'Logs'+col,'log')
						}
					}
				}
			}
		}
	}
}

function changeLog(id){
	if(player.logsType.toString()=='none'){
		if(id=='none'){
			player.logsType = []
			return
		}else{
			let arrn = player.logsType.indexOf('none')
			player.logsType.splice(arrn,1)
		}
	}
	let arr = player.logsType
	let arr2 = arr.indexOf(id)
	if(arr2==-1){
		arr.push(id)
	}else{
		arr.splice(arr2,1)
	}
	if(id=='none' && !('none' in player.logsType)){
		player.logsType = ['none']
		return
	}
	player.logsType = arr
}