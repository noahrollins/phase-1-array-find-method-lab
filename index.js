function superbowlWin(record){
    function getWin(record){
        return (record.result === "W")
    }
    if (record.find(getWin)){
    return record.find(getWin).year;
    } 
}