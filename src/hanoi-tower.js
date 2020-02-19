module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = Math.pow(2, disksNumber);
    const seconds = turns / (turnsSpeed / 3600);
    return {turns, seconds};
}