var months = {0:"January", 1:"February", 2:"March", 3:"April", 4:"May",
               5:"June", 6:"July", 7 :"August", 8:"September", 9:"October",
               10:"November", 11:"December"};

var check = (str)=>{
    //case of unix timestamp
    return isNaN(str) && isNaN(Date.parse(str));
};

var stamp = (str)=>{
    var timeStamp ={};
    if(isNaN(str)){
        timeStamp['unix'] = Date.parse(str);
    }else{
        timeStamp['unix'] = Number(str);
    }
    let newDate = new Date(timeStamp['unix']);

    
    let month = months[newDate.getMonth()];
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    timeStamp["natural"] = `${month} ${day}, ${year}`
    return timeStamp;
};

module.exports = {check,stamp};

