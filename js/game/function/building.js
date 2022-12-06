
/*function BuildTooltip(id,must_name,things){
    <a style="color:'+player[main['building'][id]['cost'][col][0]]+'"><div style=";width: 50px; display: table-cell;">'+colorText(must_name)[1]+'</div></a><a><div style="width: 50px; display: table-cell">'+format(player[must_name])+'</div>/'+format(BuildCost(id)[things])+'</a>
	return '<div style="text-align: left;">'+a+'</div>'
}*/

function getBuildingID(id,use_name){
	getNotNumDoc(id+"LoadBuilding",`<tooltip id='`+id+`TooltipLoadBuilding'><button onclick="Build(`+id+`)">`+use_name+`</button></tooltip>`)
}

function Build(id){
    let max = 0
    let canbuy = true
    for(let col=0;col<=max;col++){
        if(main['building'][id]['cost']()[col]!=undefined){ 
            if(main['building'][id]['cost']()[col][0]!=undefined){
                max++
                if(player[main['building'][id]['cost']()[col][0]].lt(main['building'][id]['cost']()[col][1])){
                    canbuy = false
                    addLog('你还差'+format(n(main['building'][id]['cost']()[col][1]).sub(player[main['building'][id]['cost']()[col][0]]))+colorText(main['building'][id]['cost']()[col][0])[2])
                }
            }
        }
    }    
    for(let col=0;col<=max;col++){
        if(main['building'][id]['cost']()[col]!=undefined && canbuy==true){ 
            if(main['building'][id]['cost']()[col][0]!=undefined){
                max++
                if(main['building'][id]['cost']()[col][2]!=undefined){
                    if(main['building'][id]['cost']()[col][2]!=false){
                        player[main['building'][id]['cost']()[col][0]] = player[main['building'][id]['cost']()[col][0]].sub(main['building'][id]['cost']()[col][1])
                    }
                }
            }
        }
    }
    if(canbuy==true){
        player['building'+id] = player['building'+id].add(1)
    }
}

function BuildTooltipCost(id){
    let a = ''
    let max = 0
    for(let col=0;col<=max;col++){
        if(main['building'][id]['cost']()[col]!=undefined){ 
            if(main['building'][id]['cost']()[col][0]!=undefined){
                max++
                if(col>=1){
                    a += '<br>'
                }
                a += colorText(main['building'][id]['cost']()[col][0])[2]+`<a><div style="width: 50px; display: table-cell">`+format(player[main['building'][id]['cost']()[col][0]])+`</div>/`+format(main['building'][id]['cost']()[col][1])+`</a>`
            }
        }
    }
    return '<div style="text-align: left;">'+a+'</div>'
}