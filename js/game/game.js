function firstDiff(){
    if(player.explore.gte(main.resource.explore.max())){
        player.course = player.course.add(1)
        if(player.course.eq(1)){
            addLog('走了大概十几米,在一片黑色物质后便是一眼望不到头的泥土和荒草...<br>等等,你看见了一些不一样的东西.','news')
        }
    }
}

function dirtGainWithHands(){
    return n(0).sub(0.5)
}

function dirtSieveProbability(){
    return [30,25,20]
}

function dirtSieveAmount(){
    return [4,3,2]
}

function dirtSieveCost(){
    return 5
}

function dirtSieve(){
    if(player.dirt.gte(dirtSieveCost())){
        player.dirt = player.dirt.sub(dirtSieveCost())

        let log = '你筛出了'

        let a = Math.floor(Math.random() * 100)+1
        if(a<=dirtSieveProbability()[0]){
            let numa = Math.random() * dirtSieveAmount()[0]
            player.dirt = player.dirt.add(numa).min(main['resource']['dirt']['max']())
            log += '<br>'+format(numa)+colorText('dirt')[2]
        }

        let b = Math.floor(Math.random() * 100)+1
        if(b<=dirtSieveProbability()[1]){
            let numb =Math.random() * dirtSieveAmount()[1]
            player.stone = player.stone.add(numb).min(main['resource']['stone']['max']())
            log += '<br>'+format(numb)+colorText('stone')[2]
        }

        let c = Math.floor(Math.random() * 100)+1
        if(c<=dirtSieveProbability()[2]){
            let numc = Math.random() * dirtSieveAmount()[2]
            player.flint = player.flint.add(numc).min(main['resource']['flint']['max']())
            log += '<br>'+format(numc)+colorText('flint')[2]
        }
        if(log=='你筛出了'){
            addLog('你什么都没有筛出','action')
        }else{
            addLog(log,'action')
        }
    }
}

function garssBaseGrassGarden(){
    return [n(0.2),n(10)]
}

function garssGainGrassGarden(){
    return [player.building1.mul(garssBaseGrassGarden()[0]),player.building1.mul(garssBaseGrassGarden()[1])]
}

function maxBaseStoneWall(){
    return [n(1).mul(20),n(1).mul(15)]
}

function maxGainStoneWall(){
    return [player.building2.mul(maxBaseStoneWall()[0]),player.building2.mul(maxBaseStoneWall()[1])]
}

function mowingGain(){
    let grassMul = n(2)
    let woodMul = n(0.05).mul(player['Research0-3-0-8Lv'].mul(3).add(1))
    let grass = n(main['resource']['grass']['gain']()).min(20).mul(grassMul)
    let wood = n(main['resource']['grass']['gain']()).min(20).mul(woodMul)
    return [grass,grassMul,wood,woodMul]
}