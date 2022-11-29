function getDoc(id,id2){
	document.getElementById(id+"ID").innerHTML = format(id2);
}

function getNotNumDoc(id,id2){
	document.getElementById(id+"ID").innerHTML = id2;
}

function getBuyNoDoc(id,id2){
	document.getElementById(id).innerHTML = id2;
}

function getNotDoc(id,id2){
	document.getElementById(id).innerHTML = id2;
}

function getTooDoc(id){
	document.getElementById('tooltip').innerHTML = id;
}

function Close(id){
    document.getElementById(id).style.display = "none" 
}
function Open(id){
    document.getElementById(id).style.display = "" 
}

function getCss(id,id2){
	document.getElementById(id).classList.add(id2)
}

function lossCss(id,id2){
	document.getElementById(id).classList.remove(id2)
}

function ResearchResource(id,unlocked){
	if(unlocked){
		document.getElementById(id).style.display = ''
	}else{
		document.getElementById(id).style.display = 'none'
	}
}