var mainTab = {
    action:{
        name(){return '行动'},
        logs(){return ['action','行动']},
        id(){return 'Action'},
    },
    building:{
        name(){return '建筑'},
        logs(){return ['building','建筑']},
        id(){return 'Building'},
    },
}

var main = {
    resource:{
        time:{
            name(){return '时间通量'},
            color(){return '#46747c'},
            Class(){return 'Space'},
            max(){return n(1800)},
            gain(){
                let a = n(0)
                if(player.timeMod.eq(2)){
                    a = n(0).sub(1).mul(player.timeMod)
                }else if(player.timeMod.eq(0)){
                    a = n(1)
                }
                return a
            },
            tooltip(){
                let gain = '总计生产:<br>'
                let a = player.timeMod.eq(2) ? '时间洪流:(-'+format(n(1))+')<br>' : ''
                let timeStop = player.timeMod.eq(0) ? '时间暂停:(+'+format(n(1))+')<br>' : ''
                let time = player.timeMod.eq(2) ? '时间倍率:(×'+format(player.timeMod)+')<br>' : ''
                let gainAll = "总计:("+format(this.gain())+'/秒) <-> ('+formatTime(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+3600.00)<br>"
                let maxAll = "总计:(+"+format(this.max())+') <-> (+'+formatTime(this.max())+')'
                return "这个资源可能在未来也就是2个月前的现在获得,等等,现在是什么时间?<hr>离线时长超过20秒或暂停时获得同等"+colorText('time')[2]+"<br>"+colorText('time')[2]+"可以加速资源生产的时间流逝<br><hr>"+gain+a+timeStop+time+gainAll+max+a2+maxAll
            },
            unlocked(){return player.time.gt(0) || player.timeUnlocked=='true'},
            otherText(){
                return '<a id="time">时间洪流</a>'
            },
            otherTooltip(){
                return "点击以改变流速,在时间洪流中你每秒消耗1时间通量来获得全局资源生产速度提升<br>当前你的时间倍率是:<a style='color: red;'>"+format(player.timeMod)+'</a>(上限:'+format(n(2))+')'
            },
            onClick(){
                if(player.timeMod.eq(1)){
                    player.timeMod = n(2)
                    addedCss('time','time')
                    removeCss('time','timeStop')
                }else if(player.timeMod.eq(2)){
                    player.timeMod = n(0)
                    addedCss('time','timeStop')
                    removeCss('time','time')
                }else{
                    player.timeMod = n(1)
                    removeCss('time','time')
                    removeCss('time','timeStop')
                }
            },
        },
        void:{
            name(){return '虚空'},
            color(){return 'rgb(123, 25, 214)'},
            Class(){return 'High'},
            gain(){
                let a = n(0)
                return a.mul(player.timeMod)
            },
            tooltip(){
                let gain = '总计生产:<br>'
                let timeStop = player.timeMod.eq(0) ? '时间暂停:(×'+format(player.timeMod)+')<br>' : ''
                let time = player.timeMod.eq(2) ? '时间倍率:(×'+format(player.timeMod)+')<br>' : ''
                let gainAll = "总计:("+format(this.gain())+'/秒)'
                return "这是一种违背了物理常识的物质,准确来说,这只是一片虚无,算不上是物质,但无论如何,你能感觉到一股无穷大的能量在其中,只是你无法充分利用这能量<br><hr>"+gain+time+timeStop+gainAll
            },
        },
        voidEnergy:{
            name(){return '虚空能量'},
            color(){return 'rgb(123, 25, 214)'},
            Class(){return 'High'},
            gain(){
                let a = n(0)
                if(player.unknownManuscript[0]=='true'){
                    a = n(player.void)
                }
                return a.mul(player.timeMod)
            },
            tooltip(){
                let gain = '总计生产:<br>'
                let a = player.exploring ? '基础:(+'+format(n(player.void))+'/s)<br>' : ''
                let timeStop = player.timeMod.eq(0) ? '时间暂停:(×'+format(player.timeMod)+')<br>' : ''
                let time = player.timeMod.eq(2) ? '时间倍率:(×'+format(player.timeMod)+')<br>' : ''
                let gainAll = "总计:("+format(this.gain())+'/秒)'
                return "基础:(虚空)<hr>一种未知的能量<br><hr>"+gain+a+time+timeStop+gainAll
            },
            unlocked(){return player.unknownManuscript[0]=='true'}
        },
        course:{
            name(){return '探索历程'},
            color(){return 'rgb(62, 110, 61)'},
            Class(){return 'Space'},
            tooltip(){
                let a = player.course.gte(1) ? '<hr>你的发现:<br>1.发现泥土<br>' : ''
                return "对你探索的一种记录,每当你发现新物品时就会增加"+a
            },
        },
        explore:{
            name(){return '探索'},
            color(){return 'rgb(12, 128, 1)'},
            Class(){return 'Space'},
            gain(){
                let a = n(0)
                if(player.exploring=='true'){
                    a = n(1)
                }
                return a.mul(player.timeMod)
            },
            max(){
                return n(10).pow(player.course.add(1).pow(1.1))
            },
            tooltip(){
                let gain = '总计生产:<br>'
                let a = player.exploring ? '探索:(+'+format(n(1))+'/s)<br>' : ''
                let timeStop = player.timeMod.eq(0) ? '时间暂停:(×'+format(player.timeMod)+')<br>' : ''
                let time = player.timeMod.eq(2) ? '时间倍率:(×'+format(player.timeMod)+')<br>' : ''
                let gainAll = "总计:("+format(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+"+format(this.max())+")<br>"
                let maxAll = "总计:(+"+format(this.max())+')'
                return "基础:("+format(n(10))+"<sup>(探索里程+"+format(n(1))+")<sup>"+format(n(1.1))+"</sup></sup>)<hr>抵达上限时获得1探索历程<hr>准确来说,这并不算是资源,这只是对你的探索的一种记录<br><hr>"+gain+a+time+timeStop+gainAll+max+a2+maxAll
            },
        },
        ResearchPoint:{
            name(){return '研究'},
            color(){return '#3dd3f8'},
            max(){return n(10)},
            gain(){return n(0).mul(player.timeMod)},
            tooltip(){
                let gain = '总计生产:<br>'
                let timeStop = player.timeMod.eq(0) ? '时间暂停:(×'+format(player.timeMod)+')<br>' : ''
                let time = player.timeMod.eq(2) ? '时间倍率:(×'+format(player.timeMod)+')<br>' : ''
                let gainAll = "总计:(+"+format(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+"+format(this.max())+")<br>"
                let maxAll = "总计:(+"+format(this.max())+')'
                return "研究世间万物的规律<hr>"+gain+time+timeStop+gainAll+max+a2+maxAll
            },
            unlocked(){return player.ResearchPoint.gt(0) || player.ResearchPointUnlocked=='true'},
        },
        dirt:{
            name(){return '泥土'},
            color(){return '#cf7004'},
            max(){return n(10).add(maxGainStoneWall()[0]).add(maxGainStoneWall()[0])},
            gain(){return n(dirtGainWithHands()).mul(player.timeMod)},
            PR(){return n(1)},
            tooltip(){
                let gain = '总计生产:<br>'
                let a = "手中流失:("+format(dirtGainWithHands())+'/秒)<br>'
                let timeStop = player.timeMod.eq(0) ? '时间暂停:(×'+format(player.timeMod)+')<br>' : ''
                let time = player.timeMod.eq(2) ? '时间倍率:(×'+format(player.timeMod)+')<br>' : ''
                let gainAll = "总计:("+format(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+"+format(n(10))+")<br>"
                let b2 = n(maxGainStoneWall()[0]).gt(0) ? "来自建筑(石墙):(+"+format(maxGainStoneWall()[0])+")<br>" : ""
                let maxAll = "总计:(+"+format(this.max())+')'
                return "细腻的泥土从你手中漏出<hr>"+gain+a+timeStop+time+gainAll+max+a2+b2+maxAll
            },
            unlocked(){return player.course.gte(1)},
        },
        grass:{
            name(){return '草'},
            color(){return '#4DF10C'},
            max(){return n(20).add(garssGainGrassGarden()[1]).add(maxGainStoneWall()[1])},
            gain(){return n(garssGainGrassGarden()[0]).mul(player.timeMod)},
            PR(){return n(1.5)},
            tooltip(){
                let gain = '总计生产:<br>'
                let a = n(garssGainGrassGarden()[0]).gt(0) ? "来自建筑(草园):(+"+format(garssGainGrassGarden()[0])+"/秒)<br>" : ""
                let timeStop = player.timeMod.eq(0) ? '时间暂停:(×'+format(player.timeMod)+')<br>' : ''
                let time = player.timeMod.eq(2) ? '时间倍率:(×'+format(player.timeMod)+')<br>' : ''
                let gainAll = "总计:(+"+format(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+20.00)<br>"
                let b2 = n(garssGainGrassGarden()[1]).gt(0) ? "来自建筑(草园):(+"+format(garssGainGrassGarden()[1])+")<br>" : ""
                let c2 = n(maxGainStoneWall()[1]).gt(0) ? "来自建筑(石墙):(+"+format(maxGainStoneWall()[1])+")<br>" : ""
                let maxAll = "总计:(+"+format(this.max())+')'
                return "绿色的青草,或许可以做些有用的东西<hr>"+gain+a+b+c+timeStop+time+gainAll+max+a2+b2+c2+maxAll
            },
            unlocked(){return player.grass.gt(0) || player.grassUnlocked=='true'},
        },
        stone:{
            name(){return '石头'},
            color(){return '#868686'},
            max(){return n(30)},
            gain(){return n(0).mul(player.timeMod)},
            PR(){return n(5)},
            tooltip(){
                let gain = '总计生产:<br>'
                let timeStop = player.timeMod.eq(0) ? '时间暂停:(×'+format(player.timeMod)+')<br>' : ''
                let time = player.timeMod.eq(2) ? '时间倍率:(×'+format(player.timeMod)+')<br>' : ''
                let gainAll = "总计:(+"+format(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+30.00)<br>"
                let maxAll = "总计:(+"+format(this.max())+')'
                return "其实只是一些小石子<hr>"+gain+timeStop+time+gainAll+max+a2+maxAll
            },
            unlocked(){return false},
        },
        flint:{
            name(){return '燧石'},
            color(){return '#A88080'},
            max(){return n(30)},
            gain(){return n(0).mul(player.timeMod)},
            PR(){return n(8.5)},
            tooltip(){
                let gain = '总计生产:<br>'
                let timeStop = player.timeMod.eq(0) ? '时间暂停:(×'+format(player.timeMod)+')<br>' : ''
                let time = player.timeMod.eq(2) ? '时间倍率:(×'+format(player.timeMod)+')<br>' : ''
                let gainAll = "总计:(+"+format(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+30.00)<br>"
                let maxAll = "总计:(+"+format(this.max())+')'
                return "十分锋利的小石子,或许可以做些工具<hr>"+gain+timeStop+time+gainAll+max+a2+maxAll
            },
            unlocked(){return false},
        },
        wood:{
            name(){return '木头'},
            color(){return '#CE6224'},
            max(){return n(50)},
            gain(){return n(0).mul(player.timeMod)},
            PR(){return n(13)},
            tooltip(){
                let gain = '总计生产:<br>'
                let timeStop = player.timeMod.eq(0) ? '时间暂停:(×'+format(player.timeMod)+')<br>' : ''
                let time = player.timeMod.eq(2) ? '时间倍率:(×'+format(player.timeMod)+')<br>' : ''
                let gainAll = "总计:(+"+format(this.gain())+'/秒)'
                let max = '<hr>总计上限:<br>'
                let a2 = "基础:(+30.00)<br>"
                let maxAll = "总计:(+"+format(this.max())+')'
                return "十分重要的材料<hr>"+gain+timeStop+time+gainAll+max+a2+maxAll
            },
            unlocked(){return false},
        },
    },
    action:{
        0:{
            name(){return '探索'},
            onClick(){
                player.exploring = 'true'
                addLog('你决定探索一下这片土地','action')
            },
            tooltip(){return "探索这片土地<br>(提示:<a style='color:red'>将鼠标对准资源名称可查看更多信息</a>)"},
            unlocked(){return player.exploring=='false'},
        },
        1:{
            name(){return '采集泥土'},
            onClick(){
                let a = Math.random() * 2
                player.dirt=player.dirt.add(a).min(main.resource.dirt.max())
                addLog('你获得了'+format(a)+colorText('dirt')[2],'action')
            },
            tooltip(){return "泥土从你的手中漏出"},
            unlocked(){return player.course.gte(1)},
        },
        2:{
            name(){return '筛土'},
            onClick(){dirtSieve()},
            tooltip(){
                let cost = '泥土从你的手中漏出后有时会剩下一些石子和燧石...<hr>消耗:<br>'+format(player.dirt)+"/5"+colorText('dirt')[2]
                return cost
            },
            unlocked(){return false},
        },
        3:{
            name(){return '割草'},
            onClick(){mowingGrass()},
            tooltip(){
                let a = "获得"+format(mowingGain()[0])+colorText('grass')[2]
                let b = player['Research0-3-0-6Lv'].gte(1) ? '<br>获得'+format(mowingGain()[2])+colorText('wood')[2] : ''
                return "用锋利的燧石<hr>"+a+b+'<br>行动获取与草生产有关'
            },
            unlocked(){return false},
        },
        4:{
            name(){return '打磨石头'},
            onClick(){polishedStone()},
            tooltip(){
                let cost = "消耗:<br>"+format(player.stone)+"/2"+colorText('stone')[2]+"<br>获得:<br>"+colorText('flint')[2]+"("+format(n(1).mul(player['Research0-3-0-5Lv'].mul(0.25).add(1)))+")"
                let a = player['Research0-3-0-7Lv'].gte(1) ? "<br>"+colorText('sand')[2]+"("+format(n(0.1).mul(player['Research0-3-0-5Lv'].mul(0.25).add(1)))+")" : ''
                return "反复打磨<hr>"+cost+a
            },
            unlocked(){return false},
        },
        'manuscript0':{
            name(){return '未知手稿'},
            onClick(){
                addLog('你将手按压在手稿上,霎时光芒聚显,手部传来了巨痛,你下意识想要缩手却发现神经已经麻痹...<br>痛感消失,手稿变得清晰可见,你貌似懂了些什么...<br>同时你注意到你貌似可以轻微的利用那虚空中的能量了.','action')
                addLog('*解锁<a class="Space">研究*</a>','news')
                addLog('*解锁<a class="High" style="color: rgb(123, 25, 214)">虚空能量</a>*','news')
                player.unknownManuscript[0] = 'true'
            },
            tooltip(){return "一份未知的手稿,不时闪出<a class=\"High\" style=\"color: rgb(123, 25, 214)\">紫色粉末</a>,随后又消失在空气中,不知是不是粉末的原因,你总是看不清上面的字,只觉得身体燥热好像有什么能量要冲出体外<hr>解析"},
            unlocked(){return player.unknownManuscript[0]=='false' && player.course.gte(1)},
        },
    },
    building:{
        1:{
            name(){return '草园'},
            unlocked(){return false},
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
            unlocked(){return false},
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