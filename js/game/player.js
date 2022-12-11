function calcPlayer(){
    baseLoader()
    
    superLoader()
    researchLoader(19)
}

function baseLoader(){
    loader(['ResearchAllTimes'],n(0))
    loader(['ResearchTimesUse'],n(0))

    loader(['offline'],n(0))
    loader(['timeMod'],n(1))

    loader(['devSpeed'],n(1))

    NotOmegaLoader(['firstGame'],"false")

    NotOmegaLoader(['logsType'],"none")

	NotOmegaLoader(['autoSave'],"true")
	NotOmegaLoader(['saveTick'],"false")
    NotOmegaLoader(['noneButtonID'],"false")
	NotOmegaLoader(['countingMethod'],"standard")
}

function superLoader(){
    for(ii in main['resource']){
		loader([ii],n(0))
        NotOmegaLoader([ii+'Unlock'],'false')
        NotOmegaLoader([ii+'Unlocked'],'false')
	}
    for(ii in main['building']){
		loader(['building'+ii],n(0))
	}
}

function researchLoader(id){
    for(col=1;col<=id;col++){
        NotOmegaLoader(['Research0-3-0-'+col+'Can'],'false')
        loader(['Research0-3-0-'+col+'Max'],n(1))
        loader(['Research0-3-0-'+col+'Now'],n(0))
        loader(['Research0-3-0-'+col+'Lv'],n(0))
        loader(['Research0-3-0-'+col+'LvMax'],n(1))
    }
}