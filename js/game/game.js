function dirtGainWithHands(){
    return n(0).sub(0.5)
}

function dirtSieveProbability(){
    return [30,25,20]
}

function dirtSieveAmount(){
    return [3,2,1]
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
            let numa = Math.floor(Math.random() * dirtSieveAmount()[0])+1
            player.dirt = player.dirt.add(numa).min(main['resource']['dirt']['max']())
            log += '<br>'+numa+colorText('dirt')[2]
        }

        let b = Math.floor(Math.random() * 100)+1
        if(b<=dirtSieveProbability()[1]){
            let numb = Math.floor(Math.random() * dirtSieveAmount()[1])+1
            player.stone = player.stone.add(numb).min(main['resource']['stone']['max']())
            log += '<br>'+numb+colorText('stone')[2]
        }

        let c = Math.floor(Math.random() * 100)+1
        if(c<=dirtSieveProbability()[2]){
            let numc = Math.floor(Math.random() * dirtSieveAmount()[2])+1
            player.flint = player.flint.add(numc).min(main['resource']['flint']['max']())
            log += '<br>'+numc+colorText('flint')[2]
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
    return [n(1).mul(20).mul(player['Research0-3-0-3Lv'].mul(0.2).add(1)),n(1).mul(15).mul(player['Research0-3-0-3Lv'].mul(0.2).add(1))]
}

function maxGainStoneWall(){
    return [player.building2.mul(maxBaseStoneWall()[0]),player.building2.mul(maxBaseStoneWall()[1])]
}

function garssGainMul(){
    return [player['Research0-3-0-4Lv'].mul(0.2).add(1),player['Research0-3-0-9Lv'].mul(0.25).add(1)]
}

function mowingGain(){
    let grassMul = n(2)
    let woodMul = n(0.05).mul(player['Research0-3-0-8Lv'].mul(3).add(1))
    let grass = n(main['resource']['grass']['gain']()).min(20).mul(grassMul)
    let wood = n(main['resource']['grass']['gain']()).min(20).mul(woodMul)
    return [grass,grassMul,wood,woodMul]
}

function mowingGrass(){
    player.grass=player.grass.add(mowingGain()[0]).min(main['resource']['grass']['max']())
    if(player['Research0-3-0-6Lv'].gte(1)){player.wood=player.wood.add(mowingGain()[2]).min(main['resource']['wood']['max']())}
    
}

function polishedStone(){
    if(player.stone.gte(2)){
        player.stone = player.stone.sub(2)
        player.flint = player.flint.add(n(1).mul(player['Research0-3-0-5Lv'].mul(0.25).add(1))).min(main['resource']['flint']['max']())
    }
}

function diging(){
    player.stone = player.stone.add(1)
}