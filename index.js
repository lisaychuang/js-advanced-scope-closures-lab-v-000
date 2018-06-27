function produceDrivingRange(range){
    return function(begin, end){
        let distance = parseInt(end.substring(0,2)) - parseInt(begin.substring(0,2));
        return distance < range ? `within range by ${range-distance}` : `${distance - range} blocks out of range`;
    };
};

function produceTipCalculator(percent){
    return function(fare){
        return fare * percent;
    };
};

function createDriver(){
    
    let driverId = 0;

    return class{
        constructor(name){
            this.id = ++driverId;
            this.name = name;
        };
    };
};