var tab = true
var tooltipSel

var allWorkResource = 1
var allResearch = 17
var allWork = 1

function mouseoverID(id){
	$(id).mouseover(function(){
		tooltip(id)
		tooltipSel = self.setInterval(function(){
			tooltip(id)
		},50)
	});
}

function tooltipMouseoverID(id){
	$('#'+id).mouseover(function(){
		tooltip(id)
		tooltipSel = self.setInterval(function(){
			tooltip(id)
		},50)
	});
}

function fistLoad(){
	let resourceStr = ''
	for(i in main['resource']){resourceStr += '<a id='+i+'LoadResource></a>'}
	getNotDoc('loadResource',resourceStr)
	for(i in main['resource']){
		getNotDoc(i+'LoadResource',`<a id="`+i+`LoadResourceTitleID"></a><a id="`+i+`LoadResourceID" style="position: absolute; "></a><a id="`+i+`LoadResourceBrID"></a>`)
		getResourceTitleID(i+'LoadResource',i)
	}

	let actionStr = ''
	for(i in main['action']){
		actionStr += '<a id='+i+'LoadAction></a>'
	}
	getNotDoc('loadAction',actionStr)
	for(i in main['action']){
		getNotDoc(i+'LoadAction',`<br id="`+i+`LoadActionBrID"><a id="`+i+`LoadActionID"></a> `)
		let nameAct = '未命名'
		if(main['action'][i]['name']!=undefined){
			nameAct = main['action'][i]['name']()
		}
		getActionID(i,nameAct)
	}

	let buildingStr = ''
	for(i in main['building']){
		buildingStr += '<a id='+i+'LoadBuilding></a>'
	}
	getNotDoc('loadBuilding',buildingStr)
	for(i in main['building']){
		getNotDoc(i+'LoadBuilding',`<br id="`+i+`LoadBuildingBrID"><a id="`+i+`LoadBuildingID"></a> `)
		let nameBud = '未命名'
		if(main['building'][i]['name']!=undefined){
			nameBud = main['building'][i]['name']()
		}
		getBuildingID(i,nameBud)
	}

	let researchResourceStr = ''
	for(i in main['resource']){
		if(main['resource'][i]['PR']!=undefined){
			researchResourceStr += '<a id='+i+'LoadResearchResource></a>'
		}
	}
	getNotDoc('loadResearchResource',researchResourceStr)
	for(i in main['resource']){
		if(main['resource'][i]['PR']!=undefined){
			getNotDoc(i+'LoadResearchResource',`<br id="`+i+`LoadResearchResourceBrID"><a id="`+i+`LoadResearchResourceID"></a> `)
			getResearchResourceID(i+'LoadResearchResource',i)
		}
	}
	
	for(col=1;col<=allWork;col++){
		getNotDoc('res-0-4-0-'+col+'loadResource',`<br id="0-4-0-`+col+`-br"><a id="res-0-4-0-`+col+`ID"></a>`)
	}
}

function firstTab(){
	if(tab==true){
		fistLoad()

		if(player.firstGame=='false'){
			player.firstGame = 'true'
			addLog('头疼的厉害,你已经记不清你是如何来到这片荒芜,一望无边的草地了...','news')
		}

		getTooltipID('res-0-3-0-1','泥土工艺')
		getTooltipID('res-0-3-0-2','肥沃土壤')
		getTooltipID('res-0-3-0-3','石墙')
		getTooltipID('res-0-3-0-4','燧石打磨')
		getTooltipID('res-0-3-0-5','磨石')
		getTooltipID('res-0-3-0-6','除草艺')
		getTooltipID('res-0-3-0-7','沙石')
		getTooltipID('res-0-3-0-8','燧石短斧')
		getTooltipID('res-0-3-0-9','混合土壤')
		getTooltipID('res-0-3-0-10','木材加工')
		getTooltipID('res-0-3-0-11','树种')
		getTooltipID('res-0-3-0-12','燧石镐')
		getTooltipID('res-0-3-0-13','木桶')
		getTooltipID('res-0-3-0-14','仓库')
		getTooltipID('res-0-3-0-15','造纸术')
		getTooltipID('res-0-3-0-16','煤')
		getTooltipID('res-0-3-0-17','黏土')

		$(document).ready(function(){
			$("tooltip").mouseover(function(){
				document.getElementById("tooltip").style.display = ''
			});
			$("tooltip").mouseleave(function(){
				document.getElementById("tooltip").style.display = 'none'
				window.clearInterval(tooltipSel)
			});
			
			for(i in main['resource']){
				tooltipMouseoverID(i+"TooltipLoadResource")
			}

			for(i in main['action']){
				tooltipMouseoverID(i+'TooltipLoadAction')
			}

			for(i in main['resource']){
				tooltipMouseoverID(i+"TooltipLoadResearchResource")
			}

			for(i in main['building']){
				tooltipMouseoverID(i+"TooltipLoadBuilding")
			}

			for(colTimes=1;colTimes<=allResearch;colTimes++){
				mouseoverID("#res-0-3-0-"+colTimes)
			}

			for(colTimes=1;colTimes<=allWork;colTimes++){
				mouseoverID("#res-0-4-0-"+colTimes)
			}

			mouseoverID("#treeTip")

			mouseoverID("#noneButtonID")
		});
		Close('tab_research')
		Close('tab_tree')
		Close('tab_workshop')
		tab = false
	}
}

function showTab(id){
	if(id=="setting"){
		Open('tab_setting')
	}else{
		Close('tab_setting')
	}

	if(id=="main"){
		Open('tab_main')
	}else{
		Close('tab_main')
	}

	if(id=="research"){
		Open('tab_research')
	}else{
		Close('tab_research')
	}

	if(id=="tree"){
		Open('tab_tree')
	}else{
		Close('tab_tree')
	}

	if(id=="workshop"){
		Open('tab_workshop')
	}else{
		Close('tab_workshop')
	}
}