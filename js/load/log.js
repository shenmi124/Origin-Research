var mainLogs = ''

function addLog(id){
    mainLogs = id+'<br>'+mainLogs
}

function loadLog(){
    getNotDoc('loadLog',mainLogs)
}