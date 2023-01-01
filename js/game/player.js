function calcPlayer(){
    loader(['exploring'],false)
    loader(['unknownManuscript'],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])

    loader(['ResearchItem'],'none')
    loader(['researchBar'],n(0))
    loader(['researchBarMax'],n(200))

    loader(['voidBar'],n(0))
    loader(['voidRealBar'],n(0))
    loader(['voidBarMax'],n(200))

    loader(['pointBar'],n(0))
    loader(['pointRealBar'],n(0))
    loader(['pointBarMax'],n(200))

    loader(['barToggle'],n(100))
    
    baseLoader()
    
    superLoader()
}

function baseLoader(){
    loader(['offline'],n(0))
    loader(['timeMod'],n(1))

    loader(['devSpeed'],n(1))

    loader(['firstGame'],false)

    loader(['logsType'],["none"])

	loader(['autoSave'],true)
	loader(['saveTick'],false)
    loader(['noneButtonID'],false)
	loader(['countingMethod'],"standard")
	loader(['flushLog'],true)
}

function superLoader(){
    for(let ii in main['resource']){
		loader([ii],n(0))
        loader([ii+'Unlock'],false)
        loader([ii+'Unlocked'],false)
	}
    for(let  ii in main['building']){
		loader(['building'+ii],n(0))
	}
}