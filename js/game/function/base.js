function getDoc(id,id2){
	document.getElementById(id+"ID").innerHTML = format(id2);
}

function getNotNumDoc(id,id2){
	document.getElementById(id+"ID").innerHTML = id2;
}

function getNotDoc(id,id2){
	document.getElementById(id).innerHTML = id2;
}

function getTooDoc(id){
	document.getElementById('tooltip').innerHTML = id;
}

function Close(id){
	if(document.getElementById(id)!=null){
		document.getElementById(id).style.display = "none"
	}
}

function Open(id){
	if(document.getElementById(id)!=null){
    	document.getElementById(id).style.display = ""
	}
}

function addedCss(id,id2,id3){
	document.getElementById(id).classList.add(id2)
	if(id3=='log'){
		document.getElementById(id).classList.remove('un'+id2)
	}
}

function removeCss(id,id2,id3){
	document.getElementById(id).classList.remove(id2)
	if(id3=='log'){
		document.getElementById(id).classList.add('un'+id2)
	}
}

function ResearchResource(id,unlocked){
	if(unlocked){
		document.getElementById(id).style.display = ''
	}else{
		document.getElementById(id).style.display = 'none'
	}
}