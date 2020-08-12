let Game = require('../index')

describe('bowling game test', () => {

    test('no score', () => {
        
        // Arrange
        expect.assertions(1);
        let game = new Game;
        // Act
        for(let i = 0; i < 20; i++){
            game.roll(0);
        }

        // Assert
        expect(game.score()).toBe(0);
    });

    test('should handle sum of 2 rounds smaller than 10', () => {
        // Arrange
        expect.assertions(3);
        let game1 = new Game;
        let game2 = new Game;
        let game3 = new Game;
        // Act
        for(let i = 0; i < 20; i++){
            game1.roll(1);
        }
        for(let j = 0; j < 20; j++){
            game2.roll(2);
        }
        for(let k = 0; k < 20; k++){
            game3.roll(3);
        }
        // Assert
        expect(game1.score()).toBe(20);
        expect(game2.score()).toBe(40);
        expect(game3.score()).toBe(60);
    });

    test('should handle spare', () => {
        // Arrange
        expect.assertions(1);
        let game = new Game;
        // Act
        //spare
        game.roll(1);
        game.roll(9);
        //roll after spare
        game.roll(5);
        //rest of the game
        for(let i = 0; i < 17; i++){
            game.roll(0);
        }
        // Assert
        expect(game.score()).toBe(20);
    });
    
    test('should handle strike', () => {
        // Arrange
        expect.assertions(1);
        let game = new Game;
        // Act
        //strike
        game.roll(10);
        //roll after spare
        game.roll(5);
        game.roll(5);
        //rest of the game
        for(let i = 0; i < 16; i++){
            game.roll(0);
        }
        // Assert
        expect(game.score()).toBe(30);
    });

    test('should handle last spare', () => {
        // Arrange
        expect.assertions(1);
        let game = new Game;
        // Act
        //first part of the game
        for(let i = 0; i < 18; i++){
            game.roll(0);
        }
        //spare
        game.roll(5)
        game.roll(5)
        //one bonus
        game.roll(10)
        // Assert
        expect(game.score()).toBe(20);
    });

    test('should handle last strike', () => {
        // Arrange
        expect.assertions(1);
        let game = new Game;
        // Act
        //first part of the game
        for(let i = 0; i < 18; i++){
            game.roll(0);
        }
        game.roll(10)
        game.roll(10)
        game.roll(10)
        // Assert
        expect(game.score()).toBe(30);
    });
});