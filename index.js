let Game = function(){
    this.rollCount = [];
    this.currentRoll = 0;
}

Game.prototype.roll = function(pin) {
    this.rollCount[this.currentRoll++] = pin;
}

Game.prototype.score = function(){
    let self = this;
    let frameCount = 0;
    let score = 0;
    function frameSum() {
		return self.rollCount[frameCount]+self.rollCount[frameCount+1];
	}
    function bonusSpare(){
        return self.rollCount[frameCount+2];
    }
    function bonusStrike(){
        return self.rollCount[frameCount+1]+self.rollCount[frameCount+2];
    }
    for (let frame = 0; frame < 10; frame ++){
        //strike
        if(self.rollCount[frameCount]===10){
			score += 10 + bonusStrike();
			frameCount++;
        }
        //spare
        else if (self.rollCount[frameCount]+self.rollCount[frameCount+1]===10){
			score += 10 + bonusSpare();
			frameCount += 2;
        }
        //no strike nor spare
        else {
			score += frameSum();
			frameCount += 2;
        }
    }
    return score;
}

module.exports = Game;