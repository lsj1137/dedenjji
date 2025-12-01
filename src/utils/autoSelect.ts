export function getRandomRSP() {
    let num = Math.random()*3;
    let result = "";
    if (num<1) {
        result = "rock";
    } else if (num<2) {
        result = "scissors";
    } else {
        result = "paper";
    }
    return result;
}

export function getRandomDdj() {
    let num = Math.random()*2;
    let result = "";
    if (num<1) {
        result = "upside";
    } else {
        result = "downside";
    }
    return result;
    
}