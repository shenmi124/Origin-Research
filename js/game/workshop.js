function work(must,cost,gain,awar,times){
    let can = true
    for(col=0;col<=times[0];col++){
        if(player[must[col]].lt(cost[col])){
            can = false
        }
    }
    if(can==true){
        for(col=0;col<=times[0];col++){
            player[must[col]] = player[must[col]].sub(cost[col])
        }
        for(col=0;col<=times[1];col++){
            player[gain[col]] = player[gain[col]].add(awar[col])
        }
    }
}