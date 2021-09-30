class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    (this.pairsClicked = 0), (this.pairsGuessed = 0);
  }

  shuffleCards() {
    if (this.cards.length === 0) return undefined;
    const newShuffledGame = [];

    for (let i = 0; i < this.cards.length; i++) {
      let dice = Math.floor(Math.random() * this.cards.length);
      if (!newShuffledGame.includes(this.cards[dice])) {
        newShuffledGame.push(this.cards[dice]);
      }
    }

    // console.log('hello',this.cards);
    // console.log(newShuffledGame);
    return (this.cards = newShuffledGame);
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 0) return false;

    console.log(this.cards.length);
    if (this.pairsGuessed !== this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
