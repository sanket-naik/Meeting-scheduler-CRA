
 const moment = require('moment');
 //TIMESTAMP CONVERTER
 export function UnixTime(unixtime, type) {
     if(unixtime){
        if(type=="date"){
            return moment(unixtime).format("x");
         }else if(type=="time"){
            return moment(unixtime).format('hh:mm');
         }
     }else{
         return null
     }
 };