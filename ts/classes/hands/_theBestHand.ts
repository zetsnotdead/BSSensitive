import { Card, HandStrength, CardClass, HoldemHoleCards, OmahaHoleCards, HoleCards, HandCards, Flop, FlopTurn, FlopTurnRiver, BoardCards, TheBestHandParams } from './../hands/_interfaces'
import { HandRankSearch } from './../hands/_handReading'


// finds the best hand out of given card combination
export class TheBestHand {
  private _uniqHands: Card[][];
  private _result: CardClass;

  private _cards: HandCards;
  private _playerCards: HoleCards;
  private _boardCards: BoardCards;
  private _gameType: 'Holdem' | 'Omaha';

  constructor(params: TheBestHandParams) {
    this.playerCards = params.playerCards;
    this.boardCards = params.boardCards;

    this.setGameType();
    this.findUniqHands();
    this.findTheBestHand();
  }

  private set playerCards(cards: HoleCards) {
    if (!(cards.length === 4 || cards.length === 2))
      throw new Error('Player hand must have 2 or 4 cards');
    this._playerCards = cards;
  }

  private set boardCards(cards: BoardCards) {   
    if (cards.length > 5 || cards.length < 3 )
      throw new Error('Board cards must have between 3 and 5 cards')
    this._boardCards = cards;
  }

  get result() {
    return this._result;
  }

  private setGameType() {
    this._gameType = (this._playerCards.length === 2) ? 'Holdem' : 'Omaha';
  }
  private findTheBestHand(defaultHandStr = -1) {
    let hightestHandStr = defaultHandStr;
    for(let hand of this._uniqHands) {
      let result = new HandRankSearch(hand).result;
      if (result.handStrength > hightestHandStr) {
        this._result = result;
        hightestHandStr = result.handStrength;
      }
      
    }
  }

  *generateHand(cards: OmahaHoleCards) {
    let one, two;
    [one, two, , ] = cards;
    yield([one, two]);

    [one, , two, ] = cards;
    yield([one, two]);

    [one, , , two] = cards;
    yield([one, two]);

    [, one, two, ] = cards;
    yield([one, two]);

    [, one, , two] = cards;
    yield([one, two]);

    [, , one, two] = cards;
    yield([one, two]);
  }

  private castCards<T>(args: T[]): [T, T, T, T] {
    if (args.length !== 4) {
      throw new Error('generateHand accepts omaha hands only (length 4)')
    }
    return <any> args
  }

  private generateHoldemHandsOutOfOmahaHand() {
    let omahaCards: OmahaHoleCards = this.castCards(this._playerCards)
    let gen = this.generateHand(omahaCards)
    let hands: {}[]; 
    for(let hand of gen) {
      hands.push(hand)
    }
    return hands;
  }



  private usingOneHoleCard(core: Card[], rest: Card[]): Card[][] {
  /*  given [1,2,3,4,5] core and [6, 7] rest will replace each core element with 6 and then with 7 */
    let result: Card[][] = [];
    for (let i = 0; i < core.length; i++ ) {
      for (let replacement of rest) {
        let temp = [...core];
        temp[i] = replacement;
        result.push(temp)
      }
    }
    return result;
  }

  private usingTwoHoleCards(core: Card[], rest: Card[]): Card[][] {
  /*  given [1,2,3,4,5] core and [6, 7] rest will replace eachtwo core element with 6 and 7 */
    let result: Card[][] = [];
    for (let i = 0; i < core.length; i++ ) {
      let [first, second] = rest;
      // make sure to not replace element with the same index twice
      let idxs = [0, 1, 2, 3, 4].filter(( _v, idx) => idx < i )
      for (let idx of idxs) {
        let temp = [...core];
        temp[i] = first;
        temp[idx] = second;
        result.push(temp)
      }
    }
    return result;
  }

  private getCoreAndRest(playerCards: Card[]): { core: Card[], rest: Card[] } {
    let arr = [...this._boardCards, ...this._playerCards];
    return {
      core: arr.slice(0, 5),
      rest: arr.slice(5)
    }
  }
  private findUniqHands() {
    if (this._gameType === 'Holdem') this.findUniqHoldemHands()
    if (this._gameType === 'Omaha') this.findUniqOmahaHands();
  }

  private findUniqOmahaHands() {
    let possibleHoleCards = this.generateHoldemHandsOutOfOmahaHand();
    for(let playerCards of possibleHoleCards) {
      let { core, rest } = this.getCoreAndRest(playerCards)
    }
  }

  private findUniqHoldemHands() {
    let { core, rest } = this.getCoreAndRest(this._playerCards)
    let oneHoleCardSubstitution = this.usingOneHoleCard(core, rest)
    let twoHoleCardsSubStitution = this.usingTwoHoleCards(core, rest)
    this._uniqHands = [...oneHoleCardSubstitution, ...twoHoleCardsSubStitution, core]
  }

}