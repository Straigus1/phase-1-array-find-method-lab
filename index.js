
function superbowlWin(record) {
    let score = record.find(obj => obj.result === "W")
    
    return score ? score.year : score

    if(score){
        return score.year
    } else {
        return undefined
    }
    
    if(!score) {
        return undefined
    } else { 
        return score.year
    }
}