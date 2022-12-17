function calcPlayer(){
    NotOmegaLoader(['exploring'],'false')
    NotOmegaLoader(['unknownManuscript'],['false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false','false'])
    
    baseLoader()
    
    superLoader()
}

function baseLoader(){
    loader(['offline'],n(0))
    loader(['timeMod'],n(1))

    loader(['devSpeed'],n(1))

    NotOmegaLoader(['firstGame'],"false")

    NotOmegaLoader(['logsType'],["none"])

	NotOmegaLoader(['autoSave'],"true")
	NotOmegaLoader(['saveTick'],"false")
    NotOmegaLoader(['noneButtonID'],"false")
	NotOmegaLoader(['countingMethod'],"standard")
	NotOmegaLoader(['flushLog'],"true")
}

function superLoader(){
    for(let   ii in main['resource']){
		loader([ii],n(0))
        NotOmegaLoader([ii+'Unlock'],'false')
        NotOmegaLoader([ii+'Unlocked'],'false')
	}
    for(let  ii in main['building']){
		loader(['building'+ii],n(0))
	}
}