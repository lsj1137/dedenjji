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