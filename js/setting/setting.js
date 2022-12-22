function autoSave(){
	if(player.autoSave==false){
		player.autoSave = true
		player.saveTick = false
	}else{
		player.autoSave = false
		player.saveTick = false
	}
}

function countingMethod(){
	if(player.countingMethod=='scientific'){player.countingMethod='standard';return}
	if(player.countingMethod=='standard'){player.countingMethod='engineering';return}
	if(player.countingMethod=='engineering'){player.countingMethod='letter';return}
	if(player.countingMethod=='letter'){player.countingMethod='scientific';return}
}

function flushLog(){
	if(player.flushLog==false){
		player.flushLog=true
	}else{
		player.flushLog=false
	}
}