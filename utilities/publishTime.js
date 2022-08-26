
function PublishTime(inputTime){
    const thisTime = new Date().getTime();
    const inputTimeSec = new Date(inputTime).getTime();
    let diff = (thisTime - inputTimeSec)/1000;
    if(diff<60)
    {
        return '' + Math.floor(diff) + ' seconds ago'; 
    }
    diff = diff/60;
    if(diff<60){
        return '' + Math.floor(diff) + ' minutes ago';
    }
    diff = diff/60;
    if(diff<24){
        return '' + Math.floor(diff) + 'hours ago';
    }
    diff = diff/24;
    return '' + Math.floor(diff) + ' days ago';
}

export default PublishTime;