export function tocel(far){
    return ((far-32)*5)/9;
}
export function tofar(cel){
    return (cel*9)/5+32;
}

export function converter(temp,convto){
    var input = parseFloat(temp);
    if(Number.isNaN(input)){
        return "";
    }
    else{
        var output = convto(input);
    var rounded = Math.round(output*1000)/1000;
    return rounded.toString();
    }
    
}