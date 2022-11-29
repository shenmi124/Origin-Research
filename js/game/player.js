function calcPlayer(){
    superLoader()

    loader(['ResearchAllTimes'],n(0))
    loader(['ResearchTimesUse'],n(0))
    
    researchLoader(19)

    loader(['res-0-1-1-1'],n(0))//草园
    loader(['res-0-1-1-2'],n(0))//石墙

    loader(['devSpeed'],n(1))
	NotOmegaLoader(['autoSave'],"true")
	NotOmegaLoader(['saveTick'],"false")
    NotOmegaLoader(['noneButtonID'],"false")
}

function superLoader(){
    for(ii in main['resource']){
		loader([ii],n(0))
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