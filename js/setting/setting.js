function autoSave(){
	if(player.autoSave=="false"){
		player.autoSave = "true"
		player.saveTick = 'false'
	}else{
		player.autoSave = "false"
		player.saveTick = 'false'
	}
}

function countingMethod(){
	if(player.countingMethod=='scientific'){player.countingMethod='standard';return}
	if(player.countingMethod=='standard'){player.countingMethod='engineering';return}
	if(player.countingMethod=='engineering'){player.countingMethod='scientific';return}
}

function noneButtonID(){
	if(player.noneButtonID=='false'){
		player.noneButtonID='true'
	}else{
		player.noneButtonID='false'
	}
	save()
	location.reload()
}