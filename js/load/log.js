var mainLogs = ''
var timesLogs = 1

function addLog(id,type){
    mainLogs = '<div id='+type+'Logs'+timesLogs+' style="padding: 0px 0px 5px 0px; font-size: 14px;color: #888">'+id+'<br></div>'+mainLogs
    timesLogs += 1
}

function loadLog(){
    getNotDoc('loadLog',mainLogs)

	if(player.logsType!='none'){
		loseCss('styleLog1','selectLogs','log')
		if(player.logsType!='building'){
			loseCss('styleLog2','selectLogs','log')
			for(let col=1;col<=timesLogs;col++){
				Close('buildingLogs'+col,'log')
			}
		}else{
			getCss('styleLog2','selectLogs','log')
		}
		if(player.logsType!='action'){
			loseCss('styleLog3','selectLogs','log')
			for(let col=1;col<=timesLogs;col++){
				Close('actionLogs'+col,'log')
			}
		}else{
			getCss('styleLog3','selectLogs','log')
		}
		if(player.logsType!='news'){
			loseCss('styleLog4','selectLogs','log')
			for(let col=1;col<=timesLogs;col++){
				Close('newsLogs'+col,'log')
			}
		}else{
			getCss('styleLog4','selectLogs','log')
		}
	}else{
		getCss('styleLog1','selectLogs','log')
		
		loseCss('styleLog2','selectLogs','log')
		loseCss('styleLog3','selectLogs','log')
		loseCss('styleLog4','selectLogs','log')
	}
}