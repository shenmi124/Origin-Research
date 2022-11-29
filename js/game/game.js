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

        let a = Math.floor(Math.random() * 100)+1
        if(a<=dirtSieveProbability()[0]){
            player.dirt = player.dirt.add(Math.floor(Math.random() * dirtSieveAmount()[0])+1).min(main['resource']['dirt']['max']())
        }

        let b = Math.floor(Math.random() * 100)+1
        if(b<=dirtSieveProbability()[1]){
            player.stone = player.stone.add(Math.floor(Math.random() * dirtSieveAmount()[1])+1).min(main['resource']['stone']['max']())
        }

        let c = Math.floor(Math.random() * 100)+1
        if(c<=dirtSieveProbability()[2]){
            player.flint = player.flint.add(Math.floor(Math.random() * dirtSieveAmount()[2])+1).min(main['resource']['flint']['max']())
        }
    }
}

function garssGainGrassGarden(){
    return [player.building1.mul(0.5),player.building1.mul(20)]
}

function maxGainStoneWall(){
    return [player.building2.mul(40).mul(player['Research0-3-0-3Lv'].mul(0.2).add(1)),player.building2.mul(30).mul(player['Research0-3-0-3Lv'].mul(0.2).add(1))]
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