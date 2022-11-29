function autoSave(){
	if(player.autoSave=="false"){
		player.autoSave = "true"
		player.saveTick = 'false'
	}else{
		player.autoSave = "false"
		player.saveTick = 'false'
	}
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