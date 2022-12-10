var costCanResearch = false
var tooltipCostCanResearch = []
var tooltipNameCanResearch = []

function canResearch(id){
    let num = ['0-3-0-1']
    let times = 0
    let can = true
    if(id=='0-3-0-3'){num = ['0-3-0-1'];times = 0}
    if(id=='0-3-0-4'){num = ['0-3-0-1'];times = 0}
    if(id=='0-3-0-5'){num = ['0-3-0-4'];times = 0}
    if(id=='0-3-0-6'){num = ['0-3-0-2','0-3-0-4'];times = 1}
    if(id=='0-3-0-7'){num = ['0-3-0-5'];times = 0}
    if(id=='0-3-0-8'){num = ['0-3-0-4','0-3-0-6'];times = 1}
    if(id=='0-3-0-9'){num = ['0-3-0-7'];times = 0}
    if(id=='0-3-0-10'){num = ['0-3-0-8'];times = 0}
    if(id=='0-3-0-11'){num = ['0-3-0-8'];times = 0}
    if(id=='0-3-0-12'){num = ['0-3-0-8'];times = 0}
    if(id=='0-3-0-13'){num = ['0-3-0-10'];times = 0}
    if(id=='0-3-0-14'){num = ['0-3-0-10'];times = 0}
    if(id=='0-3-0-15'){num = ['0-3-0-10'];times = 0}
    if(id=='0-3-0-16'){num = ['0-3-0-12'];times = 0}
    if(id=='0-3-0-17'){num = ['0-3-0-12'];times = 0}
    if(id=='0-3-0-18'){num = ['0-3-0-7','0-3-0-13'];times = 1}

    for(col2=0;col2<=times;col2++){
        if(player['Research'+num[col2]+'Lv'].lt(1)){
            can = false
        }
    }
    if(can==true && player['Research'+id+'Can']!='research'){
        player['Research'+id+'Can']='true'
    }else if(player['Research'+id+'Can']!='research'){
        player['Research'+id+'Can']='false'
    }

    if((id=='0-3-0-1' || id=='0-3-0-2') && player['Research'+id+'Can']!='research'){player['Research'+id+'Can']='true'}

   drawTreeBranch()
    if(player['Research'+id+'Can']=='research'){
        getCss('res-'+id+'ID','research')
        loseCss('res-'+id+'ID','max')
		loseCss('res-'+id+'ID','can')
        loseCss('res-'+id+'ID','cannot')
    }else if(player['Research'+id+'Lv'].gte(player['Research'+id+'LvMax'])){
        player['Research'+id+'Can']='max'
        loseCss('res-'+id+'ID','research')
        getCss('res-'+id+'ID','max')
        loseCss('res-'+id+'ID','can')
        loseCss('res-'+id+'ID','cannot')
    }else if(player['Research'+id+'Can']=='true'){
        loseCss('res-'+id+'ID','research')
        loseCss('res-'+id+'ID','max')
        getCss('res-'+id+'ID','can')
		loseCss('res-'+id+'ID','cannot')
	}else{
        loseCss('res-'+id+'ID','research')
        loseCss('res-'+id+'ID','max')
		loseCss('res-'+id+'ID','can')
		getCss('res-'+id+'ID','cannot')
    }
}

function maxResearch(id){
    if(id=='0-3-0-1'){player['Research'+id+'LvMax'] = n(1)}
    if(id=='0-3-0-2'){player['Research'+id+'LvMax'] = n(1)}
    if(id=='0-3-0-3'){player['Research'+id+'LvMax'] = n(5)}
    if(id=='0-3-0-4'){player['Research'+id+'LvMax'] = n(10)}
    if(id=='0-3-0-5'){player['Research'+id+'LvMax'] = n(4)}
    if(id=='0-3-0-6'){player['Research'+id+'LvMax'] = n(1)}
    if(id=='0-3-0-7'){player['Research'+id+'LvMax'] = n(1)}
    if(id=='0-3-0-8'){player['Research'+id+'LvMax'] = n(1)}
    if(id=='0-3-0-9'){player['Research'+id+'LvMax'] = n(4)}
    if(id=='0-3-0-10'){player['Research'+id+'LvMax'] = n(1)}
    if(id=='0-3-0-11'){player['Research'+id+'LvMax'] = n(1)}
    if(id=='0-3-0-12'){player['Research'+id+'LvMax'] = n(1)}
}

function costResearch(id){
    if(id=='0-3-0-1'){player['Research'+id+'Max'] = n(1)}
    if(id=='0-3-0-2'){player['Research'+id+'Max'] = n(1)}
    if(id=='0-3-0-3'){player['Research'+id+'Max'] = n(2).mul(player['Research'+id+'Lv'].mul(2).add(1))}
    if(id=='0-3-0-4'){player['Research'+id+'Max'] = n(3).mul(player['Research'+id+'Lv'].add(1))}
    if(id=='0-3-0-5'){player['Research'+id+'Max'] = n(5).mul(player['Research'+id+'Lv'].add(1))}
    if(id=='0-3-0-6'){player['Research'+id+'Max'] = n(10)}
    if(id=='0-3-0-7'){player['Research'+id+'Max'] = n(10)}
    if(id=='0-3-0-8'){player['Research'+id+'Max'] = n(1)}
    if(id=='0-3-0-9'){player['Research'+id+'Max'] = n(15).mul(player['Research'+id+'Lv'].add(1))}
    if(id=='0-3-0-10'){player['Research'+id+'Max'] = n(10)}
    if(id=='0-3-0-11'){player['Research'+id+'Max'] = n(50)}
    if(id=='0-3-0-12'){player['Research'+id+'Max'] = n(30)}
}

function finishResearch(id){
    if(player['Research'+id+'Now'].gte(player['Research'+id+'Max']) && player['Research'+id+'Lv'].lt(player['Research'+id+'LvMax'])){
        player['Research'+id+'Now'] = player['Research'+id+'Now'].sub(player['Research'+id+'Max'])
        player['Research'+id+'Lv'] = player['Research'+id+'Lv'].add(1)
    }else if(player['Research'+id+'Lv'].gte(player['Research'+id+'LvMax'])){
        player['Research'+id+'Now'] = n(0)
        player['Research'+id+'Max'] = n(0)
    }
}

function ResearchEffect(){
    return player.ResearchTimesUse
}

function costMul(){
    return n(1)
}

function costFirst(id,can){
    if(id=='0-3-0-1'){costResource(['dirt'],[5],can,0)}
    if(id=='0-3-0-2'){costResource(['dirt'],[5],can,0)}
    if(id=='0-3-0-3'){costResource(['stone'],[3],can,0)}
    if(id=='0-3-0-4'){costResource(['flint'],[2],can,0)}
    if(id=='0-3-0-5'){costResource(['stone','flint'],[5,2],can,1)}
    if(id=='0-3-0-6'){costResource(['grass','flint'],[100,8],can,1)}
    if(id=='0-3-0-7'){costResource(['flint'],[25],can,0)}
    if(id=='0-3-0-8'){costResource(['flint','wood'],[15,5],can,1)}
    if(id=='0-3-0-9'){costResource(['dirt','sand'],[25,15],can,1)}
    if(id=='0-3-0-10'){costResource(['wood'],[50],can,0)}
    if(id=='0-3-0-11'){costResource(['wood'],[200],can,0)}
    if(id=='0-3-0-12'){costResource(['flint','wood'],[25,30],can,1)}
}

function costResource(name,cost,can,times){
    let a = true
    costCanResearch = false
    tooltipCostCanResearch = cost
    tooltipNameCanResearch = name
    for(col=0;col<=times;col++){
        if(player[name[col]].gte(cost[col]) && can==null){

        }else{
            a = false
        }
    }
    if(a==true){
        for(col2=0;col2<=times;col2++){
            player[name[col2]] = player[name[col2]].sub(n(cost[col2]).mul(costMul()))
        }
        costCanResearch = true
    }
}

function Researching(id){
    if(player['Research'+id+'Can']=='research'){
        costFirst(id,null)
        if(costCanResearch==true){
            player['Research'+id+'Now'] = player['Research'+id+'Now'].add(ResearchEffect())
            for(col=1;col<=allResearch;col++){
                player['Research0-3-0-'+col+'Can']='false'
            }
        }
    }
}

function rollResearch(){
    let res = 0
    let unlocked = false
    for(res=1;res<=allResearch;res++){
        if(player['Research0-3-0-'+res+'Can']=='true'){
            unlocked = true
        }
    }
    if(unlocked==true && player.ResearchTimes.gte(1)){
        player.ResearchTimes = player.ResearchTimes.sub(1)
        player.ResearchTimesUse = player.ResearchTimesUse.add(1)
        
        let roll = 0
        for(col=1;col<=allResearch;col++){
            if(player['Research0-3-0-'+col+'Can']=='true'){
                roll += 1
            }
        }
        if(roll<=3){
            for(id=1;id<=allResearch;id++){
                if(player['Research0-3-0-'+id+'Can']=='true'){
                    player['Research0-3-0-'+id+'Can']='research'
                }
            }
        }else{
            for(times=1;times<=3;times++){
                let rollEnd = Math.floor(Math.random() * allResearch)+1
                if(player['Research0-3-0-'+rollEnd+'Can']=='true'){
                    player['Research0-3-0-'+rollEnd+'Can']='research'
                }else{
                    times -= 1
                }
            }
        }
    }
}