class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    (this.pairsClicked = 0), (this.pairsGuessed = 0);
  }

  shuffleCards() {
    if(this.cards.length === 0) return undefined;
    const newShuffledGame = [];

    for (let i = 0; i < this.cards.length; i++) {
      let dice = Math.floor(Math.random() * this.cards.length);
      newShuffledGame.push(this.cards[dice]);
    }
    // console.log(this.cards);
    // console.log(newShuffledGame);
    return this.cards = newShuffledGame
  }

  checkIfPair(card1, card2) {
    
    // ... write your code here
  }

  checkIfFinished() {
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
