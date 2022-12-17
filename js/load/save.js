var saveName = "Origin_Research";
var saveStr = "";
var toClearSave = false
var cleared = false
var player = {}

function load(save = null){
    if(localStorage.getItem(saveName)!=null) saveStr = JSON.parse(LZString.decompressFromBase64(localStorage.getItem(saveName)));
    if(save!=null) saveStr = JSON.parse(LZString.decompressFromBase64(save))
    calcPlayer();
    //window.alert("test")
    fixSave()
};
function save(){
    if(toClearSave){
        localStorage.clear(saveName)
        location.reload()
        cleared = true
        toClearSave = false
    }
    else if(!cleared){
        saveStr = LZString.compressToBase64(JSON.stringify(player));
        localStorage.setItem(saveName,saveStr);
    }
};

function fixSave(){};

function n(number){
    return new Decimal(number)
};

function inJson(json,things){
    var a = json
    for(let i in things){
        if(a[things[i]]){
            a = a[things[i]]
        }else return false
    }
    return true
}

function loader(place,basicNum){
    var l = place.length
    if(inJson(saveStr,place)){
        switch(l){
            case 1:player[place[0]] = n(saveStr[place[0]]);break
            case 2:player[place[0]][place[1]] = n(saveStr[place[0]][place[1]]);break
            case 3:player[place[0]][place[1]][place[2]] = n(saveStr[place[0]][place[1]][place[2]]);break
            case 4:player[place[0]][place[1]][place[2]][place[3]] = n(saveStr[place[0]][place[1]][place[2]][place[3]]);break
            case 5:player[place[0]][place[1]][place[2]][place[3]][place[4]] = n(saveStr[place[0]][place[1]][place[2]][place[3]][place[4]]);break
            case 6:player[place[0]][place[1]][place[2]][place[3]][place[4]][place[5]] = n(saveStr[place[0]][place[1]][place[2]][place[3]][place[4]][place[5]]);break
            case 7:player[place[0]][place[1]][place[2]][place[3]][place[4]][place[5]][place[6]] = n(saveStr[place[0]][place[1]][place[2]][place[3]][place[4]][place[5]][place[6]]);break
        }
    }else{
        switch(l){
            case 1:player[place[0]] = basicNum;break
            case 2:player[place[0]][place[1]] = basicNum;break
            case 3:player[place[0]][place[1]][place[2]] = basicNum;break
            case 4:player[place[0]][place[1]][place[2]][place[3]] = basicNum;break
            case 5:player[place[0]][place[1]][place[2]][place[3]][place[4]] = basicNum;break
            case 6:player[place[0]][place[1]][place[2]][place[3]][place[4]][place[5]] = basicNum;break
            case 7:player[place[0]][place[1]][place[2]][place[3]][place[4]][place[5]][place[6]] = basicNum;break
        }
    }
}

function NotOmegaLoader(place,basicNum){
    var l = place.length
    if(inJson(saveStr,place)){
        switch(l){
            case 1:player[place[0]] = (saveStr[place[0]]);break
            case 2:player[place[0]][place[1]] = (saveStr[place[0]][place[1]]);break
            case 3:player[place[0]][place[1]][place[2]] = (saveStr[place[0]][place[1]][place[2]]);break
            case 4:player[place[0]][place[1]][place[2]][place[3]] = (saveStr[place[0]][place[1]][place[2]][place[3]]);break
            case 5:player[place[0]][place[1]][place[2]][place[3]][place[4]] = (saveStr[place[0]][place[1]][place[2]][place[3]][place[4]]);break
            case 6:player[place[0]][place[1]][place[2]][place[3]][place[4]][place[5]] = (saveStr[place[0]][place[1]][place[2]][place[3]][place[4]][place[5]]);break
            case 7:player[place[0]][place[1]][place[2]][place[3]][place[4]][place[5]][place[6]] = (saveStr[place[0]][place[1]][place[2]][place[3]][place[4]][place[5]][place[6]]);break
        }
    }else{
        switch(l){
            case 1:player[place[0]] = basicNum;break
            case 2:player[place[0]][place[1]] = basicNum;break
            case 3:player[place[0]][place[1]][place[2]] = basicNum;break
            case 4:player[place[0]][place[1]][place[2]][place[3]] = basicNum;break
            case 5:player[place[0]][place[1]][place[2]][place[3]][place[4]] = basicNum;break
            case 6:player[place[0]][place[1]][place[2]][place[3]][place[4]][place[5]] = basicNum;break
            case 7:player[place[0]][place[1]][place[2]][place[3]][place[4]][place[5]][place[6]] = basicNum;break
        }
    }
}