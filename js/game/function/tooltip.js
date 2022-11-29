function tooltip(id){
	for(let i in main['resource']){
		if(id==i+'TooltipLoadResource'){
			if(main['resource'][i]['tooltip']!=undefined){
				return getTooDoc(colorText(i)[2]+"<hr><small>"+main['resource'][i]['tooltip']())
			}else{
				return getTooDoc('未命名')
			}
        }
	}

	for(let i in main['action']){
		if(id==i+'TooltipLoadAction'){
			let name = '未命名'
			if(main['action'][i]['name']!=undefined){
				name = main['action'][i]['name']()
			}
			if(main['action'][i]['tooltip']!=undefined){
				return getTooDoc(name+'<hr><small>'+main['action'][i]['tooltip']())
			}else{
				return getTooDoc('未命名')
			}
        }
	}

	for(let i in main['building']){
		if(id==i+'TooltipLoadBuilding'){
			let name = '未命名'
			let cost = '无消耗'
			if(main['building'][i]['name']!=undefined){
				name = main['building'][i]['name']()
			}
			if(main['building'][i]['cost']!=undefined){
				cost = BuildTooltipCost(i)
			}
			if(main['building'][i]['tooltip']!=undefined){
				return getTooDoc(name+"("+format(player['building'+i],0)+")"+'<hr><small>'+cost+'<hr>'+main['building'][i]['tooltip']())
			}else{
				return getTooDoc('未命名')
			}
        }
	}

	for(let i in main['resource']){
		if(id==i+'TooltipLoadResearchResource'){
			if(main['resource'][i]['PR']!=undefined){
				return researchTooltip(i)
			}else{
				return getTooDoc('未命名')
			}
        }
	}

	if(id=='#res-0-3-0-1'){return getTooDoc("泥筛工艺"+ResearchSchedule(id.substr(5))+"<hr><small>泥土从你的手中漏出后有时会剩下一些石子和燧石<hr>解锁行动:筛泥<br>解锁物品:"+colorText('stone')[2]+","+colorText('flint')[2]+"<hr>"+ResearchScheduleTooltip(id,0))}
	if(id=='#res-0-3-0-2'){return getTooDoc("肥沃土壤"+ResearchSchedule(id.substr(5))+"<hr><small>你可以分辨出土壤的肥沃程度,足够肥沃的土壤或许可以长出植物<hr>解锁建筑:草园<br>解锁物品:"+colorText('grass')[2]+"<hr>"+ResearchScheduleTooltip(id,0))}
	if(id=='#res-0-3-0-3'){return getTooDoc("石墙"+ResearchSchedule(id.substr(5))+"<hr><small>用石子围住草和泥土<hr>解锁建筑:石墙<hr>石墙效果+20%每级<hr>"+ResearchScheduleTooltip(id,0))}
	if(id=='#res-0-3-0-4'){return getTooDoc("燧石打磨"+ResearchSchedule(id.substr(5))+"<hr><small>锋利的燧石可以隔开杂草<hr>解锁行动:割草<hr>"+colorText('grass')[2]+"生产+20%每级<hr>"+ResearchScheduleTooltip(id,0))}
	if(id=='#res-0-3-0-5'){return getTooDoc("磨石"+ResearchSchedule(id.substr(5))+"<hr><small>打磨石头<hr>解锁行动:打磨石头<br>打磨效率+25%每级<hr>"+ResearchScheduleTooltip(id,0)+ResearchScheduleTooltip(id,1))}
	if(id=='#res-0-3-0-6'){return getTooDoc("除草艺"+ResearchSchedule(id.substr(5))+"<hr><small>利用草根做些工具<hr>割草可以获得木棍<hr>"+ResearchScheduleTooltip(id,0)+ResearchScheduleTooltip(id,1))}
	if(id=='#res-0-3-0-7'){return getTooDoc("沙石"+ResearchSchedule(id.substr(5))+"<hr><small>二次打磨<hr>打磨石头可以获得沙子<hr>"+ResearchScheduleTooltip(id,0))}
	if(id=='#res-0-3-0-8'){return getTooDoc("燧石短斧"+ResearchSchedule(id.substr(5))+"<hr><small>其实是砍灌木丛<hr>割草木头获得+300%<hr>"+ResearchScheduleTooltip(id,0)+ResearchScheduleTooltip(id,1))}
	if(id=='#res-0-3-0-9'){return getTooDoc("混合土壤"+ResearchSchedule(id.substr(5))+"<hr><small>更加肥沃的土壤可以加快作物生长<hr>"+colorText('grass')[2]+"生产+25%每级<hr>"+ResearchScheduleTooltip(id,0)+ResearchScheduleTooltip(id,1))}
	if(id=='#res-0-3-0-10'){return getTooDoc("木材加工"+ResearchSchedule(id.substr(5))+"<hr><small>将木头加工成木材<hr>解锁建筑:工作间<br>解锁页面:工坊<hr>"+ResearchScheduleTooltip(id,0))}
	if(id=='#res-0-3-0-11'){return getTooDoc("树种"+ResearchSchedule(id.substr(5))+"<hr><small>种树<hr>解锁建筑:树场<br>木头获得+20%<hr>"+ResearchScheduleTooltip(id,0))}
	if(id=='#res-0-3-0-12'){return getTooDoc("燧石镐"+ResearchSchedule(id.substr(5))+"<hr><small>这种锋利的工具可以开采石头,但也仅限石头了<hr>解锁行动:挖掘<hr>"+ResearchScheduleTooltip(id,0)+ResearchScheduleTooltip(id,1))}

	if(id=='#res-0-4-0-1'){return getTooDoc("制作木料<hr><small>")}

	if(id=='#treeTip'){return getTooDoc("科技树<hr><small>每项研究均为研究进度和研究上限构成<hr><big>分配<small><hr>当你进行研究时会消耗1精通并将随机的3个研究变为紫色,点击后获得等同于研究强度的研究进度<br>(提示:若多次点击分配上一次分配将无效)<hr>蓝色:可随机<br>紫色:可研究<br>绿色:已研究<br>红色:不可研究<hr>研究强度:分配次数<hr>研究强度:"+format(ResearchEffect(),0)+"<br>分配次数:"+format(player.ResearchTimesUse,0))}

	if(id=="#noneButtonID"){return getTooDoc("按钮ID<hr><small>在游戏中大部分按钮下显示ID<br>调整后自动保存且刷新网页")}
}