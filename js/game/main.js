var main = {
    resource:{
        time:{
            name(){return '时间通量'},
            color(){return '#46747c'},
            max(){return n(3600)},
            gain(){return n(0)},
            tooltip(){
                let gain = '总计生产:<br>'
                let gainAll = "总计:("+format(this.gain())+'/秒) => ('+formatTime(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+3600.00)<br>"
                let maxAll = "总计:(+"+format(this.max())+') => (+'+formatTime(this.max())+')'
                return "这个资源可能在未来也就是2个月前的现在获得,等等,现在是什么时间?<hr>离线时长超过20秒或暂停时获得同等"+colorText('time')[2]+"<br>"+colorText('time')[2]+"可以加速资源生产的时间流逝<br><hr>"+gain+gainAll+max+a2+maxAll
            },
            unlocked(){return player.time.gt(0) || player.timeUnlocked=='true'},
        },
        ResearchPoint:{
            name(){return '研究'},
            color(){return '#3dd3f8'},
            max(){return n(12).mul(player.ResearchAllTimes.add(1)).pow(player.ResearchAllTimes.div(50).add(1))},
            gain(){return n(0)},
            tooltip(){
                let gain = '总计生产:<br>'
                let gainAll = "总计:(+"+format(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+12×("+colorText('ResearchTimes')[2]+"总数+1))<sup>"+colorText('ResearchTimes')[2]+"总数/50+1</sup>) => (+"+format(this.max())+")<br>"
                let maxAll = "总计:(+"+format(this.max())+')'
                return "研究世间万物的规律<hr>抵达上限后消耗"+colorText('ResearchPoint')[2]+"并获得1"+colorText('ResearchTimes')[2]+"以及"+colorText('ResearchTimes')[2]+'<hr>'+gain+gainAll+max+a2+maxAll
            },
            unlocked(){return player.ResearchPoint.gt(0) || player.ResearchPoint=='true'},
        },
        ResearchTimes:{
            name(){return '精通'},
            color(){return '#c200c9'},
            tooltip(){
                let spa = "研究强度:"+format(ResearchEffect(),0)+"<br>"
                let spb = "分配次数:"+format(player.ResearchTimesUse,0)+"<br>"
                let spc = "精通总数:"+format(player.ResearchAllTimes,0)
                return "凝聚了一代人的毕生所学<hr>研究强度:分配次数<hr>"+spa+spb+spc
            },
            unlocked(){return player.ResearchTimes.gt(0) || player.ResearchTimes=='true'},
        },
        dirt:{
            name(){return '泥土'},
            color(){return '#cf7004'},
            max(){return n(10).add(maxGainStoneWall()[0]).add(maxGainStoneWall()[0])},
            gain(){return n(dirtGainWithHands())},
            PR(){return n(1)},
            tooltip(){
                let gain = '总计生产:<br>'
                let a = "手中流失:("+format(dirtGainWithHands())+'/秒)<br>'
                let gainAll = "总计:("+format(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+10.00)<br>"
                let b2 = n(maxGainStoneWall()[0]).gt(0) ? "来自建筑(石墙):(+"+format(maxGainStoneWall()[0])+")<br>" : ""
                let maxAll = "总计:(+"+format(this.max())+')'
                return "细腻的泥土从你手中漏出<hr>"+gain+a+gainAll+max+a2+b2+maxAll
            },
        },
        grass:{
            name(){return '草'},
            color(){return '#4DF10C'},
            max(){return n(20).add(garssGainGrassGarden()[1]).add(maxGainStoneWall()[1])},
            gain(){return n(garssGainGrassGarden()[0]).mul(garssGainMul()[0]).mul(garssGainMul()[1])},
            PR(){return n(1.5)},
            tooltip(){
                let gain = '总计生产:<br>'
                let a = n(garssGainGrassGarden()[0]).gt(0) ? "来自建筑(草园):(+"+format(garssGainGrassGarden()[0])+"/秒)<br>" : ""
                let b = n(garssGainMul()[0]).gt(1) ? "来自研究(燧石打磨):(×"+format(garssGainMul()[0])+")<br>" : ""
                let c = n(garssGainMul()[1]).gt(1) ? "来自研究(混合土壤):(×"+format(garssGainMul()[1])+")<br>" : ""
                let gainAll = "总计:(+"+format(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+20.00)<br>"
                let b2 = n(garssGainGrassGarden()[1]).gt(0) ? "来自建筑(草园):(+"+format(garssGainGrassGarden()[1])+")<br>" : ""
                let c2 = n(maxGainStoneWall()[1]).gt(0) ? "来自建筑(石墙):(+"+format(maxGainStoneWall()[1])+")<br>" : ""
                let maxAll = "总计:(+"+format(this.max())+')'
                return "绿色的青草,或许可以做些有用的东西<hr>"+gain+a+b+c+gainAll+max+a2+b2+c2+maxAll
            },
            unlocked(){return player['Research0-3-0-2Lv'].gte(1)},
        },
        stone:{
            name(){return '石头'},
            color(){return '#868686'},
            max(){return n(30)},
            gain(){return n(0)},
            PR(){return n(5)},
            tooltip(){
                let gain = '总计生产:<br>'
                let gainAll = "总计:(+"+format(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+30.00)<br>"
                let maxAll = "总计:(+"+format(this.max())+')'
                return "其实只是一些小石子<hr>"+gain+gainAll+max+a2+maxAll
            },
            unlocked(){return player['Research0-3-0-1Lv'].gte(1)},
        },
        flint:{
            name(){return '燧石'},
            color(){return '#A88080'},
            max(){return n(30)},
            gain(){return n(0)},
            PR(){return n(8.5)},
            tooltip(){
                let gain = '总计生产:<br>'
                let gainAll = "总计:(+"+format(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+30.00)<br>"
                let maxAll = "总计:(+"+format(this.max())+')'
                return "十分锋利的小石子,或许可以做些工具<hr>"+gain+gainAll+max+a2+maxAll
            },
            unlocked(){return player['Research0-3-0-1Lv'].gte(1)},
        },
        wood:{
            name(){return '木头'},
            color(){return '#CE6224'},
            max(){return n(50)},
            gain(){return n(0)},
            PR(){return n(13)},
            tooltip(){
                let gain = '总计生产:<br>'
                let gainAll = "总计:(+"+format(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+30.00)<br>"
                let maxAll = "总计:(+"+format(this.max())+')'
                return "十分重要的材料<hr>"+gain+gainAll+max+a2+maxAll
            },
            unlocked(){return player['Research0-3-0-6Lv'].gte(1)},
        },
    },
    action:{
        1:{
            name(){return '采集泥土'},
            onClick(){
                player.dirt=player.dirt.add(1)
            },
            tooltip(){return "泥土从你的手中漏出<br>(提示:<a style='color:red'>将鼠标对准资源名称可查看更多信息</a>)"},
        },
        2:{
            name(){return '筛土'},
            onClick(){dirtSieve()},
            tooltip(){
                let cost = '泥土从你的手中漏出后有时会剩下一些石子和燧石...<hr>消耗:<br>'+format(player.dirt)+"/5"+colorText('dirt')[2]
                return cost
            },
            unlocked(){return player['Research0-3-0-1Lv'].gte(1)},
        },
        3:{
            name(){return '割草'},
            onClick(){mowingGrass()},
            tooltip(){
                let a = "获得"+format(mowingGain()[0])+colorText('grass')[2]
                let b = player['Research0-3-0-6Lv'].gte(1) ? '<br>获得'+format(mowingGain()[2])+colorText('wood')[2] : ''
                return "用锋利的燧石<hr>"+a+b+'<br>行动获取与草生产有关'
            },
            unlocked(){return player['Research0-3-0-4Lv'].gte(1)},
        },
        4:{
            name(){return '打磨石头'},
            onClick(){polishedStone()},
            tooltip(){
                let cost = "消耗:<br>"+format(player.stone)+"/2"+colorText('stone')[2]+"<br>获得:<br>"+colorText('flint')[2]+"("+format(n(1).mul(player['Research0-3-0-5Lv'].mul(0.25).add(1)))+")"
                let a = player['Research0-3-0-7Lv'].gte(1) ? "<br>"+colorText('sand')[2]+"("+format(n(0.1).mul(player['Research0-3-0-5Lv'].mul(0.25).add(1)))+")" : ''
                return "反复打磨<hr>"+cost+a
            },
            unlocked(){return player['Research0-3-0-5Lv'].gte(1)},
        },
        5:{
            name(){return '挖掘'},
            onClick(){diging()},
            tooltip(){return "挖掘<hr><small>挖掘...<hr>获得:1"+colorText('stone')[2]},
            unlocked(){return player['Research0-3-0-12Lv'].gte(1)},
        },
    },
    building:{
        1:{
            name(){return '草园'},
            unlocked(){return player['Research0-3-0-2Lv'].gte(1)},
            cost(){return [['dirt',n(4).pow(player.building1.mul(0.35).add(1))]]},
            tooltip(){
                let top = "<div style='text-align: left;'><hr>"
                let suda = format(garssGainGrassGarden()[0])+colorText('grass')[2]+"/秒("+format(garssBaseGrassGarden()[0])+")<br>"
                let sudb = format(garssGainGrassGarden()[1])+colorText('grass')[2]+"上限("+format(garssBaseGrassGarden()[1])+")"
                let fin = "</div>"
                return "精选的泥土做出的草园,在这里草才可以生长<small>"+top+suda+sudb+fin
            },
        },
        2:{
            name(){return '石墙'},
            unlocked(){return player['Research0-3-0-3Lv'].gte(1)},
            cost(){return [['dirt',n(5).pow(player.building2.mul(0.52).add(1))],['stone',n(3).pow(player.building2.mul(0.47).add(1))]]},
            tooltip(){
                let top = "<div style='text-align: left;'><hr>"
                let suda = format(maxGainStoneWall()[0])+colorText('dirt')[2]+"上限("+format(maxBaseStoneWall()[0])+")<br>"
                let sudb = format(maxGainStoneWall()[1])+""+colorText('grass')[2]+"上限("+format(maxBaseStoneWall()[1])+")</div>"
                let fin = "</div>"
                return "混杂着很多土的墙,可以围住草和泥土<br><br><small><i><div style='text-align: right; color: #888'>————所以为什么不叫土墙</div></i>"+top+suda+sudb+fin
            },
        },
    },
}

var mainTree = {
    main:{
        1:{
            name(){return '泥土工艺'},
            map(){},
        }
    }
}