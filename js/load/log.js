var mainLogs = ''
var timesLogs = 1

function addLog(id,type){
    mainLogs = '<div id='+type+'Logs'+timesLogs+' style="padding: 0px 0px 5px 0px; font-size: 14px;color: #888">'+id+'<br></div>'+mainLogs
    timesLogs += 1
}

function loadLog(){
    getNotDoc('loadLog',mainLogs)
}